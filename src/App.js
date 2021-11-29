import ScrollToTop from 'react-scroll-to-top';
import Navi from './miscComponents/navi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavLow from './miscComponents/footer';
import defaultContent from './content/content';
import { useState } from 'react';
import Admin from './body/admin';
import Button from '@restart/ui/esm/Button';
import Hub from './miscComponents/route';


function App() {
  const [content, setContent] = useState(defaultContent)
  const [show, setShow] = useState(false); //sets show to false, which keeps the Modal from loading
  const handleShow = () => setShow(true); //function to change show to true and load Modal

  return (
    <div className="App">
  <Navi/>
  <Button variant="secondary" onClick={handleShow}>Admin</Button>
  <Admin content={content} updateContent={setContent} defaultContent={defaultContent} setShow={setShow} show={show} />
  <Hub/>
  <ScrollToTop/>
  <NavLow/>
    </div>
  );
}

export default App;
