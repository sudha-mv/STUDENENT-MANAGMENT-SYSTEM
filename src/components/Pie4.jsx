
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import news from "../img/news.png"
import events from "../img/events.png"
import buletin from "../img/buletin.png"

const Pie4 = () => {
  return (
    <Container>
      <div>
      <h1 className=" float-start">Shool Updates</h1>
    <p className='text-end'>view all</p>
      </div><br/>
     <div className='mt-5'>
     <Row>
        <Col xs={4} >
          <Card className='shadow-lg p-3 mb-5 bg-white rounded'>
            <Card.Body>
              <Card.Title>
                <img src={news} style={{width:"50px", backgroundColor:"#a5f2a0"}} alt="" className='shadow-lg p-3 mb-5 rounded' />
              </Card.Title>
              <Card.Text>
                <h6>News </h6>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4} >
          <Card className='shadow-lg p-3 mb-5 bg-white rounded'>
            <Card.Body>
              <Card.Title>
              <img src={events} style={{width:"50px" , backgroundColor:"pink"}} className='shadow-lg p-3 mb-5 rounded' alt="" />
              </Card.Title>
              <Card.Text> <h6>Events </h6></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4} >
          <Card className='shadow-lg p-3 mb-5 bg-white rounded'>
            <Card.Body>
              <Card.Title>
              <img src={buletin} style={{width:"50px" ,backgroundColor:"#c5c4f5"}} alt="" className='shadow-lg p-3 mb-5 rounded' />
              </Card.Title>
              <Card.Text> <h6>Buletin </h6></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
     </div>
    </Container>
  );
};

export default Pie4;
