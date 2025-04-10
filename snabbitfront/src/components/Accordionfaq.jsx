import Accordion from 'react-bootstrap/Accordion';
import React from 'react';
import './Accordionfaq.css';

function Accordionfaq() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className='Accordion_header'>What is Snabbit?</Accordion.Header>
        <Accordion.Body className='Accordion_body'>
        Snabbit is a platform dedicated to delivering innovative solutions that make a difference in people's lives. 
        We focus on quality, customer satisfaction, and creating impactful products.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='Accordion_header'>How can I contact support?</Accordion.Header>
        <Accordion.Body className='Accordion_body'>
        You can reach out to our support team via the "Contact Us" page on our website. 
        Fill out the form with your query, and our team will get back to you promptly.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className='Accordion_header'>What services do you offer?</Accordion.Header>
        <Accordion.Body className='Accordion_body'>
        We offer a wide range of services, including professional training, customer support, and innovative product solutions. 
        Our goal is to exceed expectations and deliver exceptional value.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className='Accordion_header'>Where are you located?</Accordion.Header>
        <Accordion.Body className='Accordion_body'>
        Snabbit operates in multiple countries and cities. 
        For specific location details, please refer to the "About Us" section on our website.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordionfaq;