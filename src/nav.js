import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function Navigation(props) {
    return (
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Get Klean CDA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Create Your Own Estimate</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Reviews</a>
        </li>
       
      </ul>
    </div>
  </div>
  <div class="p-5 text-center bg-light">
    <h1 class="mb-3">Get Klean CDA</h1>
    <h4 class="mb-3">I clean and get you organized so you can focus on the important things in life.</h4>
    <a class="btn btn-primary" href="" role="button">More Info</a>
  </div>
</nav>
    )
  }

  export default Navigation