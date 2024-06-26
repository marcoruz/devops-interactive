
import React, { useState } from 'react';


const FaqItem = ({ frage, antwort }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  

  return (
    <div className="faq-item">
      <div onClick={toggleOpen} className="faq-question" style={{ cursor: 'pointer' }}>
        {frage}
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <div className="faq-answer">{antwort}</div>}
    </div>
  );
};

export default FaqItem;
//Code Stand 24.06.2024