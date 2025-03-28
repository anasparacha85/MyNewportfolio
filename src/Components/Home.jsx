import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import dark from '../../public/darkavatar.jpg';
import AboutMe from './AboutMe';
import  Projects from './Projects'

import Aos from 'aos';
import 'aos/dist/aos.css';
import SplitText from '../Animation/SplitText';
import ContactPage from './ContactPage';


const HomePage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div  className='custom-bg min-h-screen overflow-x-hidden'>
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 custom-bg">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 py-12">
        {/* Left Side: Image */}
        <div 
          className="flex-1 w-full lg:w-1/2 px-4 sm:px-6 lg:px-8" 
          data-aos="zoom-out-left"
        >
          <div className="relative">
            <img
              src={dark}
              alt="Anas Paracha"
              className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover rounded-lg shadow-lg -mt-8 sm:-mt-12 lg:-mt-[80px]"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 text-center lg:text-left text-white" data-aos="fade-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1500">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Hi, I'm Anas Paracha
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-2">
            A Full Stack Web Developer
          </h2>
          <p  className="mt-4 text-[18px]  leading-relaxed max-w-2xl mx-auto lg:mx-0">
   I'm a passionate Full Stack Developer with a strong focus on the MERN stack (MongoDB, Express, React, Node.js). With hands-on experience from frontend development internships and a MERN stack internship, I have developed a deep understanding of building scalable, responsive, and high-performance web applications.

I specialize in crafting modern, intuitive, and engaging user interfaces using React.js,Nextjs and Tailwind CSS, ensuring seamless user experiences. Beyond frontend, I have hands-on experience working with Node.js and Express.js, implementing RESTful APIs, authentication systems, and database management with MongoDB to create full-stack applications.

My approach goes beyond just writing code—I focus on optimizing performance, improving accessibility, and developing efficient solutions that align with business needs. Whether it's developing interactive UIs, building scalable backend architectures, or integrating APIs, I am always eager to take on challenges and contribute to impactful projects."

  
</p>
        
          <div className="mt-6 flex justify-center lg:justify-start">
            <button className="px-6 py-3 text-white font-medium text-lg rounded-[30px] shadow-md border-2 border-solid border-white flex items-center relative overflow-hidden group">
              <span className="relative z-10 "><Link to='/about'>More About Me</Link></span>
              <span className="relative z-10 ml-2">
                <FaArrowRight />
              </span>
              <span className="absolute inset-0 bg-yellow-500 transition-all duration-300 ease-in-out transform translate-x-full group-hover:translate-x-0"></span>
            </button>
          </div>
        </div>
      </div>
     
    </div>
     <AboutMe/>
     <Projects/>
     <ContactPage/>
     </div>
  );
};

export default HomePage;