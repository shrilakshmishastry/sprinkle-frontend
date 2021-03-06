import React from 'react';
import {Container} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import InstantDelivery from './Ui/instantDelivery';
import LandLayout from './Ui/landLayout';
import OurBottelYourName from './Ui/ourBottelYourName';
import PopularProducts from './Ui/popularProducts';
import WorkingHours from './Ui/workingHours';

const Home = () => {
    const history = useHistory();

    return (
        <Container fluid >
           <LandLayout/>
           <PopularProducts/>
           <OurBottelYourName/>
           <WorkingHours/>
           <InstantDelivery/>

        </Container>
    );
};
export default Home;