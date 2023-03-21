import React from "react";
import CleanHouse from './CleanHouse.jpg';
// import MessyHouse from './MessyHouse.jpg';
// import Overwhelm from './Overwhelm.jpeg';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Welcome2() {
  return (
    <>
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={CleanHouse} class="d-block mx-lg-auto img-fluid" alt="Clean House" width="800" height="400" loading="lazy"
        alt='Clean House'
      >
        <p>Get Klean CDA</p>
        <h4>I clean and organize your home so you can do the important things in your life.</h4>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg'
        // alt='do It'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(40).jpg'
        // alt='Messy'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
    </>
  );
}