import React from 'react';
import { Form } from 'react-router-dom';

const Quiz = ({quiz}) => {
    const{question} = quiz;
    return (
        <div className='quiz-container'>
            <p>{question}</p>
      
         
        </div>
    );
};

export default Quiz;