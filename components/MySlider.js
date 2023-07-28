import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import { settings } from "eslint-config-next";


const data = [{ img: "/news.png" }, { img: "/news.png" }, { img: "/news.png" }];

const MySlider = () => {
    const settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // nextArrow: <nextArrow/>,
        // prevArrow: <prevArrow/>,
        responsive:[
            {
                breakpoint: 1280,
                settings:{
                    slidesToShow : 3,
                }
            },
            {
                breakpoint: 1000,
                settings:{
                    slidesToShow : 2,
                }
            },
            {
                breakpoint: 650,
                settings:{
                    slidesToShow : 1,
                }
            },
        ],
    }
  return (
    <div className="relative">
      <Slider {...settings}>
        {data.map((el, index) => (
          <Card key={index} img={el.img} />
        ))}
        
      </Slider>
    </div>
  );
};

export default MySlider;
