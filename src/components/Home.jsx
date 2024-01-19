import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import girl from  '../img/girl.jpg'
import "../style/Home.css"
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate()
    const submit = (e) => {
        navigate('/FirstPage')
    };
     

  return (
    <div>
          <form onSubmit={submit}>
     <center>
     <Card className='card'  style={{ width: '40rem' }}>
      <Card.Img style={{width:'40rem'}} variant="top" src={girl} />
      <Card.Body>
        <Card.Title><h1>Educating for complexity</h1></Card.Title>
        <Card.Text>
         
         <p>instant,Accurate Communication between school management,staff,parents and students with the Students  Alert portal and app </p>
        </Card.Text>
        <Button type="submit" style={{backgroundColor:"black" , width:"10rem" , height:"3rem" , borderRadius:"10px",color:"white"}} >Get started</Button>
      </Card.Body>
    </Card>
     </center>
     </form>
    </div>
  )
}

export default Home