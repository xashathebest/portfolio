import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [modalImage, setModalImage] = useState(null);
  
  // This would typically come from a database or CMS
  // For now, we'll use static data that can be easily updated
  const works = [
    {
      id: 1,
      category: "Digital Art",
      description: "A modern and elegant portfolio website showcasing Diana's creative work and professional experience.",
      price: "₱800",
      image: "/imgs/diana1.jpg"
    },
    {
      id: 2,
      category: "Digital Art",
      description: "An interactive e-commerce website with advanced product filtering and secure payment integration.",
      price: "₱1,200",
      image: "/imgs/diana2.jpg"
    },
    {
      id: 3,
      category: "Digital Art",
      description: "Custom sports jerseys with unique patterns and team branding for a local basketball team.",
      price: "₱350",
      image: "/imgs/diana3.jpg"
    },
    {
      id: 4,
      category: "Digital Art",
      description: "A responsive business website with modern UI elements and seamless user experience.",
      price: "₱800",
      image: "/imgs/diana4.jpg"
    },
    {
      id: 5,
      category: "Digital Art",
      description: "A dynamic event management platform with real-time updates and ticket booking system.",
      price: "₱1,200",
      image: "/imgs/diana5.jpg"
    },
    {
      id: 6,
      category: "Layout Design",
      description: "Custom team uniforms with innovative designs and high-quality materials for a volleyball team.",
      price: "₱350",
      image: "/imgs/diana6.jpg"
    },
    {
      id: 7,
      category: "Web Development",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout process.",
      price: "₱1,200",
      image: "/imgs/img15.png"
    },
    {
      id: 8,
      category: "Jersey Design",
      description: "Custom-designed jerseys for a local soccer team with team colors, logos, and player numbers.",
      price: "₱350",
      image: "/imgs/jersey1.jpg"
    },
    {
      id: 9,
      category: "Web Design",
      description: "A clean, modern portfolio website for a photographer showcasing their work with a gallery and contact form.",
      price: "₱800",
      image: "/imgs/img16.png"
    },
    {
      id: 10,
      category: "Web Design",
      description: "An interactive restaurant menu with categories, images, and online ordering capabilities.",
      price: "₱600",
      image: "/imgs/webdesign1.png"
    },
    {
      id: 11,
      category: "Jersey Design",
      description: "Complete corporate branding package including logo design, business cards, and branded merchandise.",
      price: "₱950",
      image: "/imgs/jersey2.jpg"
    },
    {
      id: 12,
      category: "Web Development",
      description: "A custom blog platform with content management system, categories, and search functionality.",
      price: "₱1,500",
      image: "/imgs/img15.png"
    }
  ];

  const categories = ['All', 'Web Development', 'Web Design', 'Jersey Design', 'Layout Design', 'Digital Art'];
  
  const filteredWorks = selectedCategory === 'All' 
    ? works 
    : works.filter(work => work.category === selectedCategory);

  // Simulate loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white w-full min-h-screen py-10">
      {/* Header Section */}
      <div className="relative">
        <div className="bg-[#F7CB45] w-full py-6 mt-20 sm:py-8">
          <div className="container mx-auto px-4">
            <ScrollAnimation delay={100}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Our Works</h1>
              <p className="text-center mt-2 text-base sm:text-lg">Explore our portfolio of successful projects</p>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 mt-6 sm:mt-8">
        <ScrollAnimation delay={200}>
          <div className="flex flex-wrap justify-center gap-1.5 xs:gap-1 sm:gap-2 mb-6 sm:mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-2.5 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-base transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#F7CB45] text-black'
                    : 'bg-[#FEF8F8] text-black border-2 border-black hover:bg-[#F7CB45]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#F7CB45]"></div>
          </div>
        ) : (
          <>
            {/* Works Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredWorks.map((work, index) => (
                <ScrollAnimation key={work.id} delay={300 + (index * 100)}>
                  <div className="bg-[#FEF8F8] rounded-3xl border-4 border-black overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                    <div 
                      className="h-48 sm:h-56 overflow-hidden cursor-pointer group relative"
                      onDoubleClick={(e) => {
                        e.stopPropagation();
                        setModalImage(work.image);
                      }}
                    >
                      <img 
                        src={work.image} 
                        alt={work.category} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                    </div>
                    <div className="p-4 sm:p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg sm:text-xl font-['Poppins']">{work.category}</h3>
                        <span className="bg-[#F7CB45] text-black px-2 py-1 rounded-full text-xs sm:text-sm">{work.price}</span>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm sm:text-base flex-grow">{work.description}</p>
                      <div className="flex justify-between items-center mt-auto">
                        <h2 className="text-sm font-bold font-['Poppins']">
                          {work.image.includes('diana1.jpg') || 
                           work.image.includes('diana2.jpg') || 
                           work.image.includes('diana3.jpg') || 
                           work.image.includes('diana4.jpg') || 
                           work.image.includes('diana5.jpg') || 
                           work.image.includes('diana6.jpg') 
                           ? 'Diana C.' 
                           : 'Sha B.'}
                        </h2>
                        <Link to={`/works/${work.id}`}>
                          <button className="bg-[#030F1F] text-white p-1.5 px-3 sm:p-2 sm:px-4 rounded-full text-xs sm:text-sm transition-all duration-300 hover:bg-[#1a1a1a]">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {/* Empty State */}
            {filteredWorks.length === 0 && (
              <ScrollAnimation delay={300}>
                <div className="text-center py-10">
                  <h3 className="text-2xl font-['Poppins'] mb-4">No works found in this category</h3>
                  <p className="text-gray-600 mb-6">Try selecting a different category</p>
                  <button 
                    onClick={() => setSelectedCategory('All')}
                    className="bg-[#F7CB45] text-black p-3 px-6 rounded-3xl border-2 border-black transition-all duration-300 hover:shadow-lg"
                  >
                    View All Works
                  </button>
                </div>
              </ScrollAnimation>
            )}
          </>
        )}

        {/* Image Modal */}
        {modalImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center p-4"
            onClick={() => setModalImage(null)}
          >
            <div 
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-10"
                onClick={() => setModalImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={modalImage} 
                alt="Full size" 
                className="w-full h-auto rounded-lg shadow-2xl"
                style={{ maxHeight: '90vh', objectFit: 'contain' }}
              />
            </div>
          </div>
        )}

        {/* Back to Home Button */}
        <ScrollAnimation delay={800}>
          <div className="text-center mt-8 sm:mt-10">
            <Link to="/">
              <button className="bg-[#030F1F] text-white p-3 px-6 rounded-3xl transition-all duration-300 hover:bg-[#1a1a1a]">
                Back to Home
              </button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Works; 