import Card from "react-bootstrap/Card";
import CleanHouse from './CleanHouse.jpg';
import "./Welcome.css";


function Reviews() {
  return (
    <>
    <h1 class="display-5 fw-bold lh-1 mb-3">What My Customers Say About My Service</h1>

      <Card style={{ width: '30rem' }} bg="light">
      <Card.Img src={CleanHouse} class="d-block mx-lg-auto img-fluid" alt="Clean House" width="700" height="500" loading="lazy"/>
      <Card.Body>
        <Card.Text>I'm Totaly Organized</Card.Text>
        <Card.Title>
          Now I can find what I am looking for in seconds compared to a 1/2 hour.
        </Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem' }}>
    <Card.Img src={CleanHouse} class="d-block mx-lg-auto img-fluid" alt="Clean House" width="700" height="500" loading="lazy"/>
      <Card.Body>
        <Card.Text>We love what karla does for us</Card.Text>
        <Card.Title>
          She has improved the look of our house 10X over.
        </Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem' }}>
    <Card.Img src={CleanHouse} class="d-block mx-lg-auto img-fluid" alt="Clean House" width="700" height="500" loading="lazy"/>
      <Card.Body>
        <Card.Text>Karla is amazing!</Card.Text>
        <Card.Title>
          I did not know my house could look so good. My guests are always complimenting me but I just give them Karla's business card.
        </Card.Title>
      </Card.Body>
    </Card>

    </>
  )
}

export default Reviews