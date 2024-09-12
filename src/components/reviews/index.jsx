import { Swiper, SwiperSlide } from "swiper/react";
import "./index.scss";
import { Button } from "../button";
import { reviewsData } from "./mock-data";
import { Autoplay, Navigation } from "swiper/modules";
import { renderStars } from "../../utils";
import { useSelector } from "react-redux";
import { getBlackTheme } from "../../store/selectors";

export const Reviews = () => {
  const isBlackTheme = useSelector(getBlackTheme);

  return (
    <section className={`reviews ${isBlackTheme ? "reviews_black" : ""}`}>
      <div className="container">
        <h2 className="reviews__title title">Customers reviews</h2>
        <Swiper
          className="reviews__swiper"
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 5000 }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {reviewsData.map((review, index) => {
            return (
              <SwiperSlide key={index} className="swiper__slide">
                <div className="swiper__content">
                  <div className="swiper__wrapper">
                    <p className="swiper__text">{review.text}</p>
                    <p className="swiper__text">
                      {renderStars(review?.rating)}
                    </p>
                    <h2 className="swiper__author">{review.name}</h2>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
