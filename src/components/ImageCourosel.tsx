import React from "react";
import Slider from "react-slick";
// Import CSS directly from node_modules
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/images/image-1.jpg";
import image2 from "../assets/images/image-2.jpg";
import image3 from "../assets/images/image-3.jpg";
import image4 from "../assets/images/image-2.jpg";

// Array of images for easy mapping
const images = [image1, image2, image3, image4];

const ImageCarousel: React.FC = () => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a className="block">
          <img
            src={images[i]}
            alt={`Thumbnail ${i + 1}`}
            className="w-12 h-12 object-cover rounded"
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
    adaptiveHeight: true,
    arrows: true,
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Custom CSS to fix spacing issues */}
      <style>{`
        :global(.slick-list) {
          margin: 0 -1px;
        }
        :global(.slick-thumb) {
          bottom: -70px;
        }
        :global(.slick-thumb li) {
          width: 60px;
          height: 60px;
          margin: 0 5px;
        }
      `}</style>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="outline-none">
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
