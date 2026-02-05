import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import avatar1 from "./../assets/img/testimonials/user1.jpg";
import avatar2 from "./../assets/img/testimonials/user2.jpg";
import avatar3 from "./../assets/img/testimonials/user3.jpeg";

const testimonialsData = [
  {
    text: "Webzenix delivered a scalable, high-performance application that exceeded our expectations. Their communication and attention to detail made the entire process seamless.",
    name: "Enzo Blumer",
    role: "Founder, Enzee",
    avatar: avatar1,
  },
  {
    text: "Webzenix is a highly professional team with deep technical expertise. They understand business needs and translate them into innovative digital solutions.",
    name: "Tim Lewis",
    role: "Entrepreneur, Lewis Consulting LLC",
    avatar: avatar2,
  },
  {
    text: "Working with Webzenix was a game-changer. Their strategic mindset and execution quality helped us scale faster than expected.",
    name: "Sophia Carter",
    role: "Product Lead, Finverse",
    avatar: avatar3,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testi-unique-section">
      <div className="testi-unique-container">

        {/* HEADER */}
        <div className="testi-unique-header">
          <span className="testi-unique-pill">CLIENT TESTIMONIALS</span>

          <h2 className="testi-unique-title">
            What Clients Say <br />
            <span>About Webzenix</span>
          </h2>

          <p className="testi-unique-subtext">
            Trusted by global brands to deliver reliable, scalable and
            future-ready digital solutions.
          </p>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          spaceBetween={40}
          breakpoints={{
            0: { slidesPerView: 1 },
            992: { slidesPerView: 2 },
          }}
          className="testi-unique-swiper"
        >
          {testimonialsData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testi-unique-card">
                <span className="testi-unique-quote">“</span>

                <p className="testi-unique-text">{item.text}</p>

                <div className="testi-unique-user">
                  <div className="testi-unique-user-info">
                    <h6>{item.name}</h6>
                    <span>{item.role}</span>
                  </div>

                  <img src={item.avatar} alt={item.name} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default TestimonialsSection;
