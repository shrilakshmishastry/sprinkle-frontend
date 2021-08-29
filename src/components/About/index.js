import React from 'react';
import { Container } from 'react-bootstrap';
import ContactUs from './Ui/contact';
import LandImg from './Ui/landImg';
import Land from './Ui/landQuote';
import WhySprinkle from './Ui/whySprinkle';
const About = () =>{
    return (
        <Container fluid
         className="light-variant pt-5 pb-5">
            <Land/>
            <LandImg/>
            <WhySprinkle/>
            <ContactUs/>
        </Container>
    );
};
export default About;