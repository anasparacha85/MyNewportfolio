import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import { FaFacebookF, FaTwitter, FaYoutube,FaLink,FaInstagram,FaLinkedin } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css'
const ContactPage = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    const socials = [
        { name: 'facebook', icon: <FaFacebookF />, href: 'https://www.facebook.com/anas.amir.7311352' },
        { name: 'Instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/anasparacha223/' },
        { name: 'youtube', icon: <FaYoutube />, href: 'https://youtube.com' },
        { name: 'Linkedin', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/anas-amir-874876265/' },
      ];
  return (
    <div className="min-h-screen  text-white p-4 md:p-8 lg:p-12" data-aos="flip-up"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1500">
      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-32 relative">
          <h1 className="text-4xl md:text-[100px] font-bold opacity-10">CONTACT</h1>
          <div className="absolute top-[0px] transform translate-x-[95px] lg:translate-x-[350px]">
            <h2 className="text-2xl md:text-6xl font-extrabold">
              GET IN <span className="text-yellow-500">TOUCH</span>
            </h2>
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">DON'T BE SHY !</h2>
            <p className="text-gray-300 mb-8">
              Feel free to get in touch with me. I am always open to discussing new projects, 
              creative ideas or opportunities to be part of your visions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-amber-400 p-3 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">MAIL ME</div>
                  <div>amiranas761@mail.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-amber-400 p-3 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">CALL ME</div>
                  <div>+92 321 2167055</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 p-3 rounded-full hover:bg-amber-400 transition-colors duration-300"
        >
          <span className="sr-only">{social.name}</span>
          <div className="w-5 h-5 text-white">{social.icon}</div>
        </a>
      ))}
    </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="YOUR NAME"
                className="bg-gray-800 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="bg-gray-800 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <input
                type="text"
                placeholder="YOUR SUBJECT"
                className="bg-gray-800 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <textarea
              placeholder="YOUR MESSAGE"
              rows={6}
              className="bg-gray-800 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <div className="flex justify-end">
              <button className="bg-transparent border border-amber-400 text-white px-6 py-3 rounded flex items-center space-x-2 hover:bg-amber-400 hover:text-black transition-colors duration-300">
                <span>SEND MESSAGE</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage