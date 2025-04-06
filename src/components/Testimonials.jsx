import React, { useState, useEffect } from "react";

const Testimonials = () => {
    const testimonials = [
        <div className="font-semibold">
          <div className="flex gap-2">
            <div className="flex flex-col items-start ">
              <img
                src="/imgs/img21.png"
                alt="Testimonial 1"
                className="w-10 h-10 ml-5 rounded-full"
              />
              <h2>Christine Von</h2>
              <img src="/imgs/img24.png" className="w-20"/>          
        
            </div>
            <div>
              <div className="border-l-2 border-black w-1 h-20  "></div>      
            <p className="font-thin -mt-16 pb-2 pl-2">  "I really love the<br/> designs made"</p>
            </div>
            
          </div>
        </div>,
        <div className="font-semibold">
        <div className="flex gap-2">
          <div className="flex flex-col items-start ">
            <img
              src="/imgs/img22.png"
              alt="Testimonial 1"
              className="w-10 h-10 ml-5 rounded-full"
            />
            <h2>Lexi Smith</h2>
            <img src="/imgs/img24.png" className="w-20"/>          
      
          </div>
          <div>
            <div className="border-l-2 border-black w-1 h-20  "></div>      
          <p className="font-thin -mt-16 pb-2 pl-2">  "I like how fast the<br/> development"</p>
          </div>
          
        </div>
      </div>,
        <div className="font-semibold">
        <div className="flex gap-2">
          <div className="flex flex-col items-start ">
            <img
              src="/imgs/img23.png"
              alt="Testimonial 1"
              className="w-10 h-10 ml-5 rounded-full"
            />
            <h2>Abdul Muj</h2>
            <img src="/imgs/img24.png" className="w-20"/>          
      
          </div>
          <div>
            <div className="border-l-2 border-black w-1 h-20  "></div>      
          <p className="font-thin -mt-16 pb-2 pl-2">  "Very nice<br/> and fast, good"</p>
          </div>
          
        </div>
      </div>,
      ];
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
      };
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      };
    
    
    return (
        
    
        <div className="bg-[#F7CB45] w-screen  relative ">
        <div className="flex items-center pt-10 ">
        <div>
            <img 
                src="/imgs/img11.png" 
                alt="Testimonials" 
                className="w-16 absolute top-3 -left-8 xl:w-20 xl:left-40" 
            />
            <img 
                src="/imgs/img12.png" 
                alt="Testimonials" 
                className="w-10 absolute top-3 right-1"
            />
             <img 
                src="/imgs/img12.png" 
                alt="Testimonials" 
                className="w-10 absolute bottom-56 left-52 md:w-16  xl:bottom-72 xl:left-[780px]"
            />
            <img 
                src="/imgs/img13.png" 
                alt="Testimonials" 
                className="w-16 absolute bottom-48 -right-8 md:w-24 xl:w-32 xl:right-36" 
            />
        </div>
        <img 
            src="/imgs/img10.png" 
            alt="Testimonials" 
            className="w-1/3 h-auto max-h-64 object-contain pt-8 ml-2 md:ml-8 xl:ml-60 " 
        />


        <div className="flex flex-col ml-8 md:ml-20 xl:mx-auto" id="testimonials">
            <h2 className="text-lg  font-bold leading-tight md:text-4xl xl:text-5xl">
            THE FUTURE OF<br />
            DESIGN SERVICES
            </h2>
            <p className="w-40 text-sm text-justify mt-4 md:text-lg md:w-72 ">
            I offer expert web design, jersey design, and web development services, providing customized, high-quality solutions to make your brand stand out.
            </p>
        </div>
        
    </div>

<div>


      <div className="flex items-center flex-col">
        <h2 className="text-center mt-10 mb-3 font-bold text-2xl md:text-3xl md:mb-10">
          Testimonials
        </h2>
        <div className="flex justify-center pb-10 xl:w-7/12">
          <div className="w-72 rounded-xl h-28 bg-[#FEF8F8] border-4 border-black md:w-4/6 lg:h-36 flex items-center justify-center text-center">
            <p>{testimonials[currentIndex]}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-24 items-center">
        <button
          onClick={handlePrev}
          className="w-10 h-10 bg-[#030F1F] text-white text-4xl flex items-center justify-center"
        >
          {"<"}
        </button>
        <p>{`${currentIndex + 1} of ${testimonials.length}`}</p>
        <button
          onClick={handleNext}
          className="w-10 h-10 bg-[#030F1F] text-white text-4xl flex items-center justify-center"
        >
          {">"}
        </button>
      </div>
    </div>

        </div>        


    )
}

export default Testimonials
