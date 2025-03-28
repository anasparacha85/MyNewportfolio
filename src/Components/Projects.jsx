import React, { useEffect } from 'react'
import  { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import ProjectCard from './ProjectCart';
import Wearhub from '../../public/Wearhub.png'
import crimereporting from '../../public/crimereporting.png'
import Creative from '../../public/Creative Agency.png'
import beyond from '../../public/beyond.png'
import AllInOne from '../../public/AllInOne.png'
import Interhhub from '../../public/Interhhub.png'
import interneeimage from '../../public/interneeimage.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
 
const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
useEffect(()=>{
  Aos.init()
},[])
    // Sample project data - replace with your actual projects
    const projects = [
      {
        id: 1,
        title: "Full stack Internee.pk WebApp",
        category: "Web Development",
        image: interneeimage,
        description: "Internee.pk is an Online Job as well as SKills Learning platform which includes users to apply for jobs ,enroll in courses,Admin to post manage and delete users jobs and instructors",
        technologies: ["Node js","Express js","Passport js","React js", "Tailwind","AOS" ],
        githubLink: "https://github.com/anasparacha85/AnasInternee.pk",
        liveLink: "https://anas-internee-pk.vercel.app/"

      },
    
      {
        id: 3,
        title: "Creative Agency",
        category: "Data Visualization",
        image: Creative,
        description: "It is a modern designed Front End Website",
        technologies: ["React", "AOS", "Tailwind"],
        githubLink: "https://github.com",
        liveLink: "https://bloodline-iota.vercel.app/"
      },
      {
        id: 2,
        title: "InternHub",
        category: "Mobile Development",
        image: Interhhub,
        description: "InternHub is an Online Job as well as learning platform where Users can search for jobs and also apply for it as well as enroll in courses ",
        technologies: ["Node js","Express js","Passport js","React js", "Tailwind","AOS" ],
        githubLink: "https://github.com/anasparacha85/InternnHub",
        liveLink: "https://internn-hub-frontend.vercel.app"

      },
      {
        id: 4,
        title: "beyond",
        category: "Web Development",
        image: beyond,
        description: "Beyond is a modern front End Ecommerce App without any functionality",
        technologies: ["React js", "Tailwind", ],
        githubLink: "https://github.com",
        liveLink: "https://beyond-seven.vercel.app/"
      },
      {
        id: 5,
        title: "Wearhub",
        category: "Web Development",
        image:Wearhub,
        description: "Full-stack e-commerce Website Where Users Can order products in realtime  ",
        technologies: ["React", "Node.js", "MongoDB", "Tailwind css"],
        githubLink: "https://github.com/anasparacha85/Wearhub",
        
      },
      
    
      {
        id: 6,
        title: "Crime Reporting System w.r.t City & Types",
        category: "Machine Learning",
        image: crimereporting,
        description: "A full Stack App including Authentication ,submit crimes,see reported crimes by filtering",
        technologies: ["Java",  "Spring Boot","MySQL", "React"],
        githubLink: "https://github.com/anasparacha85/CrimeReportingSystem",
        
      },
     
      
      {
        id: 6,
        title: "All In One",
        category: "Mobile Development",
        image: AllInOne,
        description: "All In One is a  front End Sales Store to show my frontEnd integration skills",
        technologies: ["React js", "Tailwind","AOS" ],
        githubLink: "https://github.com/anasparacha85/all-in-one-react",
        liveLink: "https://all-in-one-gamma.vercel.app/"
      },
    
    ];
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    };
  
    return (
        <div className="min-h-screen  text-white p-4 md:p-8" data-aos="flip-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-32 relative">
          <h1 className="text-4xl md:text-[100px] font-bold opacity-10">PORTFOLIO</h1>
          <div className="absolute top-[0px] transform translate-x-[95px] lg:translate-x-[400px]">
            <h2 className="text-2xl md:text-6xl font-extrabold">
              MY <span className="text-yellow-500">PROJECTS</span>
            </h2>
          </div>
        </div>

    
            {/* Desktop Grid View */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
    
            {/* Mobile Slider View */}
            <div className="md:hidden relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {projects.map((project) => (
                    <div key={project.id} className="w-full flex-shrink-0">
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/50 p-2 rounded-full"
              >
                <ChevronLeft className="text-yellow-500" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/50 p-2 rounded-full"
              >
                <ChevronRight className="text-yellow-500" />
              </button>
    
              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full ${
                      currentSlide === index ? 'bg-yellow-500' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    };
    

export default Projects
