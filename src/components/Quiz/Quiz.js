import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import './Quizes.css';
const Quiz = ({quiz}) => {
    const{question , options , correctAnswer} = quiz;
    console.log(quiz);
    const [ans , setAns] = useState([]);
    const handleCorrectAnswer = quiz =>{

        const correct = ans.find(ca => ca.correctAnswer===quiz.options.correctAnswer)
        if(correct){
        toast("Right answer");
        }
        else{
            toast("Wrong answer");
        }
    }
   
    
    return (
        <div className='quiz-container'>
        <p>{question}</p>
         

        <div>
            <input className="form-check-input"type="radio" name="flexRadioDefault" id="flexRadioDefault1"onClick={handleCorrectAnswer}/>
            <ToastContainer />
            <label  className="form-check-label" htmlFor="flexRadioDefault1">
                {options[0]}
            </label>
        </div>

        <div>
            <input className="form-check-input"type="radio" name="flexRadioDefault" id="flexRadioDefault1"onClick={handleCorrectAnswer}/>
            <ToastContainer />
            <label  className="form-check-label" htmlFor="flexRadioDefault1">
                {options[1]}
            </label>
        </div>

        <div>
            <input className="form-check-input"type="radio" name="flexRadioDefault" id="flexRadioDefault1"onClick={handleCorrectAnswer}/>
            <ToastContainer />
            <label  className="form-check-label" htmlFor="flexRadioDefault1">
                {options[2]}
            </label>
        </div>

        <div>
            <input className="form-check-input"type="radio" name="flexRadioDefault" id="flexRadioDefault1"onClick={handleCorrectAnswer}/>
            <ToastContainer />
            <label  className="form-check-label" htmlFor="flexRadioDefault1">
                {options[3]}
            </label>
        </div>


 
        </div>
    );
};

export default Quiz;