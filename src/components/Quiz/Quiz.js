import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import {  EyeIcon} from '@heroicons/react/24/solid';
import './Quizes.css';
const Quiz = ({quiz}) => {
    const{question , options , correctAnswer} = quiz;
    console.log(quiz);
    const [ans , setAns] = useState([]);
    const handleCorrectAnswer = correctAnswer =>{
   
        const correct = ans.find(ca => ca.target.value === correctAnswer)
        if(correct){
        setAns(correct);
        toast("Right answer");
        
        }
        else{
            toast("Wrong answer");
        }
    }
    const handleIcon = ()=>{
        toast(`${correctAnswer}`);
       
    }
   
    
    return (
        <div className='quiz-container'>
        <p>{question}</p>
      
        <EyeIcon className=" icon h-3 w-3 text-blue-500" onClick={()=> handleIcon()}></EyeIcon>
         

        <div>
            <input className="form-check-input"type="radio" name="flexRadioDefault" id="flexRadioDefault1"onClick={()=>handleCorrectAnswer(correctAnswer)}/>
            <ToastContainer />
            <label  className="form-check-label" htmlFor="flexRadioDefault1">
                {options[0]}
            </label>
        </div>

        <div>
            <input className="form-check-input"type="radio" name="flexRadioDefault" id="flexRadioDefault1"onClick={()=>handleCorrectAnswer(correctAnswer)}/>
            <ToastContainer />
            <label  className="form-check-label" htmlFor="flexRadioDefault1">
                {options[1]}
            </label>
        </div>

        <div>
            <input className="form-check-input"type="radio" name="flexRadioDefault" id="flexRadioDefault1"onClick={()=>handleCorrectAnswer(correctAnswer)}/>
            <ToastContainer />
            <label  className="form-check-label" htmlFor="flexRadioDefault1">
                {options[2]}
            </label>
        </div>

        <div>
            <input className="form-check-input"type="radio" name="flexRadioDefault" id="flexRadioDefault1"onClick={()=>handleCorrectAnswer(correctAnswer)}/>
            <ToastContainer />
            <label  className="form-check-label" htmlFor="flexRadioDefault1">
                {options[3]}
            </label>
        </div>
        {/* {
            quiz.correctAnswer=== true? toast("Right answer") : toast("Wrong answer")
        } */}

 
        </div>
    );
};

export default Quiz;