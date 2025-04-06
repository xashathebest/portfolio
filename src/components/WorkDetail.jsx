import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const WorkDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  
  // This would typically come from a database or CMS
  // For now, we'll use static data that can be easily updated
  const works = [
    {
      id: 1,
      category: "Web Development",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout process.",
      longDescription: "This e-commerce website was developed for a local retail business looking to expand their online presence. The platform features a clean, user-friendly interface with intuitive navigation. Key functionalities include product filtering by category, price, and popularity, a shopping cart with real-time updates, and a secure checkout process with multiple payment options. The site is fully responsive and optimized for all devices, ensuring a seamless shopping experience for customers.",
      price: "1,200 peso",
      image: "/imgs/img15.png",
      gallery: [
        "/imgs/img16.png",
        "/imgs/img17.png",
        "/imgs/img14.png"
      ],
      features: ["Responsive Design", "Product Filtering", "Shopping Cart", "Secure Checkout"],
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      client: "Local Retail Business",
      completionDate: "March 2023"
    },
    {
      id: 2,
      category: "Jersey Design",
      description: "Custom-designed jerseys for a local soccer team with team colors, logos, and player numbers.",
      longDescription: "These custom jerseys were designed for a local soccer team competing in regional tournaments. The design process involved understanding the team's identity, colors, and preferences. The final jerseys feature the team's logo prominently displayed, player numbers, and team colors that stand out on the field. The jerseys are made from high-quality, breathable material that provides comfort during intense physical activity. The team received positive feedback from players and fans alike, with the jerseys becoming a symbol of team pride.",
      price: "350 peso",
      image: "/imgs/img20.png",
      gallery: [
        "/imgs/img19.png",
        "/imgs/img18.png",
        "/imgs/img20.png"
      ],
      features: ["Custom Logo", "Player Numbers", "Team Colors", "High-Quality Material"],
      technologies: ["Adobe Illustrator", "Custom Fabric Selection", "Digital Printing"],
      client: "Local Soccer Team",
      completionDate: "January 2023"
    },
    {
      id: 3,
      category: "Web Design",
      description: "A clean, modern portfolio website for a photographer showcasing their work with a gallery and contact form.",
      longDescription: "This portfolio website was designed for a professional photographer looking to showcase their work online. The site features a minimalist design that puts the focus on the stunning photography. The gallery section allows visitors to browse through different categories of photos with a smooth, intuitive interface. The contact form makes it easy for potential clients to get in touch. The website is optimized for fast loading times and is fully responsive, ensuring that the photos look great on any device. The photographer has reported an increase in inquiries since launching the site.",
      price: "800 peso",
      image: "/imgs/img18.png",
      gallery: [
        "/imgs/img19.png",
        "/imgs/img20.png",
        "/imgs/img18.png"
      ],
      features: ["Image Gallery", "Contact Form", "Responsive Design", "SEO Optimized"],
      technologies: ["HTML/CSS", "JavaScript", "Lightbox Gallery", "Contact Form API"],
      client: "Professional Photographer",
      completionDate: "April 2023"
    },
    {
      id: 4,
      category: "Web Design",
      description: "An interactive restaurant menu with categories, images, and online ordering capabilities.",
      longDescription: "This interactive restaurant menu was designed for a popular local restaurant looking to modernize their ordering process. The menu features beautiful food photography, clear categorization of dishes, and detailed descriptions. The online ordering system allows customers to place orders directly from the menu, with options for customization and special requests. The design is clean and appetizing, with a color scheme that matches the restaurant's branding. The menu is fully responsive and works seamlessly on mobile devices, making it easy for customers to browse and order on the go.",
      price: "600 peso",
      image: "/imgs/img19.png",
      gallery: [
        "/imgs/img20.png",
        "/imgs/img18.png",
        "/imgs/img19.png"
      ],
      features: ["Interactive Menu", "Online Ordering", "Mobile Friendly", "Image Gallery"],
      technologies: ["React", "Firebase", "Payment Gateway Integration", "Responsive Design"],
      client: "Local Restaurant",
      completionDate: "February 2023"
    },
    {
      id: 5,
      category: "Jersey Design",
      description: "Complete corporate branding package including logo design, business cards, and branded merchandise.",
      longDescription: "This comprehensive corporate branding package was created for a startup company looking to establish a strong brand identity. The package includes a distinctive logo that reflects the company's values and mission, professional business cards, and branded merchandise including jerseys, t-shirts, and promotional items. The design process involved extensive research into the company's industry, target audience, and competitors. The final branding is cohesive, memorable, and effectively communicates the company's unique value proposition. The client has reported increased brand recognition and a more professional image since implementing the new branding.",
      price: "350 peso",
      image: "/imgs/img20.png",
      gallery: [
        "/imgs/img18.png",
        "/imgs/img19.png",
        "/imgs/img20.png"
      ],
      features: ["Logo Design", "Business Cards", "Branded Merchandise", "Style Guide"],
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Brand Guidelines", "Print Production"],
      client: "Startup Company",
      completionDate: "May 2023"
    },
    {
      id: 6,
      category: "Web Development",
      description: "A custom blog platform with content management system, categories, and search functionality.",
      longDescription: "This custom blog platform was developed for a content creator looking to share their expertise with a wider audience. The platform features a clean, distraction-free design that puts the focus on the content. The content management system makes it easy for the creator to publish and manage posts, with features for scheduling, categorizing, and tagging content. The search functionality allows readers to quickly find articles on specific topics. The platform is optimized for readability with carefully chosen typography and spacing. Analytics integration provides insights into reader engagement, helping the creator to refine their content strategy.",
      price: "1,500 peso",
      image: "/imgs/img15.png",
      gallery: [
        "/imgs/img16.png",
        "/imgs/img17.png",
        "/imgs/img15.png"
      ],
      features: ["Content Management", "Categories", "Search Function", "Comment System"],
      technologies: ["WordPress", "Custom Theme Development", "SEO Optimization", "Analytics Integration"],
      client: "Content Creator",
      completionDate: "June 2023"
    }
  ];

  const work = works.find(w => w.id === parseInt(id));

  // Simulate loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

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
    <div className="bg-white w-full min-h-screen py-10">
      {/* Work Detail Content */}
      <div className="container mx-auto px-4 mt-6 sm:mt-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#F7CB45]"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Main Image and Gallery */}
              <div className="mt-10 lg:col-span-2">
                <div className="bg-[#FEF8F8] rounded-3xl border-4 border-black overflow-hidden mb-4 sm:mb-6">
                  <img 
                    src={work.image} 
                    alt={work.category} 
                    className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                  />
                </div>
                
                <div className=" mb-4 sm:mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl sm:text-2xl font-bold">{work.category}</h2>
                    <span className="bg-[#F7CB45] text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">{work.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">{work.description}</p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                  {work.gallery.map((image, index) => (
                    <div key={index} className="bg-[#FEF8F8] rounded-3xl border-4 border-black overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${work.category} gallery ${index + 1}`} 
                        className="w-full h-16 sm:h-20 md:h-24 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Work Details */}
              <div className="bg-[#FEF8F8] rounded-3xl border-4 border-black p-4 mt-10   sm:p-6">
                <div className="mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">Project Details</h2>
                  <div className="border-b-2 border-gray-300 mb-3 sm:mb-4"></div>
                  
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">Client:</span>
                      <span>{work.client}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">Completion Date:</span>
                      <span>{work.completionDate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">Category:</span>
                      <span>{work.category}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">Price:</span>
                      <span>{work.price}</span>
                    </div>
                  </div>
                </div>
                
                
                <div className="mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">Features</h2>
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
                    className="mt-6 inline-block bg-[#F7CB45] text-white px-6 py-3 rounded-md font-medium hover:bg-[#e6b73c] transition-all duration-300 text-center"
                  >
                    Contact for Similar Projects
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project Description */}
            <div className="mt-6 sm:mt-8 bg-[#FEF8F8] rounded-3xl border-4 border-black p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">About This Project</h2>
              <div className="border-b-2 border-gray-300 mb-3 sm:mb-4"></div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{work.longDescription}</p>
            </div>
          </>
        )}
        
        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 mt-6 sm:mt-8">
          <Link to="/works" className="w-full sm:w-auto">
            <button className="bg-[#F7CB45] text-black p-2 sm:p-3 px-4 sm:px-6 rounded-3xl border-2 border-black transition-all duration-300 hover:shadow-lg w-full text-sm sm:text-base">
              Back to Works
            </button>
          </Link>
          <Link to="/" className="w-full sm:w-auto">
            <button className="bg-[#030F1F] text-white p-2 sm:p-3 px-4 sm:px-6 rounded-3xl transition-all duration-300 hover:bg-[#1a1a1a] w-full text-sm sm:text-base">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail; 