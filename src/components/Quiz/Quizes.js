import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';
import './Quizes.css';
const Quizes = () => {
    const quizes = useLoaderData([0]);
  
    return (
        <div className='container'>
            <h2 className=''>Quiz of {quizes.data.name}</h2>
          {
            quizes.data.questions.map(quiz => <Quiz
            key={quiz.id}
            quiz={quiz}></Quiz>)
          }
        </div>
    );
};

export default Quizes;