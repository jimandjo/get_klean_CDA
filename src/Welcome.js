import Button from "react-bootstrap/Button";
import "./Welcome.css"

function Welcome() {

  return (
    <>

      <h1 class="mb-3">Get Klean CDA</h1>
      <h4 class="mb-3">I clean and get you organized so you can focus on the important things in life.

        <br></br>
        Cleaning Services Available:
        <li>Residential</li>
        <li>Commercial </li>
        <li>Organizing </li>
        <li>Move-In </li>
        <li>Move-Out </li>
        <li>Vacation Rentals & Air BnB's</li>
      </h4>
      <Button class="btn btn-primary" href="www.vineministry.org" role="button">Get Started</Button>

    </>


  )
}

export default Welcome