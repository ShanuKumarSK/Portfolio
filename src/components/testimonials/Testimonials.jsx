import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Fina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligend non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Fina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligend non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Fina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligend non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Fina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligend non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className='container testimonials_container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id} className='testimonials'>
              <div className='client_avatar'>
                <img src={item.avatar} alt='Avatar One' />
              </div>
              <h5>{item.name}</h5>
              <small className='client_review'>{item.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
