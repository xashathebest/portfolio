import React, { useState, useEffect } from "react";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Christine Von",
            image: "/imgs/img21.png",
            rating: "/imgs/img24.png",
            text: "I really love the designs made. The attention to detail and creativity exceeded my expectations. Highly recommended!"
        },
        {
            name: "Lexi Smith",
            image: "/imgs/img22.png",
            rating: "/imgs/img24.png",
            text: "I like how fast the development process was. The team delivered exactly what I needed, on time and with excellent quality."
        },
        {
            name: "Abdul Muj",
            image: "/imgs/img23.png",
            rating: "/imgs/img24.png",
            text: "Very nice and fast, good communication throughout the project. The final result was exactly what I envisioned."
        },
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
  
    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
        setTimeout(() => setIsAnimating(false), 500);
    };
  
    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setTimeout(() => setIsAnimating(false), 500);
    };

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="bg-[#F7CB45] w-screen relative py-16" id="testimonials">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img 
                    src="/imgs/img11.png" 
                    alt="Decorative element" 
                    className="w-16 absolute top-3 -left-8 xl:w-20 xl:left-40 transition-transform duration-300 hover:scale-110" 
                />
                <img 
                    src="/imgs/img12.png" 
                    alt="Decorative element" 
                    className="w-10 absolute top-3 right-1 transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/imgs/img12.png" 
                    alt="Decorative element" 
                    className="w-10 absolute bottom-56 left-52 md:w-16 xl:bottom-72 xl:left-[780px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/imgs/img13.png" 
                    alt="Decorative element" 
                    className="w-16 absolute bottom-48 -right-8 md:w-24 xl:w-32 xl:right-36 transition-transform duration-300 hover:scale-110" 
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Future of Design Services section */}
                <div className="flex flex-col md:flex-row items-center mb-16">
                    <img 
                        src="/imgs/img10.png" 
                        alt="Design Services" 
                        className="w-1/3 h-auto max-h-64 object-contain mb-8 md:mb-0 md:mr-8 transition-transform duration-300 hover:scale-105" 
                    />

                    <div className="flex flex-col md:ml-8">
                        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-tight text-center md:text-left">
                            THE FUTURE OF<br />
                            <span className="text-[#030F1F]">DESIGN SERVICES</span>
                        </h2>
                        <p className="mt-4 text-base md:text-lg text-justify max-w-md">
                            I offer expert web design, jersey design, and web development services, providing customized, high-quality solutions to make your brand stand out.
                        </p>
                    </div>
                </div>

                {/* Testimonials section */}
                <div className="mt-8">
                    <h2 className="text-center mb-8 font-bold text-2xl md:text-3xl">
                        What Clients Say
                    </h2>
                    
                    <div className="flex justify-center mb-8">
                        <div className={`w-full max-w-3xl rounded-xl bg-[#FEF8F8] border-4 border-black p-6 md:p-8 transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                                <div className="flex flex-col items-center md:items-start">
                                    <img
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#F7CB45] shadow-md transition-transform duration-300 hover:scale-110"
                                    />
                                    <h3 className="font-bold text-lg mt-2">{testimonials[currentIndex].name}</h3>
                                    <img 
                                        src={testimonials[currentIndex].rating} 
                                        alt="Rating" 
                                        className="w-24 mt-1 transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                
                                <div className="flex-1">
                                    <div className="border-l-4 border-[#F7CB45] pl-4 md:pl-6">
                                        <p className="text-gray-700 italic text-base md:text-lg">
                                            "{testimonials[currentIndex].text}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-center items-center gap-8">
                        <button
                            onClick={handlePrev}
                            className="w-12 h-12 bg-[#030F1F] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#1a1a1a] hover:scale-110 focus:outline-none"
                            aria-label="Previous testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        
                        <div className="flex space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        if (isAnimating) return;
                                        setIsAnimating(true);
                                        setCurrentIndex(index);
                                        setTimeout(() => setIsAnimating(false), 500);
                                    }}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentIndex ? 'bg-[#030F1F] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                        
                        <button
                            onClick={handleNext}
                            className="w-12 h-12 bg-[#030F1F] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#1a1a1a] hover:scale-110 focus:outline-none"
                            aria-label="Next testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
