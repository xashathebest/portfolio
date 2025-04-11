import React, { useState, useEffect } from 'react';
import ScrollAnimation from './ScrollAnimation';

const AIAssistant = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Predefined questions and answers with keywords
  const qaPairs = {
    'services': {
      answer: 'I offer web design, web development, and jersey design services. Each service is tailored to meet your specific needs. Would you like to know more about any particular service? 😊',
      keywords: ['services', 'offer', 'provide', 'do', 'work', 'what do you do']
    },
    'web design cost': {
      answer: 'Web design services start at ₱800, depending on the complexity and requirements of your project. I can create beautiful, responsive designs that perfectly match your vision! Would you like to discuss your project? 🎨',
      keywords: ['web design', 'design cost', 'price', 'cost', 'how much', 'design price']
    },
    'web development cost': {
      answer: 'Web development services start at ₱1,200, with the final cost depending on the features and functionality needed. I can build fast, secure, and user-friendly websites! Ready to bring your ideas to life? 💻',
      keywords: ['web development', 'development cost', 'price', 'cost', 'how much', 'dev price']
    },
    'jersey design cost': {
      answer: 'Jersey design services start at ₱350 per design, with customizations available. I can create unique, eye-catching designs for your team! Want to see some examples? 👕',
      keywords: ['jersey', 'jersey design', 'design cost', 'price', 'cost', 'how much']
    },
    'timeline': {
      answer: 'The timeline varies by project, but typically: Web Design (1-2 weeks), Web Development (2-4 weeks), Jersey Design (3-5 days). I work efficiently to deliver quality results on time! When would you like to start? ⏱️',
      keywords: ['how long', 'time', 'timeline', 'duration', 'take', 'finish', 'complete']
    },
    'revisions': {
      answer: 'Yes, I offer up to 3 revisions for each project to ensure you\'re completely satisfied with the final result. Your satisfaction is my priority! How can I help you today? ✨',
      keywords: ['revisions', 'changes', 'modify', 'edit', 'alter', 'adjust']
    },
    'payment': {
      answer: 'I accept various payment methods including GCash, PayPal, and bank transfers. Let\'s make the payment process smooth and convenient for you! Which method works best for you? 💳',
      keywords: ['payment', 'pay', 'money', 'gcash', 'paypal', 'bank', 'transfer']
    },
    'portfolio': {
      answer: 'Of course! You can view my portfolio by clicking on the "Our Works" section. I\'d love to show you what I can do! Would you like to see some specific examples? 🎯',
      keywords: ['portfolio', 'works', 'projects', 'examples', 'samples', 'show']
    },
    'contact': {
      answer: 'You can contact me through Facebook Messenger by clicking the "Contact Now" button. I\'m always excited to hear about new projects! Let\'s create something amazing together! 🚀',
      keywords: ['contact', 'reach', 'get in touch', 'message', 'connect', 'talk']
    },
    'greeting': {
      answer: 'Hello there! 👋 I\'m thrilled to help you today! What can I do for you?',
      keywords: ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening']
    },
    'goodbye': {
      answer: 'It was great chatting with you! Feel free to come back anytime if you have more questions. Have a wonderful day! 🌟',
      keywords: ['bye', 'goodbye', 'thanks', 'thank you', 'thank', 'see you']
    },
    'positive': {
      answer: 'That\'s wonderful to hear! 😊 I\'m glad I could help. Is there anything else you\'d like to know?',
      keywords: ['awesome', 'great', 'amazing', 'perfect', 'cool', 'nice', 'good', 'wow', 'excellent', 'fantastic']
    },
    'availability': {
      answer: 'Yes, I\'m available to take on new projects! 🎉 What would you like to work on? I\'m excited to help bring your ideas to life!',
      keywords: ['available', 'avail', 'free', 'busy', 'working', 'project', 'start']
    }
  };

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsTyping(true);
    const lowerQuestion = question.toLowerCase().trim();
    
    // Find the best matching answer
    let bestAnswer = "I'm excited to help, but I'm not sure I understand. Could you try asking in a different way? Ask Shahrukh Biao on Messenger or Click the contact button! 😊";
    let bestMatchScore = 0;

    // Check for matches in each category
    for (const [category, data] of Object.entries(qaPairs)) {
      // Check if the question contains any of the keywords
      const matchScore = data.keywords.reduce((score, keyword) => {
        if (lowerQuestion.includes(keyword)) {
          return score + 1;
        }
        return score;
      }, 0);

      // If this category has a better match score, update the answer
      if (matchScore > bestMatchScore) {
        bestMatchScore = matchScore;
        bestAnswer = data.answer;
      }
    }

    // If no good match was found, try to find a partial match
    if (bestMatchScore === 0) {
      for (const [category, data] of Object.entries(qaPairs)) {
        // Split the question into words and check if any word matches a keyword
        const words = lowerQuestion.split(' ');
        const hasPartialMatch = words.some(word => 
          data.keywords.some(keyword => keyword.includes(word) || word.includes(keyword))
        );

        if (hasPartialMatch) {
          bestAnswer = data.answer;
          break;
        }
      }
    }

    // Simulate typing effect
    setTimeout(() => {
      setAnswer(bestAnswer);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Assistant Button */}
      <div className="fixed bottom-24 right-8 z-50">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={() => !isMobile && setShowTooltip(true)}
            onMouseLeave={() => !isMobile && setShowTooltip(false)}
            className="p-2 hover:scale-110 transition-transform duration-300 bg-white rounded-xl shadow-lg border-2 border-black"
          >
            <img src="/imgs/img6.png" alt="AI Assistant" className="w-16 h-16" />
          </button>
          
          {/* Desktop Tooltip */}
          {!isMobile && showTooltip && (
            <div className="absolute bottom-full right-0 mb-2 w-72 bg-white rounded-2xl border-4 border-black p-4 shadow-xl transform transition-all duration-300 ease-in-out">
              <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white border-r-4 border-b-4 border-black transform rotate-45"></div>
              <h3 className="font-bold mb-2 text-base text-[#030F1F]">Try asking me about:</h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-[#F7CB45]">•</span>
                  <span>Services and offerings</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#F7CB45]">•</span>
                  <span>Web design costs</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#F7CB45]">•</span>
                  <span>Web development costs</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#F7CB45]">•</span>
                  <span>Jersey design costs</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#F7CB45]">•</span>
                  <span>Project timelines</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#F7CB45]">•</span>
                  <span>Revisions policy</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#F7CB45]">•</span>
                  <span>Payment methods</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#F7CB45]">•</span>
                  <span>How to contact</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-32 right-8 z-50 w-80 md:w-96 bg-white rounded-3xl border-4 border-black shadow-xl">
          <div className="p-4">
            {/* Chat Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <img src="/imgs/img6.png" alt="AI Assistant" className="w-10 h-10" />
                <h3 className="font-bold text-lg">AI Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-64 overflow-y-auto mb-4 pr-2">
              <div className="bg-[#F7CB45] rounded-2xl p-3 mb-2">
                <p className="text-sm">Hello! I'm your AI assistant. How can I help you today?</p>
              </div>
              
              {answer && (
                <div className="bg-[#F7CB45] rounded-2xl p-3 mb-2">
                  <p className="text-sm">{answer}</p>
                </div>
              )}

              {isTyping && (
                <div className="bg-[#F7CB45] rounded-2xl p-3 mb-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-black rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 items-stretch">
              <div className="flex-1 flex items-center">
                <input
                  type="text"
                  value={question}
                  onChange={handleQuestion}
                  placeholder="Type your question..."
                  className="w-full p-2 rounded-2xl border-2 border-black focus:outline-none focus:border-[#F7CB45] text-sm"
                />
              </div>
              <div className="flex gap-2">
                {isMobile && (
                  <button
                    type="button"
                    onClick={() => setShowPanel(!showPanel)}
                    className="bg-[#F7CB45] text-black p-2 rounded-2xl hover:bg-[#e6b73c] transition-colors flex items-center justify-center min-w-[40px]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                )}
                <button
                  type="submit"
                  className="bg-[#030F1F] text-white p-2 rounded-2xl hover:bg-[#1a1a1a] transition-colors flex items-center justify-center min-w-[40px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Help Panel */}
      {isMobile && (
        <div className={`fixed bottom-0 right-0 w-full bg-white rounded-t-3xl border-4 border-black shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${showPanel ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-[#030F1F]">What can I help you with?</h3>
              <button
                onClick={() => setShowPanel(false)}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-[#F7CB45] rounded-2xl p-4">
                <h4 className="font-bold mb-2">Services and Pricing</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-[#030F1F]">•</span>
                    <span>Web Design: Starting at ₱800</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[#030F1F]">•</span>
                    <span>Web Development: Starting at ₱1,200</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[#030F1F]">•</span>
                    <span>Jersey Design: Starting at ₱350</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#F7CB45] rounded-2xl p-4">
                <h4 className="font-bold mb-2">Common Questions</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-[#030F1F]">•</span>
                    <span>Project timelines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[#030F1F]">•</span>
                    <span>Revisions policy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[#030F1F]">•</span>
                    <span>Payment methods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[#030F1F]">•</span>
                    <span>How to contact</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Try asking me about any of these topics!</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant; 