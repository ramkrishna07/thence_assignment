
import React, { useState } from 'react';
import './Accordion.css'; 

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="accordions">
      {items.map((item, index) => (
        <div key={index} className="accordions-item">
          <div
            className={`accordions-header ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <div className="accordions-header-text">{item.header}</div>
            <div className="accordions-icon">{index === activeIndex ? '-' : '+'}</div>
          </div>
          {index === activeIndex && (
            <div className="accordions-body">{item.body}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

