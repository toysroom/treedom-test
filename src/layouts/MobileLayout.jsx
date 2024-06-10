import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useWizardContext } from "../contexts/WizardContext"

function MobileLayout( {steps} ) {

  let { sliderRef, slider, setSlider } = useWizardContext();

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="slider-container">
          <Slider
            ref={slider => {
              // sliderRef = slider;
              setSlider(slider)
            }}
            {...settings}
          >
          {
            steps.map( (step, index) => {
              return (
                <div key={index}>
                  <h3>{step.label}</h3>
                  { step.component }
                </div>
              )
            }) 
          }
          </Slider>
        </div>
    )
}

export default MobileLayout;