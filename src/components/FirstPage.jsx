import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavB from './Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../img/icon.webp'
// import Cards from '../animations/cards';
import Pie1 from './Pie1';
import Pie2 from './Pie2';
import Pie3 from './Pie3';
import Pie4 from './Pie4';



const FirstPage = () => {
 
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/FirstPage">Home</Nav.Link>
            <Nav.Link href="/SecondPage">Assignment</Nav.Link>
            <Nav.Link href="/HomeWork">Homework</Nav.Link>
            <Nav.Link href="/Payfees">Pay Fee</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>Home</Navbar.Brand>
        <Navbar.Brand href="#home"><img src={icon} alt="" style={{width:"50px"}} /></Navbar.Brand>
       
      </Container>
    </Navbar>
    <div><h1 style={{paddingLeft:10}}>Hello Maqsud !</h1></div>
       <div style={{display:"flex",justifyContent:"space-around"}}>
       <div> <Pie1 /></div>
       <div ><Pie2 /></div>
       </div><br />
     
       <Pie3 />
       <br />
      
      <div><Pie4 />
      
      </div>

     <div>
      <NavB />
     </div>


    
    </div>
  )
}

export default FirstPage