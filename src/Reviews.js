import Card from "react-bootstrap/Card";

function Reviews() {
  return (
    <>
      <Card>
        <Card.Title>What Our Customers are Saying About Our Service</Card.Title>
        <Card.Subtitle>We could not be happier!</Card.Subtitle>
      </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Totaly Organized</Card.Title>
        <Card.Text>
          Now I can find what I am looking for in seconds compared to a 1/2 hour.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>We love what karla does for us</Card.Title>
        <Card.Text>
          She has improved the look of our house 10X over.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Karla is amazing!</Card.Title>
        <Card.Text>
          I did not know my house could look so good. My guests are always complimenting me but I just give them Karla's business card.
        </Card.Text>
      </Card.Body>
    </Card>

    </>
  )
}

export default Reviews