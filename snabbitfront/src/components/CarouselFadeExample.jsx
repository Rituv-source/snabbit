import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './CarouselFadeExample.css';

function CarouselFadeExample() {
  return (
    <div className='carousel-wrapper'>
    <Carousel fade interval={3000} controls indicators>
      <Carousel.Item>
        <img className="carousel-img w-100" src="/source_img/Dishwashing.png" style={{height: "500px"}}/>
        <Carousel.Caption>
          <h3 className='carousel_title'>Professional Dishwashing</h3>
          <p className='carousel_content'>Spotless cleaning with modern equipment and expert staff.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='carousel-img w-100' src="/source_img/Laundry.png" style={{height: "500px"}}/>
        <Carousel.Caption>
          <h3 className='carousel_title'>Expert Laundry Care</h3>
          <p className='carousel_content'>Gentle wash and premium ironing for all your garments.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img w-100" src="/source_img/WindowCleaning.png" style={{height: "500px"}}/>
        <Carousel.Caption>
          <h3 className='carousel_title'>Crystal Clear Windows</h3>
          <p className='carousel_content'>
          Get streak-free and shiny windows with our cleaning service.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/source_img/KitchenPrep.png" className='carousel-img w-100' style={{height: "500px"}}/>
        <Carousel.Caption>
          <h3 className='carousel_title'>Kitchen Preparation Help</h3>
          <p className='carousel_content'>
          Efficient support for all your kitchen prep needs.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFadeExample;