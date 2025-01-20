import React, { useEffect } from 'react';
import { Download } from 'lucide-react';
import Aos from 'aos';
import "aos/dist/aos.css";
import Skills from './Skills';
import Timeline from './Exerience';
const AboutMe = () => {
    useEffect(()=>{
        Aos.init()
    },[])
  const personalInfo = {
    firstName: "Anas",
    lastName: "Paracha",
    age: "20 Years",
    nationality: "Pakistani",
    WebDeveloper: "Available",
    phone: "03212167055",
    email: "amiranas761@mail.com",
    languages: "Urdu, English"
  };

  const stats = [
    { number: "5+", label: "COURSES & CERTIFICATIONS" },
    { number: "8+", label: "COMPLETED PROJECTS" },
    { number: "2+", label: "INTERNSHIPS" },
    { number: "3+", label: "AWARDS WON" }
  ];
  

  return (
    <div className="min-h-screen  text-white p-4 md:p-8" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1500">
      <div className="max-w-6xl mx-auto">
        {/* About Me Header */}
        <div className="mb-32 relative">
          <h1 className="text-4xl md:text-[100px] font-bold opacity-10">RESUME</h1>
          <div className="absolute top-[0px] transform translate-x-[95px] lg:translate-x-[420px]">
            <h2 className="text-2xl md:text-6xl font-extrabold">
              ABOUT <span className="text-yellow-500">ME</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 ">
          {/* Personal Info Section */}
          <div className="space-y-6" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <h3 className="text-2xl font-bold mb-6 text-black">PERSONAL INFOS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(personalInfo).map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <span className="text-gray-400 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()} :{' '}
                  </span>
                  <span className="text-white">{value}</span>
                </div>
              ))}
            </div>
            
           
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="border border-gray-800 p-6 bg-gray-800/50 backdrop-blur-sm"
              >
                <div className="text-yellow-500 text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center mt-20'>
        <div className='w-[35%] h-[1px] bg-gray-400 '></div>
      </div>
<Skills/>
<div className='w-full flex justify-center mt-20'>
        <div className='w-[35%] h-[1px] bg-gray-400 '></div>
      </div>
<Timeline/>
    </div>
  );
};

export default AboutMe;