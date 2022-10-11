import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Course.css';
const Course = ({course}) => {
    const{name , logo , total} = course;
    return (
       
   <div className="cart">

<Card  style={{ width: '18rem' , margin:'10px'  }}>
      <Card.Img variant="top" src={logo}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        Total Quiz:{total}
        </Card.Text>
        <Button variant="primary">Start Practice</Button>
      </Card.Body>
    </Card>
   </div>
    
    );
};

export default Course;