import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import CountUp from "../Animation/CountUp";
const skills = [
  { name: "HTML", percentage: 75 },
  { name: "JavaScript", percentage: 79 },
  { name: "CSS", percentage: 60 },
  { name: "TailwindCss", percentage: 71 },
  { name: "Reactjs", percentage: 76 },
  { name: "Nextjs", percentage: 71 },
  { name: "Nodejs", percentage: 83 },
  {name:"Expressjs",percentage:79},
  {name:"Nestjs" ,percentage:68},
  { name: "Mongodb", percentage: 86 },
  { name: "SQL Server", percentage: 93 },
  { name: "mysql", percentage: 83 },
  { name: "java ", percentage: 91 },
  { name: "Spring boot", percentage: 55 },
  { name: "FireBase", percentage: 45 },
  { name: "GitHub", percentage: 65 },
  { name: "Vercel", percentage: 45 },
  
 
];

const SkillCircle = ({ percentage, name }) => {
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  useEffect(()=>{})
  const dashOffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center space-y-2">
      {/* SVG Circle */}
      <svg width="120" height="120" className="relative">
        <circle
          cx="60"
          cy="60"
          r={radius}
          className="stroke-gray-700 fill-none"
          strokeWidth="10"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          className="stroke-yellow-500 fill-none"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
        />
      </svg>
      {/* Percentage */}
      <span className="absolute text-xl font-bold text-yellow-500 pt-7 "><CountUp
  from={0}
  to={percentage}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>%</span>
      {/* Skill Name */}
      <p className="text-white">{name}</p>
    </div>
  );
};

const Skills = () => {
    useEffect(()=>{
        Aos.init()
    },[])
  return (
    <div data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="1500">
          <h2 className="text-center text-4xl font-bold mb-5 mt-32">
        MY <span className="text-yellow-500">SKILLS</span>
      </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  py-10 px-6">
        
        
      {skills.map((skill, index) => (
        <SkillCircle
          key={index}
          percentage={skill.percentage}
          name={skill.name}
        />
      ))}
    </div>
    </div>
  );
};

export default Skills;
