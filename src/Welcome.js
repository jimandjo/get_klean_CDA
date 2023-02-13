import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import "./Welcome.css";




function Welcome() {

  return (
    <>
   
        <Card style={{ width: '50rem'}}>
          <Card.Img variant="top" scr="%PUBLIC_URL%/3617356093501_n.jpg" />
          <Card.Body>
          <Card.Title>Get Klean CDA</Card.Title>
          <Card.Subtitle>I clean and get you organized so you can focus on the important things in life.</Card.Subtitle>
          <Card.Subtitle></Card.Subtitle>
          <Card.Header>Cleaning Services Available:</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Residential</ListGroup.Item>
              <ListGroup.Item>Commercial</ListGroup.Item>
              <ListGroup.Item>Organizing</ListGroup.Item>
              <ListGroup.Item>Move-In</ListGroup.Item>
              <ListGroup.Item>Move-Out </ListGroup.Item>
              <ListGroup.Item>Vacation Rentals & Air BnB's </ListGroup.Item>
            </ListGroup>
          <Button class="btn btn-primary" href="www.vineministry.org" role="button">Get Started</Button>

          </Card.Body>
          </Card>
          <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        {/* <img src="bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"> */}
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
    </div>
  </div>

        
        
      

    </>


  )
}

export default Welcome