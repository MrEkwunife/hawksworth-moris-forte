import React, { JSX } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import heroBg from "../assets/images/hero-bg.jpg";
import image1 from "../assets/images/image-1.jpg";
import image2 from "../assets/images/image-2.jpg";
import image3 from "../assets/images/image-3.jpg";

// Define the image array
const imageArray = [heroBg, image1, image2, image3];

// TypeScript interface for settings
interface SliderSettings {
  customPaging: (i: number) => React.ReactElement;
  dots: boolean;
  dotsClass: string;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  pauseOnHover: boolean;
}

function Courosel(): JSX.Element {
  const settings: SliderSettings = {
    customPaging: function (i: number) {
      return (
        <a href="#" onClick={(e) => e.preventDefault()}>
          <img
            src={imageArray[i]}
            alt={`Thumbnail ${i + 1}`}
            className="w-16 h-8 object-cover"
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };

  return (
    <div className="slider-container max-w-4xl mx-auto mb-20 lg:mb-0">
      <Slider {...settings}>
        {imageArray.map((image, index) => (
          <div key={index} className="outline-none">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Courosel;
