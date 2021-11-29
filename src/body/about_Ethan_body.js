import { Link } from "react-router-dom"
import Ethan from "../assets/Ethan.jpg"
import { Row, Col } from "react-bootstrap"
import Warren from "../assets/Warren.png"
import MavidDarks from "../assets/MavidDarks.jpg"
function AboutEthanBody () {
return( 
    <div>
    <h1 className = "center">About Ethan!</h1>
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
    <p>Hi! I'm Ethan I am a enjoyer of functional art so most of my articles cover practical pieces like pens and lamps.</p>
    </div>
    )}
    export default AboutEthanBody