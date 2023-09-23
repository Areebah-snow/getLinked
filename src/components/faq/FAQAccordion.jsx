// src/components/FAQAccordion.js
import React, { useState } from "react";
import cwok from '../../images/cwok_casual_21 1.svg'

const FAQAccordion = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="flex flex-row">
     <div className="max-w-md mx-auto">
        <div className="faqTitle">
        <h1 className='font-bold text-3xl'>Frequently Asked <br></br>
                    <span className='text-purplePink'>Questions</span>
        </h1>
        <p className="">We got answers to the questions that you might
           want to ask about getlinked Hackathon 1.0</p>
        </div>

      {faqData.map((faq, index) => (
        <div
          key={index}
          className="border-b-2 border-purplePink p-4 my-2 cursor-pointer"
          onClick={() => toggleAccordion(index)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">{faq.question}</h3>
            <div className="transition-transform transform rotate-0">
              {activeIndex === index ? (
                <span className="text-purplePink text-2xl">-</span>
              ) : (
                <span className="text-purplePink text-2xl">+</span>
              )}
            </div>
          </div>
          {activeIndex === index && (
            <p className="mt-2">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
     <div className="image">
      <img src={cwok} alt="" />
    </div>
    </div>
   
  );
};

export default FAQAccordion;
