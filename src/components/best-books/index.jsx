import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../button";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { getBlackTheme, getBooks } from "../../store/selectors";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

export const BestBooks = () => {
  const isBlackTheme = useSelector(getBlackTheme)
  const navigate = useNavigate();
  const books = useSelector(getBooks);

  const handleClick = () => {
    navigate("/new-books");
  };

  return (
    <section className={`best-books ${isBlackTheme ? 'best-books_black' : ''}`}>
      <div className="container">
        <div className="best-books__header">
          <h2 className="best-books__title title">Best selling items</h2>
          <Button title="View all" onClick={handleClick} />
        </div>
        <div className="best-books__books">
          <Swiper
            className="best-books__swiper"
            modules={[Navigation, Scrollbar, Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            scrollbar={{ draggable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1, // Отображает 1 слайд при ширине экрана 320px и выше
              },
              640: {
                slidesPerView: 1, // Отображает 2 слайда при ширине экрана 640px и выше
              },
              768: {
                slidesPerView: 2, // Отображает 1 слайд при ширине экрана 768px и выше
              },
              1024: {
                slidesPerView: 3, // Отображает 3 слайда при ширине экрана 1024px и выше
              },
              1280: {
                slidesPerView: 4, // Отображает 4 слайда при ширине экрана 1280px и выше
              },
            }}
          >
            {books.map((book, index) => {
              if (index > 2 && index <= 8) {
                return (
                  <SwiperSlide
                    key={index}
                    className="best-books__swiper__slide"
                  >
                    <div className="best-books__swiper__wrapper">
                      <div className="best-books__swiper__img">
                        <img src={book.image} alt="" />
                      </div>
                      <Link to={`/new-books/${book?.isbn13}`} title={book?.title} className="best-books__swiper__title">
                        {book?.title} 
                      </Link>
                      <p className="best-books__swiper__price">{book?.price}</p>
                    </div>
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
