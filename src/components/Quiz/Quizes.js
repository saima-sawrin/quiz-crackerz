import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';
import './Quizes.css';
const Quizes = () => {
    const quizes = useLoaderData([0]);
    console.log(quizes.data.questions);
    return (
        <div>
            <h1>total : {quizes.data.questions.length} </h1>
          {
            quizes.data.questions.map(quiz => <Quiz
            key={quiz.id}
            quiz={quiz}></Quiz>)
          }
        </div>
    );
};

export default Quizes;