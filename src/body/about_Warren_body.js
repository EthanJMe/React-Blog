import { Link } from "react-router-dom"
import Ethan from "../assets/Ethan.jpg"
import { Row, Col } from "react-bootstrap"
import Warren from "../assets/Warren.png"
import MavidDarks from "../assets/MavidDarks.jpg"
function AboutWarrenBody () {
return( 
    <div>
    <h1 className = "center">About Warren!</h1>
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
    <p>Howdy, I'm Warren, I am the creator of every piece of work on this website I mostly cover helpful tips for when you try your hand at resin work.</p>
    </div>
    )}
    export default AboutWarrenBody