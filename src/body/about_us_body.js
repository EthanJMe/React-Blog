import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Ethan from "../assets/Ethan.jpg"
import Warren from "../assets/Warren.png"
import MavidDarks from "../assets/MavidDarks.jpg"
function AboutUsBody () {
   return( 
   <div>
   <h1 className = "center">About Us!</h1>
   <br/>
   <Row>
   <Col>
   <Link to = "/about/Ethan"><div className= "abtImg"><img className = "circleImage" src = {Ethan} alt = ""></img></div></Link>
   </Col>
   <Col>
   <Link to = "/about/Warren"><div className= "abtImg"><img className = "circleImage" src = {Warren} alt = ""></img></div></Link>
   </Col>
   <Col>
   <Link to = "/about/Mavid"><div className= "abtImg"><img className = "circleImage" src = {MavidDarks} alt = ""></img></div></Link>
   </Col>
   </Row>
   <p>This is all about the resinate team and the creator of these pieces, click on one of the circles to learn more </p>
   </div>
   )
}
export default AboutUsBody