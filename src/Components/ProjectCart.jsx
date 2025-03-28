import React from 'react'
import { ExternalLink } from 'lucide-react';
const ProjectCard = ({ project }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:shadow-2xl hover:shadow-yellow-400 hover:border-yellow-300 rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-64  "
        style={{backgroundSize:'cover'}}
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
           
            <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
          </div>
        </div>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-4">
        
          <a 
            href={project.liveLink}
            className="flex items-center gap-2 text-gray-300 hover:text-yellow-500 transition-colors"
            target='blank'
          >
            <ExternalLink size={20} />
            {!project.liveLink?<span>Not Deployed</span>:<span>Live Demo</span>}  
          </a>
        </div>
        <div className="flex gap-4 mt-4">
        
        <a 
          href={project.githubLink}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-500 transition-colors"
        >
          
          <span>Github Link</span>  
        </a>
      </div>
      </div>
    </div>
  );

export default ProjectCard
