import React from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
const Timeline = () => {
     useEffect(()=>{
            Aos.init()
        },[])
  const data = [
      {
   
      year: "april 2025 -present",
      role: "Full Stack Developer  (Internship)",
      company: "IOTFIY Solutions",
      description:
        "Currently Working as a Junior Full  Stack Developer Intern at IOTFIY Solutions where I am Contributing towards Exciting Projects by Developing Advanced Server Side as well as Client Side Features using MERN stack , and Nestjs..",
        
      icon: "work",
    },
     {
   
      year: "Dec 2024-april 2025",
      role: "Web Developer  (On Contract)",
      company: "Devsiom Technologies",
      description:
        " Worked as a Full Stack Web developer  on a Contractual role where I designed and developed and Advanced Server Side Features using Nodejs Expressjs, and  and designed and Integrated  Client side features while  contributing towards various projects  assosiated with Devsiom Technologies",

      icon: "work",
    },
     {
        year: "2022-present",
        role: " Software Engineering",
        company: "Sir Syed University of Engineering & Technologies",
        description:
          "Currently doing Bachelors in Software Engineering from sir syed University of Engineering & Technology with a CGPA of 3.61",
        icon: "education",
      },
     
   
    {
        year: "2022",
        role: "Intermediate(Hsc)",
        company: "Govt College for Men Nazimabad",
        description:
          "I have done Hsc for govt college for men nazimabad with A-Grade",
        icon: "education",
      },
     
   
   
  ];

  return (
    <div className=" text-white py-10 px-6 mt-16"data-aos="flip-up"
    
    data-aos-duration="1500" >
      <h2 className="text-center text-3xl font-bold mb-16">
        EXPERIENCE & EDUCATION
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {data.map((item, index) => (
          <div key={index} className="relative">
            <div
              className={`absolute w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center ${
                item.icon === "work" ? "top-2" : "top-0"
              }`}
            >
              <span className="text-white text-xl">
                {item.icon === "work" ? "👜" : "🎓"}
              </span>
            </div>
            <div className="ml-12">
              <span className="block text-sm text-gray-300 mb-2">
                {item.year}
              </span>
              <h3 className="text-xl font-bold">
                {item.role}{" "}
                <span className="text-yellow-500">– {item.company}</span>
              </h3>
              <p className="text-gray-400 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
