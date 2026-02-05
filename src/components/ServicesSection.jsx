import { useState } from "react";

// Images
import uiuxImg from "./../assets/img/uiux.png";
import webImg from "./../assets/img/webimg.png";
import mobileImg from "./../assets/img/serviceImg.png";

const servicesData = [
  {
    id: 1,
    no: "01",
    title: "UI/UX Design",
    desc: "At Webskitters, our creative team specializes in crafting user-centric UI/UX designs.",
    image: uiuxImg,
  },
  {
    id: 2,
    no: "02",
    title: "Web Development",
    desc: "We deliver scalable and robust web development services to our clients.",
    image: webImg,
  },
  {
    id: 3,
    no: "03",
    title: "Mobile App Development",
    desc: "Optimized applications for flawless performance and superior user experiences.",
    image: mobileImg,
  },
];

const ServicesUnique = () => {
  const [activeService, setActiveService] = useState(servicesData[0]);

  return (
    <section className="services-unique-section">
      <div className="services-unique-container">

        {/* LEFT IMAGE */}
        <div className="services-unique-image-col">
          <div className="services-unique-image-wrapper">
            <img
              key={activeService.id}
              src={activeService.image}
              alt={activeService.title}
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="services-unique-content">
          <span className="services-unique-label">OUR SERVICES</span>

          <h2 className="services-unique-title">
            Our Services To Grow <br />
            <span>Your Brand</span>
          </h2>

          <div className="services-unique-nav">
            {servicesData.map((item) => (
              <div
                key={item.id}
                className={`services-unique-tab ${
                  activeService.id === item.id ? "active" : ""
                }`}
                onClick={() => setActiveService(item)}
              >
                <div className="services-unique-tab-left">
                  <div className="services-unique-tab-no">{item.no}</div>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>

                <div className="services-unique-arrow">↗</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesUnique;
