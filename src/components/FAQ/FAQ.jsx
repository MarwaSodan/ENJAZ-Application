import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "What is ENJAZ?",
    answer: (
      <>
        <strong>ENJAZ</strong><br />
        <b>ENJAZ</b> application provides users in Kuwait with easy access to translation, print and copy services. It features a user-friendly interface to locate the nearest service centers, view available services, and contact details.
      </>
    ),
  },
  {
    question: "Is my data secure on ENJAZ?",
    answer: "Yes, ENJAZ uses industry-standard encryption and security practices to keep your data safe and secure.",
  },
  {
    question: "Can I control who sees my content on ENJAZ?",
    answer: "Yes, you have full control over the visibility of your uploaded documents and content on ENJAZ.",
  },
  {
    question: "Can I use ENJAZ on multiple devices?",
    answer: "Absolutely! ENJAZ is accessible from various devices including smartphones, tablets, and computers.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <h2>FAQ</h2>
      <p className="faq-subtitle">Understanding <strong>ENJAZ</strong>: Your Questions Answered</p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span className="arrow">{activeIndex === index ? '▲' : '▼'}</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
