import { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.target);
    formData.append('form-name', 'contact');
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="relative max-w-7xl mx-auto">
        <p className="text-center text-2xl font-semibold pt-5 md:text-3xl">Contact</p>
        <img 
          src="/imgs/img8.png" 
          alt="Contact" 
          className="absolute w-2/12 top-0 -right-5 md:w-2/12 lg:w-1/12" 
        />
        
        <div className="mt-12 max-w-4xl mx-auto">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            netlify
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                placeholder="Tell us about your project..."
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {formStatus === 'success' && (
              <div className="text-center text-sm text-green-600 animate-fade-in">
                Message sent successfully!
              </div>
            )}

            {formStatus === 'error' && (
              <div className="text-center text-sm text-red-600">
                There was an error sending your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 