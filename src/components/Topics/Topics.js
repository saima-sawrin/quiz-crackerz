import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

import './Topics.css';
const Topics = () => {
  const Courses = useLoaderData([0]);

    return (
        <div id='topics' className='courses ms-5 me-5 py-4'>
         
          {
            Courses.data.map(course => <Course
            key={course.id}
            course={course}></Course>)
          }
        </div>
    );
};

export default Topics;