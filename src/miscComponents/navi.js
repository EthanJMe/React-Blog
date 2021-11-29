import Navbar from 'react-bootstrap/Navbar';
import {Link} from'react-router-dom'
function Navi () {
    return (
        <Navbar>
            <h1><Link to = "/">Home </Link></h1>
            <h3><Link to = "/about">About</Link></h3>
            <h3><Link to = "/contactUs">Contact Us</Link></h3>
            <h3><Link to = '/posts'>Posts</Link></h3>
      </Navbar>
)
}
export default Navi