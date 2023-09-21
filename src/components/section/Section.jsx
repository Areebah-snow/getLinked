
import React from 'react';
import './section.css'


const Section = ({ imageUrl, title, subtitle, description }) => {
  return (
    <div className="intro border-b-2 border-gray-800">
      <div className="main-container flex flex-col md:flex-row items-center justify-between px-20 py-20">
        <div className="left relative">
          <img src={imageUrl} alt="" />
          <h2 className="w-16 text-center absolute font-bold top-1/2 left-52">
            {title}
          </h2>
        </div>

        <div className="right">
          <h1 className="font-bold">
            {title}
            <br />
            <span className="text-purplePink">{subtitle}</span>
          </h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
