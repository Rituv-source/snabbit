import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarouselFadeExample from '../components/CarouselFadeExample';
import './Home.css';
function Home() {
  return (
    <>
      <section className="home">
        <CarouselFadeExample className="carousel-container w-100" />
        <div className='Spotlight my-5'>
          <p className="spotlight-title d-flex justify-content-center mb-5">
            <span className="fs-3 me-2 spotlight_content">IN THE</span>
            <span className="fs-3 spotlight_title">SPOTLIGHT</span>
          </p>
          <ul className='d-flex justify-content-center list-unstyled gap-5'>
            <li><img src="https://snabbit.com/assets/spotlight/yourstory.svg" /></li>
            <li><img src="https://snabbit.com/assets/spotlight/inc42.svg" /></li>
            <li><img src="https://snabbit.com/assets/spotlight/money-control.svg" /></li>
            <li><img src="https://snabbit.com/assets/spotlight/economic-times.svg" /></li>
          </ul>
        </div>
      </section>
    </>
  )
}
export default Home;