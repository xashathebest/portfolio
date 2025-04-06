import React from 'react'

const hero = () => {
  return (
    <div className='width-max relative'>
        <div className='xl:flex  xl:container justify-between w-full xl:mt-24 '>
            <div className='xl:ml-28  mt-16'>
               <div> 
              <h2 className='text-center text-4xl pt-9 md:text-5xl xl:pt-20 xl:text-6xl ' style={{ fontFamily: "'PT Serif Caption', serif" }}>
                Tailored for You</h2>
              <p className='text-xs text-center pt-4 md:text-lg md:leading-tight xl:text-xl'>Affordable, custom web design that elevates<br/>
              your brand and engages your audience.</p>
            </div>
            <div className='flex justify-center pt-5 gap-5 '>
              <div className='flex justify-center xl:pt-5 xl:  text-xl'>
              <a href="https://www.facebook.com/shahrukh.biao?mibextid=ZbWKwL"><button className='btn '>Contact Now</button></a>
            </div>
            <div className='justify-center pt-5 hidden xl:block'>
              <button className='btn1  '>Learn More</button>
            </div>
            </div>
            </div>
            <div className=''>
            <div className='flex justify-center pt-10 pr-4'>
              <img src="/imgs/img3.png" alt="Hero" className='w-10/12 z-10 mt-8  md:w-6/12 xl:w-[500px]   ' />
            </div>
            <div>
              <img src="/imgs/img4.png" alt="Hero" className='absolute img-bounce top-16 w-24 -left-10 md:w-24  xl:left-40 xl:top-[500px] xl:w-44' />
            </div> 
            <div>
              <img src="/imgs/img5.png" alt="Hero" className='absolute img-bounce top-52 -right-5 w-16 md:w-20    xl:top-24 xl:right-48 xl:w-24' />
            </div> 
            <div >
             <img src="/imgs/img6.png" alt="Hero" className='fixed top-[450px] w-40 right-48 z-20 hidden xl:block' />
            </div>
            </div>
        </div>
        <div className="flex bg-[#F196E5] justify-center text-center z-20 py-8 h-40 md:h-20 lg:h-48">
  <div className="w-full max-w-6xl -mt-10">
    {/* Numbers Section */}
    <ul className="flex justify-center gap-12 text-sm md:text-2xl xl:text-2xl text-white">
      <li>458K+</li>
      <li>200K+</li>
      <li>12K+</li>
    </ul>

    {/* Labels Section */}
    <ul className="flex justify-center pt-3 gap-9 text-xs md:text-sm text-white">
      <li>Collection</li>
      <li>Artists</li>
      <li>Community</li>
    </ul>
  </div>
</div>

    </div> 
  )
}

export default hero