import { useState } from "react";

const faqData = [
  {
    q: "What industries does Webzenix serve?",
    a: "Webzenix works with startups, enterprises, healthcare, fintech, e-commerce, education, SaaS, and many more industries worldwide.",
  },
  {
    q: "What kind of support do you offer after project completion?",
    a: "We provide continuous maintenance, updates, performance monitoring, and 24/7 technical support based on your selected plan.",
  },
  {
    q: "What makes Webzenix different from other agencies?",
    a: "Our focus on strategy, premium UI/UX, scalable architecture, and transparent communication sets us apart from others.",
  },
  {
    q: "What software development services do you offer?",
    a: "We offer web apps, mobile apps, custom software, cloud solutions, API development, and AI-powered systems.",
  },
  {
    q: "How do you ensure project quality?",
    a: "We follow agile methodology, code reviews, automated testing, and strict QA processes before delivery.",
  },
  {
    q: "Does Webzenix provide web development services?",
    a: "Yes, we specialize in high-performance, secure, and scalable web development using modern technologies.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-unique-section">
      <div className="faq-unique-container">

        {/* HEADER */}
        <div className="faq-unique-header">
          <span className="faq-unique-pill">FAQs</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        {/* FAQ GRID */}
        <div className="faq-unique-grid">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-unique-card ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-unique-question">
                <h6>{item.q}</h6>
                <span className="faq-unique-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              <div className="faq-unique-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
