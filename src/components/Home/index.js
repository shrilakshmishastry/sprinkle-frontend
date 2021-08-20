import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import LandLayout from './Ui/landLayout';
import PopularProducts from './Ui/popularProducts';

const Home = () => {
    return (
        <Container  >
           <LandLayout/>
           <PopularProducts/>
        </Container>
    );
};
export default Home;