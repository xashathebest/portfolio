import React from "react";

const Brands = () => {
    return (
      <div className=" w-screen  " >
        <div className="bg-white w-full py-5 pt-5 ">
          <div className="logos flex justify-center items-center overflow-hidden container">
            <div className="logos-slide flex items-center animate-slide gap-5">
              {/* Logos */}
              <img src="/svgs/3m.svg" alt="3M Logo" className="h-12 mx-5" />
              <img src="/svgs/barstool-store.svg" alt="Barstool Logo" className="h-12 mx-5" />
              <img src="/svgs/budweiser.svg" alt="Budweiser Logo" className="h-12 mx-5" />
              <img src="/svgs/buzzfeed.svg" alt="Buzzfeed Logo" className="h-12 mx-5" />
              <img src="/svgs/forbes.svg" alt="Forbes Logo" className="h-12 mx-5" />
              <img src="/svgs/macys.svg" alt="Macys Logo" className="h-12 mx-5" />
              <img src="/svgs/menshealth.svg" alt="MensHealth Logo" className="h-12 mx-5" />
              <img src="/svgs/mrbeast.svg" alt="MrBeast Logo" className="h-12 mx-5" />
              {/* Repeating Logos */}
              <img src="/svgs/3m.svg" alt="3M Logo" className="h-12 mx-5" />
              <img src="/svgs/barstool-store.svg" alt="Barstool Logo" className="h-12 mx-5" />
              <img src="/svgs/budweiser.svg" alt="Budweiser Logo" className="h-12 mx-5" />
              <img src="/svgs/buzzfeed.svg" alt="Buzzfeed Logo" className="h-12 mx-5" />
              <img src="/svgs/forbes.svg" alt="Forbes Logo" className="h-12 mx-5" />
              <img src="/svgs/macys.svg" alt="Macys Logo" className="h-12 mx-5" />
              <img src="/svgs/menshealth.svg" alt="MensHealth Logo" className="h-12 mx-5" />
              <img src="/svgs/mrbeast.svg" alt="MrBeast Logo" className="h-12 mx-5" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default Brands;