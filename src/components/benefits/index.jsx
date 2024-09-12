import "./index.scss";
import deliveryIcon from "./images/delivery.png";
import offerIcon from "./images/offer_icon.png";
import qualityIcon from "./images/quality_icon.png";
import secureIcon from "./images//secure_icon.png";
import { useSelector } from "react-redux";
import { getBlackTheme } from "../../store/selectors";

export const Benefits = () => {
  const isBlackTheme = useSelector(getBlackTheme);
  return (
    <section className={`benefits ${isBlackTheme ? "benefits_black" : ""}`}>
      <div className="container">
        <div className="benefits__wrapper">
          <div className="benefits__item">
            <div className="benefits__icon">
              <img src={deliveryIcon} alt="" />
            </div>
            <div className="benefits__info">
              <div className="benefits__title">Free delivery</div>
              <div className="benefits__text">
                Enjoy free delivery with every order.
              </div>
            </div>
          </div>
          <div className="benefits__item">
            <div className="benefits__icon">
              <img src={qualityIcon} alt="" />
            </div>
            <div className="benefits__info">
              <div className="benefits__title">Quality guarantee</div>
              <div className="benefits__text">
                We guarantee the highest quality of our products.
              </div>
            </div>
          </div>
          <div className="benefits__item">
            <div className="benefits__icon">
              <img src={offerIcon} alt="" />
            </div>
            <div className="benefits__info">
              <div className="benefits__title">Daily offers</div>
              <div className="benefits__text">
                Receive unique deals and discounts every day.
              </div>
            </div>
          </div>
          <div className="benefits__item">
            <div className="benefits__icon">
              <img src={secureIcon} alt="" />
            </div>
            <div className="benefits__info">
              <div className="benefits__title">100% secure payment</div>
              <div className="benefits__text">
                Your security is our priority. Shop with confidence.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
