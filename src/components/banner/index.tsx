import "./index.scss";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getBlackTheme, getBooks } from "../../store/selectors";
import { Button } from "../button";
import { Book } from '../../typings/book';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Banner:FC = () => {
  const isBlackTheme = useSelector(getBlackTheme);
  const books = useSelector(getBooks) as Book[];
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate("new-books");
  };

  const handleInfo = (id:string) => {
    navigate(`new-books/${id}`);
  };

  return (
    <main className={`main ${isBlackTheme ? "main_black" : ""}`}>
      <div className="container">
        <Swiper
          className="swiper"
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 5000 }}
        >
          {books.map((book, index) => {
            if (index <= 5 && index > 0) {
              return (
                <SwiperSlide key={book.isbn13} className="swiper__slide">
                  <div className="swiper__content">
                    <div className="swiper__wrapper">
                      <h2 className="swiper__title">{book.title}</h2>
                      <p className="swiper__text">
                        Best Offer Save 30%. Grab it now!
                      </p>
                      <Button
                        title="Go to shop"
                        className="swiper__btn"
                        onClick={handleShopClick}
                      />
                      <Button
                        title="Learn more"
                        isOutlineButton={true}
                        className="swiper__btn_outline"
                        onClick={() => handleInfo(book?.isbn13)}
                      />
                    </div>
                    <div className="swiper__img">
                      <img src={book.image} alt={book.title} />
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
    </main>
  );
};
