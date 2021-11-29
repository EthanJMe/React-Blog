import  pineconeLamp from "../assets/Pinecone_lamp.jpg";
import suspended from "../assets/suspended.jpg"
import equipment from "../assets/equipment.jpg"
import authors from "../assets/DadAndI.jpg"
import contImg from "../assets/pen.jpg"
import orb from "../assets/orb.jpg"
import layeredStopper from "../assets/layered_stopper.jpg"
import resinLego from "../assets/resin_lego.jpg"
import { Card, CardImg, Carousel } from "react-bootstrap"

function HomeBody () {

return (<div>
    <a href = '/posts/article1'>
    <Card className = "article">
     <CardImg variant = 'top' src = {pineconeLamp} />
    <Card.Body>
          <Card.Title>Article 1</Card.Title>
          <Card.Text>
            This pinecone lamp is complex, so we will  
            only cover the electronics this week.
          </Card.Text>
        </Card.Body>
    </Card>
    </a>
    <a href = '/posts/article2'>
    <Card className = "article">
     <CardImg variant = 'top' src = {suspended} />
    <Card.Body>
          <Card.Title>Article 2</Card.Title>
          <Card.Text>
            Suspending items can cause bubbles in your resin here are solutions.
          </Card.Text>
        </Card.Body>
    </Card>
    </a>
    <a href = '/posts/article3'>
    <Card className = "article">
     <CardImg variant = 'top' src = {equipment} />
    <Card.Body>
          <Card.Title>Article 3</Card.Title>
          <Card.Text>
            Having the right tools for the job is paramount, here is a list of those essentials.
          </Card.Text>
        </Card.Body>
    </Card>
    </a>
      <a href = '/about'>
      <Card className = "authCard">
     <CardImg className = "authImg" variant = 'top' src = {authors} />
    <Card.Body>
          <Card.Title>About Us</Card.Title>
          
          <Card.Text>
           Get to know the writers behind your favorite blog!
          </Card.Text>
        </Card.Body>
    </Card>
    </a>
    <a href = '/contactUs'>
    <Card className = "contactCard">
     <CardImg variant = 'top' src = {contImg} />
    <Card.Body>
          <Card.Title>Contact Us</Card.Title>

          <Card.Text>
           Suggestions? Write us a note!
          </Card.Text>
        </Card.Body>
    </Card>
    </a>
    <Carousel className = ".Carousel centerCarousel">
      <Carousel.Item>
        <img
         className="d-block w-100"
         src = {orb}
         alt = "First Slide"
        />
        <Carousel.Caption>
      <h3>An orb of resin and burl</h3>
      <p>Burl has the most incredible texture, which is why it is great for resin work</p>
    </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         className="d-block w-100"
         src = {resinLego}
         alt = "First Slide"
        />
        <Carousel.Caption>
      <h3>Lego landscapes</h3>
      <p>This is an early picture of a project involving lego, which is a very delicate object to suspend</p>
    </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         className="d-block w-100"
         src = {layeredStopper}
         alt = "First Slide"
        />
        <Carousel.Caption>
      <h3>A resin and wood stopper</h3>
      <p>Stoppers are one of the easiest things to make with resin, gotta make them entertaining to produce!</p>
    </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
)
}

export default HomeBody
