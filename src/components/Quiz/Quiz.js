import React from 'react';
import { Form } from 'react-router-dom';
import './Quizes.css';
const Quiz = ({quiz}) => {
    const{question , options , correctAnswer} = quiz;

    return (
        <div className='quiz-container'>
        <p>{question}</p>

        {/* <form>
        <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label>
  </form> */}
  <input type="radio" name={options[0]} id={options[0]} />
  <label htmlFor="">{options[0]}</label>
  <br />
  <input type="radio" name={options[1]} id={options[1]} />
  <label htmlFor="">{options[1]}</label>
  <br />
  <input type="radio" name={options[2]} id={options[2]} />
  <label htmlFor="">{options[2]}</label>
  <br />
  <input type="radio" name={options[3]} id={options[3]} />
  <label htmlFor="">{options[3]}</label>
  <br />

        </div>
    );
};

export default Quiz;