import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Ethan from "../assets/Ethan.jpg"
import Warren from "../assets/Warren.png"
import MavidDarks from "../assets/MavidDarks.jpg"
function AboutMavidBody() {
   return( 
   <div>
   <h1 className = "center">About Mavid!</h1>
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
   <p>Hello! I am Mavid, the equipment and safety expert here at resinate. I mostly write on what to buy and when to buy it.</p>
   </div>
   )
}
export default AboutMavidBody