import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  
  // This would typically come from a database or CMS
  // For now, we'll use static data that can be easily updated
  const works = [
    {
      id: 1,
      category: "Web Development",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout process.",
      price: "1,200 peso",
      image: "/imgs/img15.png"
    },
    {
      id: 2,
      category: "Jersey Design",
      description: "Custom-designed jerseys for a local soccer team with team colors, logos, and player numbers.",
      price: "350 peso",
      image: "/imgs/img20.png"
    },
    {
      id: 3,
      category: "Web Design",
      description: "A clean, modern portfolio website for a photographer showcasing their work with a gallery and contact form.",
      price: "800 peso",
      image: "/imgs/img18.png"
    },
    {
      id: 4,
      category: "Web Design",
      description: "An interactive restaurant menu with categories, images, and online ordering capabilities.",
      price: "600 peso",
      image: "/imgs/img19.png"
    },
    {
      id: 5,
      category: "Jersey Design",
      description: "Complete corporate branding package including logo design, business cards, and branded merchandise.",
      price: "950 peso",
      image: "/imgs/img20.png"
    },
    {
      id: 6,
      category: "Web Development",
      description: "A custom blog platform with content management system, categories, and search functionality.",
      price: "1,500 peso",
      image: "/imgs/img15.png"
    }
  ];

  const categories = ['All', 'Web Development', 'Web Design', 'Jersey Design'];
  
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
        <div className="bg-[#F7CB45] w-full py-6 mt-20 sm:py-8 ">
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
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 ${
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
                  <Link to={`/works/${work.id}`} className="h-full block">
                    <div className="bg-[#FEF8F8] rounded-3xl border-4 border-black overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                      <div className="h-48 sm:h-56 overflow-hidden">
                        <img 
                          src={work.image} 
                          alt={work.category} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 sm:p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg sm:text-xl font-bold">{work.category}</h3>
                          <span className="bg-[#F7CB45] text-black px-2 py-1 rounded-full text-xs sm:text-sm">{work.price}</span>
                        </div>
                        <p className="text-gray-600 mb-4 text-sm sm:text-base flex-grow">{work.description}</p>
                        <div className="flex justify-end items-center mt-auto">
                          <button className="bg-[#030F1F] text-white p-1.5 px-3 sm:p-2 sm:px-4 rounded-full text-xs sm:text-sm transition-all duration-300 hover:bg-[#1a1a1a]">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollAnimation>
              ))}
            </div>

            {/* Empty State */}
            {filteredWorks.length === 0 && (
              <ScrollAnimation delay={300}>
                <div className="text-center py-10">
                  <h3 className="text-2xl font-bold mb-4">No works found in this category</h3>
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