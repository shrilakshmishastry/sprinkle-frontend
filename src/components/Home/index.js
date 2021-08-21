import React from 'react';
import {Container} from 'react-bootstrap';

import LandLayout from './Ui/landLayout';
import OurBottelYourName from './Ui/ourBottelYourName';
import PopularProducts from './Ui/popularProducts';
import WorkingHours from './Ui/workingHours';

const Home = () => {
    return (
        <Container fluid >
           <LandLayout/>
           <PopularProducts/>
           <OurBottelYourName/>
           <WorkingHours/>
        </Container>
    );
};
export default Home;