import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR4,
    name: "Esra Darcan",
    review:
      "Rameez is an excellent developer! He designed a stunning personal portfolio website for me that truly showcases my expertise and attracts clients. His creativity, attention to detail, and professionalism made the entire experience fantastic. I highly recommend Rameez to anyone who wishes to elevate their online presence!.",
  },
  {
    avatar: AVTR1,
    name: "Kyle Abebe",
    review:
      "Rameez did a phenomenal job and he is a dedicated developer with profound expertise in his field. Working with him was an exceptional experience, and I am confident that anyone who collaborates with him will feel the same.",
  },
  {
    avatar: AVTR2,
    name: "Logan Terrell",
    review:
      "Rameez is a seasoned full stack developer who consistently delivers high-quality work. His commitment to excellence made my experience seamless and highly productive. I recommend him to anyone who is seeking a reliable and a skilled developer.",
  },
  {
    avatar: AVTR3,
    name: "Todd Rudinary",
    review:
      "Rameez is an incredible developer! He created a flawless backend student attendance software for us, and it has made a huge difference in our day-to-day operations. His dedication, expertise, and friendly approach made the whole process a joy. I can't recommend Rameez enough's simply the best!.",
  },
  
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        //swiper modules
        modules={[Pagination]} spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials;
