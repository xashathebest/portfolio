import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const WorkDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [modalImage, setModalImage] = useState(null);
  
  // This would typically come from a database or CMS
  // For now, we'll use static data that can be easily updated
  const works = [
    {
      id: 1,
      category: "Digital Art",
      description: "A modern and elegant portfolio website showcasing Diana's creative work and professional experience.",
      longDescription: "Modern magazine layout design with dynamic typography and visual hierarchy. The design incorporates modern typography principles, creating a dynamic reading experience with carefully considered visual hierarchy.",
      price: "₱800",
      image: "/imgs/diana1.jpg",
      gallery: [
        "/imgs/diana2.jpg",
        "/imgs/diana3.jpg",
        "/imgs/diana4.jpg"
      ],
      features: ["Typography Design", "Visual Hierarchy", "Grid System", "Print Optimization"],
      technologies: ["Adobe InDesign", "Adobe Photoshop", "Typography Tools", "Print Production"],
      client: "Diana C.",
      completionDate: "July 2023"
    },
    {
      id: 2,
      category: "Digital Art",
      description: "An interactive e-commerce website with advanced product filtering and secure payment integration.",
      longDescription: "Digital portrait artwork showcasing modern illustration techniques and vibrant color schemes.",
      price: "₱1,200",
      image: "/imgs/diana2.jpg",
      gallery: [
        "/imgs/diana3.jpg",
        "/imgs/diana4.jpg",
        "/imgs/diana5.jpg"
      ],
      features: ["Digital Illustration", "Color Theory", "Portrait Techniques", "High Resolution"],
      technologies: ["Adobe Photoshop", "Procreate", "Digital Brushes", "Color Management"],
      client: "Diana C.",
      completionDate: "August 2023"
    },
    {
      id: 3,
      category: "Digital Art",
      description: "Custom sports jerseys with unique patterns and team branding for a local basketball team.",
      longDescription: "Character design with unique style and personality, perfect for branding and storytelling.",
      price: "₱350",
      image: "/imgs/diana3.jpg",
      gallery: [
        "/imgs/diana4.jpg",
        "/imgs/diana5.jpg",
        "/imgs/diana6.jpg"
      ],
      features: ["Character Development", "Style Consistency", "Expression Design", "Color Psychology"],
      technologies: ["Adobe Illustrator", "Digital Drawing", "Character Animation", "Style Guides"],
      client: "Diana C.",
      completionDate: "September 2023"
    },
    {
      id: 4,
      category: "Digital Art",
      description: "A responsive business website with modern UI elements and seamless user experience.",
      longDescription: "Concept art featuring dynamic composition and detailed rendering techniques.",
      price: "₱800",
      image: "/imgs/diana4.jpg",
      gallery: [
        "/imgs/diana5.jpg",
        "/imgs/diana6.jpg",
        "/imgs/diana1.jpg"
      ],
      features: ["Environment Design", "Character Concepts", "Lighting Studies", "Texture Detail"],
      technologies: ["Digital Painting", "3D Modeling", "Texture Creation", "Lighting Effects"],
      client: "Diana C.",
      completionDate: "October 2023"
    },
    {
      id: 5,
      category: "Digital Art",
      description: "A dynamic event management platform with real-time updates and ticket booking system.",
      longDescription: "Illustration combining traditional and digital art techniques for a unique visual style.",
      price: "₱1,200",
      image: "/imgs/diana5.jpg",
      gallery: [
        "/imgs/diana6.jpg",
        "/imgs/diana1.jpg",
        "/imgs/diana2.jpg"
      ],
      features: ["Mixed Media", "Editorial Design", "Style Innovation", "Visual Storytelling"],
      technologies: ["Traditional Media", "Digital Enhancement", "Color Grading", "Layout Design"],
      client: "Diana C.",
      completionDate: "November 2023"
    },
    {
      id: 6,
      category: "Layout Design",
      description: "Custom team uniforms with innovative designs and high-quality materials for a volleyball team.",
      longDescription: "A collection of digital paintings created for an art exhibition.",
      price: "₱350",
      image: "/imgs/diana6.jpg",
      gallery: [
        "/imgs/diana1.jpg",
        "/imgs/diana2.jpg",
        "/imgs/diana3.jpg"
      ],
      features: ["Light Studies", "Color Theory", "Digital Techniques", "Exhibition Quality"],
      technologies: ["Digital Painting", "Light Simulation", "Color Management", "Print Preparation"],
      client: "Diana C.",
      completionDate: "December 2023"
    },
    {
      id: 7,
      category: "Web Development",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout process.",
      longDescription: "This e-commerce website was developed for a local retail business looking to expand their online presence.",
      price: "₱1,200",
      image: "/imgs/img15.png",
      gallery: [
        "/imgs/img16.png",
        "/imgs/webdesign1.png",
        "/imgs/img15.png"
      ],
      features: ["Responsive Design", "Product Filtering", "Shopping Cart", "Secure Checkout"],
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      client: "Local Retail Business",
      completionDate: "March 2023"
    },
    {
      id: 8,
      category: "Jersey Design",
      description: "Custom-designed jerseys for a local soccer team with team colors, logos, and player numbers.",
      longDescription: "These custom jerseys were designed for a local soccer team competing in regional tournaments.",
      price: "₱350",
      image: "/imgs/jersey1.jpg",
      gallery: [
        "/imgs/jersey2.jpg",
        "/imgs/diana6.jpg",
        "/imgs/jersey1.jpg"
      ],
      features: ["Custom Logo", "Player Numbers", "Team Colors", "High-Quality Material"],
      technologies: ["Adobe Illustrator", "Custom Fabric Selection", "Digital Printing"],
      client: "Local Soccer Team",
      completionDate: "January 2023"
    },
    {
      id: 9,
      category: "Web Design",
      description: "A clean, modern portfolio website for a photographer showcasing their work with a gallery and contact form.",
      longDescription: "This portfolio website was designed for a professional photographer looking to showcase their work online.",
      price: "₱800",
      image: "/imgs/img16.png",
      gallery: [
        "/imgs/img15.png",
        "/imgs/webdesign1.png",
        "/imgs/img16.png"
      ],
      features: ["Image Gallery", "Contact Form", "Responsive Design", "SEO Optimized"],
      technologies: ["HTML/CSS", "JavaScript", "Lightbox Gallery", "Contact Form API"],
      client: "Professional Photographer",
      completionDate: "April 2023"
    },
    {
      id: 10,
      category: "Web Design",
      description: "An interactive restaurant menu with categories, images, and online ordering capabilities.",
      longDescription: "This interactive restaurant menu was designed for a popular local restaurant looking to modernize their ordering process.",
      price: "₱600",
      image: "/imgs/webdesign1.png",
      gallery: [
        "/imgs/img16.png",
        "/imgs/img15.png",
        "/imgs/webdesign1.png"
      ],
      features: ["Interactive Menu", "Online Ordering", "Mobile Friendly", "Image Gallery"],
      technologies: ["React", "Firebase", "Payment Gateway Integration", "Responsive Design"],
      client: "Local Restaurant",
      completionDate: "February 2023"
    },
    {
      id: 11,
      category: "Jersey Design",
      description: "Complete corporate branding package including logo design, business cards, and branded merchandise.",
      longDescription: "This comprehensive corporate branding package was created for a startup company looking to establish a strong brand identity.",
      price: "₱950",
      image: "/imgs/jersey2.jpg",
      gallery: [
        "/imgs/jersey1.jpg",
        "/imgs/diana6.jpg",
        "/imgs/jersey2.jpg"
      ],
      features: ["Logo Design", "Business Cards", "Branded Merchandise", "Style Guide"],
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Brand Guidelines", "Print Production"],
      client: "Startup Company",
      completionDate: "May 2023"
    },
    {
      id: 12,
      category: "Web Development",
      description: "A custom blog platform with content management system, categories, and search functionality.",
      longDescription: "This custom blog platform was developed for a content creator looking to share their expertise with a wider audience.",
      price: "₱1,500",
      image: "/imgs/img15.png",
      gallery: [
        "/imgs/img16.png",
        "/imgs/webdesign1.png",
        "/imgs/img15.png"
      ],
      features: ["Content Management", "Categories", "Search Function", "Comment System"],
      technologies: ["WordPress", "Custom Theme Development", "SEO Optimization", "Analytics Integration"],
      client: "Content Creator",
      completionDate: "June 2023"
    }
  ]; // End of works array

  const work = works.find(w => w.id === parseInt(id));

  // Simulate loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Function to find work by image path
  const findWorkByImage = (imagePath) => {
    // Find all works that use this image
    const matchingWorks = works.filter(work => 
      work.image === imagePath || 
      work.gallery.includes(imagePath)
    );

    // If no matches found, return null
    if (matchingWorks.length === 0) return null;

    // If only one match, return it
    if (matchingWorks.length === 1) return matchingWorks[0];

    // If multiple matches, prioritize works where this is the main image
    const mainImageMatch = matchingWorks.find(work => work.image === imagePath);
    if (mainImageMatch) return mainImageMatch;

    // If no main image match, return the first gallery match
    return matchingWorks[0];
  };

  // Function to handle gallery image click
  const handleGalleryImageClick = (imagePath) => {
    const linkedWork = findWorkByImage(imagePath);
    if (linkedWork) {
      window.location.href = `/works/${linkedWork.id}`;
    }
  };

  if (!work) {
    return (
      <div className="bg-white w-full min-h-screen py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Work Not Found</h1>
          <p className="mb-6">The work item you're looking for doesn't exist.</p>
          <Link to="/works">
            <button className="bg-[#F7CB45] text-black p-3 px-6 rounded-3xl border-2 border-black transition-all duration-300 hover:shadow-lg">
              Back to Works
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white w-full min-h-screen py-6 sm:py-10">
      {/* Work Detail Content */}
      <div className="container mx-auto px-3 sm:px-4 mt-4 sm:mt-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-48 sm:h-64">
            <div className="animate-spin rounded-full h-12 sm:h-16 w-12 sm:w-16 border-t-4 border-b-4 border-[#F7CB45]"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
              {/* Main Image and Gallery */}
              <div className="mt-6 sm:mt-10 lg:col-span-2">
                <div 
                  className="bg-[#FEF8F8] rounded-3xl border-4 border-black overflow-hidden mb-3 sm:mb-6 cursor-pointer group relative"
                  onDoubleClick={() => setModalImage(work.image)}
                >
                  <img 
                    src={work.image} 
                    alt={work.category} 
                    className="w-full h-40 sm:h-64 md:h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                
                <div className="mb-3 sm:mb-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                    <h2 className="text-lg sm:text-2xl font-bold">{work.category}</h2>
                    <span className="bg-[#F7CB45] text-black px-3 py-1 rounded-full text-xs sm:text-sm w-fit">{work.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base mt-2">{work.description}</p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                  {work.gallery.map((image, index) => (
                    <div 
                      key={index} 
                      className="bg-[#FEF8F8] rounded-3xl border-4 border-black overflow-hidden group cursor-pointer"
                      onClick={() => handleGalleryImageClick(image)}
                    >
                      <div className="relative">
                        <img 
                          src={image} 
                          alt={`${work.category} gallery ${index + 1}`} 
                          className="w-full h-20 sm:h-24 md:h-28 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Work Details */}
              <div className="bg-[#FEF8F8] rounded-3xl border-4 border-black p-3 sm:p-6 mt-6 sm:mt-10">
                <div className="mb-3 sm:mb-6">
                  <h2 className="text-lg sm:text-2xl font-bold mb-2">Project Details</h2>
                  <div className="border-b-2 border-gray-300 mb-3 sm:mb-4"></div>
                  
                  <div className="flex flex-col space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm sm:text-base">Client:</span>
                      <span className="text-sm sm:text-base">{work.client}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm sm:text-base">Completion Date:</span>
                      <span className="text-sm sm:text-base">{work.completionDate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm sm:text-base">Category:</span>
                      <span className="text-sm sm:text-base">{work.category}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm sm:text-base">Price:</span>
                      <span className="text-sm sm:text-base">{work.price}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-3 sm:mb-6">
                  <h2 className="text-lg sm:text-2xl font-bold mb-2">Features</h2>
                  <div className="border-b-2 border-gray-300 mb-3 sm:mb-4"></div>
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base">
                    {work.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <a
                    href="https://www.facebook.com/share/1BcdzU8V8a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 sm:mt-6 inline-block bg-[#030F1F] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-[#e6b73c] transition-all duration-300 text-center text-sm sm:text-base"
                  >
                    Contact for Similar Projects
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project Description */}
            <div className="mt-4 sm:mt-8 bg-[#FEF8F8] rounded-3xl border-4 border-black p-3 sm:p-6">
              <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">Client's Feedback</h2>
              <div className="flex items-center mb-2 sm:mb-3">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${index < 5 ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-xs sm:text-sm text-gray-600">5.0 Rating</span>
              </div>
              <div className="border-b-2 border-gray-300 mb-2 sm:mb-4"></div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base italic">
                "The team delivered exceptional results! The website is not only visually stunning but also performs flawlessly. Their attention to detail and commitment to quality really set them apart. Would highly recommend their services to anyone looking for professional web development."
              </p>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">- Sarah Johnson, CEO of TechStart</p>
            </div>
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

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-4 sm:mt-8 w-full">
          <Link to="/works" className="w-full sm:w-auto">
            <button className="bg-[#F7CB45] text-black p-2 sm:p-3 px-4 sm:px-6 rounded-3xl border-2 border-black transition-all duration-300 hover:shadow-lg w-full text-sm sm:text-base whitespace-nowrap">
              Back to Works
            </button>
          </Link>
          <Link to="/" className="w-full sm:w-auto mt-3 sm:mt-0">
            <button className="bg-[#030F1F] text-white p-2 sm:p-3 px-4 sm:px-6 rounded-3xl transition-all duration-300 hover:bg-[#1a1a1a] w-full text-sm sm:text-base whitespace-nowrap">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail; 