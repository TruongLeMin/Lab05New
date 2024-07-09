import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';

const Carousel = () => {
  return (
    <BootstrapCarousel>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/Banner_1.jpg"
          alt="First slide"
        />
        <BootstrapCarousel.Caption>
          {/* <h3>Slide 1</h3>
          <p>Caption for slide 1.</p> */}
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/Banner_2.png"
          alt="Second slide"
        />
        <BootstrapCarousel.Caption>
          {/* <h3>Slide 2</h3>
          <p>Caption for slide 2.</p> */}
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/Banner_3.png"
          alt="Third slide"
        />
        <BootstrapCarousel.Caption>
          {/* <h3>Slide 3</h3>
          <p>Caption for slide 3.</p> */}
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
    </BootstrapCarousel>
  );
};

export default Carousel;
