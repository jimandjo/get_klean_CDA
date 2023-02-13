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

        
        
      

    </>


  )
}

export default Welcome