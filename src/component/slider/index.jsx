import "./style.css";
import { sliderData } from "./data";
import { useEffect, useState } from "react";
const SliderComp = () => {
  const length = sliderData.length - 1;

  const [slide_value, set_slide_value] = useState(0);
  const nextSlide = () => {
    set_slide_value((prev) => {
      if (prev === length) return 0;
      return prev + 1;
    });
  };
  const prevSlide = () => {
    set_slide_value((prev) => {
      if (prev === 0) return length;
      return prev - 1;
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [slide_value]);

  return (
    <div className="container">
      <div className="top">
        <div className="left arrow" onClick={prevSlide}>
          left
        </div>
        <div className="slider">
          {sliderData.map((each) => {
            return (
              <div
                style={{
                  transform: `translateX(-${20 * slide_value}rem)`
                }}
                className="image-container"
                key={each.id}
              >
                <img src={each.img} alt="img" />
              </div>
            );
          })}
        </div>
        <div className="right arrow" onClick={nextSlide}>
          right
        </div>
      </div>
      <div className="bottom">
        {new Array(4).fill("").map((each, idx) => {
          return (
            <div className={`dot ${slide_value === idx && "bg"}`} key={idx}>
              {each}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SliderComp;
