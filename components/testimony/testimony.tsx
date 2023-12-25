import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import "./testimony.css"

export default class TestimonialCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="p-6 mt-20 bg-[#0f050e]  back">
        {/* <h2 className="text-center text-[#cccccc63] text-1xl"> What people says</h2> */}
        <Slider {...settings}>
          <div className="text-center">
            <FaQuoteLeft className="text-lg text-[#cccccc63]  ml-4" />
            <p className="lg:text-lg text-sm text-gray-500 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing{" "}
              <br className="hidden lg:block" /> elit. Commodi, architecto ipsum
              deleniti repudiandae perspiciatis eos{" "}
              <br className="hidden lg:block" /> nisi architecto ipsum deleniti
              repudiandae perspiciatis eos <br className="hidden lg:block" />{" "}
              nisi eveniet esse pariatur veritatis.
            </p>
            <span className="text-xl text-gray-400">-DevBen-</span>
          </div>
          <div className="text-center">
            <p className="lg:text-lg text-sm text-gray-500 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing{" "}
              <br className="hidden lg:block" /> elit. Commodi, architecto ipsum
              deleniti repudiandae perspiciatis eos{" "}
              <br className="hidden lg:block" /> nisi architecto ipsum deleniti
              repudiandae perspiciatis eos <br className="hidden lg:block" />{" "}
              nisi eveniet esse pariatur veritatis.
            </p>
            <span className="text-xl text-gray-400">-DevBen-</span>
          </div>
          <div className="text-center">
            <FaQuoteLeft className="text-lg text-[#cccccc63]  ml-4" />
            <p className="lg:text-lg text-sm text-gray-500 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing{" "}
              <br className="hidden lg:block" /> elit. Commodi, architecto ipsum
              deleniti repudiandae perspiciatis eos{" "}
              <br className="hidden lg:block" /> nisi architecto ipsum deleniti
              repudiandae perspiciatis eos <br className="hidden lg:block" />{" "}
              nisi eveniet esse pariatur veritatis.
            </p>
            <span className="text-xl text-gray-400">-JOY weld-</span>
          </div>
          <div className="text-center">
            <FaQuoteLeft className="text-lg text-[#cccccc63]  ml-4" />

            <p className="lg:text-lg text-sm text-gray-500 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing{" "}
              <br className="hidden lg:block" /> elit. Commodi, architecto ipsum
              deleniti repudiandae perspiciatis eos{" "}
              <br className="hidden lg:block" /> nisi architecto ipsum deleniti
              repudiandae perspiciatis eos <br className="hidden lg:block" />{" "}
              nisi eveniet esse pariatur veritatis.
            </p>
            <span className="text-xl text-gray-400">-stella damson-</span>
          </div>
        </Slider>
      </div>
    );
  }
}
