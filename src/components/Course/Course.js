import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Quizes from '../Quiz/Quizes';
import './Course.css';
const Course = ({course}) => {
    const{id,name , logo , total} = course;
    const [quiz, setQuiz] = useState();
    const navigate = useNavigate();
    const handleNavigate = () =>{
    navigate(`quiz/${id}`)
    }
    return (
       
   <div className="cart">

<Card id='card' style={{ width: '20rem' }}>
      <Card.Img variant="top" src={logo}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        Total Quiz:{total}
        </Card.Text>
      
        <Button onClick={()=> handleNavigate()} variant="primary">Start Practice</Button>
      </Card.Body>
    </Card>
    
   </div>
    
    );
};

export default Course;