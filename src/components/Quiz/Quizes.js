import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';
import './Quizes.css';
const Quizes = () => {
    const quizes = useLoaderData([0]);
    console.log(quizes.data);
    return (
        <div>
            <h2 className='my-3'>Quiz of {quizes.data.name}</h2>
          {
            quizes.data.questions.map(quiz => <Quiz
            key={quiz.id}
            quiz={quiz}></Quiz>)
          }
        </div>
    );
};

export default Quizes;