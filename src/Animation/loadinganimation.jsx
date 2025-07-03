import React from 'react';


const ThreeDropLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen  overflow-hidden">
      <div className="loader-wrapper">
        <div className="loader-bar bar1"></div>
        <div className="loader-bar bar2"></div>
        <div className="loader-bar bar3"></div>
      </div>
    </div>
  );
};

export default ThreeDropLoader;