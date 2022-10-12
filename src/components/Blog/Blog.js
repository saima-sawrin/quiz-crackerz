import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blog.css';
const Blog = () => {
    return (
        <div id='blog' >
            <h1>Blog</h1>
            <Accordion className='accordion' defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is the purpose of react router?</Accordion.Header>
        <Accordion.Body>
React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What is a context API How does it work?</Accordion.Header>
        <Accordion.Body>
        The Main 3 Approaches when adding the context API to your app is as Follows:
        1.Create a context using createContext.
        2.Wrap the React components using the created context.
        3.Consume the created context inside components using useContext .
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How does useRef works in React?</Accordion.Header>
        <Accordion.Body>
        useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default Blog;