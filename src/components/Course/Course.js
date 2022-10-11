import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './Course.css';
const Course = ({course}) => {
    const{name , logo , total} = course;
    const [quiz, setQuiz] = useState();
    const handleQuiz = () =>{
      setQuiz('../Quiz/Quiz')
    }
    return (
       
   <div className="cart">

<Card  style={{ width: '22rem' , margin:'10px'  }}>
      <Card.Img variant="top" src={logo}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        Total Quiz:{total}
        </Card.Text>
        <Button onClick={()=>{handleQuiz()}} variant="primary">Start Practice</Button>
      </Card.Body>
    </Card>
    <div>

    </div>
   </div>
    
    );
};

export default Course;