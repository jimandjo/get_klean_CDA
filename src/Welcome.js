import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import "./Welcome.css";
import CleanHouse from './dining.jpg';





function Welcome() {

  return (
    <>
  
          <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={CleanHouse} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3" a href="#">Get Klean CDA</h1>
        
        <h4 class="lead">I clean and organize your home so you can do the important things in your life.</h4>
        <h4 class="lead">Services Available:</h4>
        <ListGroup variant="flush">
              <ListGroup.Item>Residential</ListGroup.Item>
              <ListGroup.Item>Commercial</ListGroup.Item>
              <ListGroup.Item>Organizing</ListGroup.Item>
              <ListGroup.Item>Move-In</ListGroup.Item>
              <ListGroup.Item>Move-Out </ListGroup.Item>
              <ListGroup.Item>Vacation Rentals & Air BnB's </ListGroup.Item>
            </ListGroup>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Contact Karlie</button>
          {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Sign Up</button> */}
        </div>
      </div>
    </div>
  </div>


  

        
        
      

    </>


  )
}

export default Welcome