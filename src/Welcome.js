import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import "./Welcome.css";
import CleanHouse from './dining.jpg';
import MessyHouse from './MessyHouse.jpg';
import Overwhelm from './Overwhelm.jpeg';

function Welcome() {

  return (
    <>
  
          <div class="container col-xxl-8 px-4 py-5" >
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={CleanHouse} class="d-block mx-lg-auto img-fluid" alt="Clean House" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Get Klean CDA</h1>
        
        <h4 class="lead">I clean and organize your home so you can do the important things in your life.</h4>
        <h4 class="lead">Services Available:</h4>
        <ListGroup variant="flush">
              <ListGroup.Item>Residential</ListGroup.Item>
              <ListGroup.Item>Commercial</ListGroup.Item>
              <ListGroup.Item>Organizing</ListGroup.Item>
              <ListGroup.Item>Move-In</ListGroup.Item>
              <ListGroup.Item>Move-Out </ListGroup.Item>
            </ListGroup>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-warning btn-lg px-4 me-md-2">Contact Karlie</button>
          {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Sign Up</button> */}
        </div>
      </div>
    </div>
  </div>
  
{/* Second Hero */}
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={MessyHouse} class="d-block mx-lg-auto img-fluid" alt="Clean House" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3" a href="#">What If You Do Not Clean Your Home</h1>
        
        <h4 class="lead">What would you lose if your home was not cleaned?</h4>
        <h4 class="lead"></h4>

        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-warning btn-lg px-4 me-md-2">Contact Karlie</button>
          {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Sign Up</button> */}
        </div>
      </div>
    </div>
  </div>

  {/* Third Hero */}
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={MessyHouse} class="d-block mx-lg-auto img-fluid" alt="Clean House" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3" a href="#">I Can Help</h1>
        
        <ListGroup variant="flush">
              <ListGroup.Item>You are SO worth it</ListGroup.Item>
              <ListGroup.Item>Your time is valuable</ListGroup.Item>
              <ListGroup.Item>I have amazing skills</ListGroup.Item>
              <ListGroup.Item>I love what I document</ListGroup.Item>
            </ListGroup>
        <h4 class="lead"></h4>

        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-warning btn-lg px-4 me-md-2">Contact Karlie</button>
          {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Sign Up</button> */}
        </div>
      </div>
    </div>
  </div>

    {/* Forth Hero */}
    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={Overwhelm} class="d-block mx-lg-auto img-fluid" alt="Overwhelmed" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3" a href="#">I Know the Feeling</h1>
        
        <ListGroup variant="flush">
              <ListGroup.Item>So little time</ListGroup.Item>
              <ListGroup.Item>Important things to do</ListGroup.Item>
              <ListGroup.Item>Decision Overwhelm</ListGroup.Item>
              <ListGroup.Item>Cleaning is not my expertise</ListGroup.Item>
            </ListGroup>
        <h4 class="lead"></h4>

        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-warning btn-lg px-4 me-md-2">Contact Karlie</button>
          {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Sign Up</button> */}
        </div>
      </div>
    </div>
  </div>

    {/* Fifth Hero */}
    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <p>Picture of Karla</p>
        {/* <img src={Overwhelm} class="d-block mx-lg-auto img-fluid" alt="Clean House" width="700" height="500" loading="lazy"/> */}
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3" a href="#">Contact Me</h1>
        <h4 class="lead">You will be on your way to better things.</h4>

        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-warning btn-lg px-4 me-md-2">Contact Karlie</button>
          {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Sign Up</button> */}
        </div>
      </div>
    </div>
  </div>
  

</>


  )
}

export default Welcome