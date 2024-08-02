import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

type ImageSliderProps = {
  images: string[]
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image}>
            <img
              src={image}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
