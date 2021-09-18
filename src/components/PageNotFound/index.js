import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Page from '../../images/notFound.png';
import RightArrow from '../../images/SVGs/rightArrow.js';

const PageNotFound = () => {
    const history = useHistory();

    function handleRedirect(params) {
        history.replace("/");
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <img src={Page} alt="Page not found"
                    className="h-25 w-50"
                />
            </Row>
            <Row className="justify-content-center mb-5">
                <Col md={4} className="text-center">
                    <h6 className="primary-text-color">
                        Whoops! Lost in Space?
                    </h6>
                    <p>
                        The page you're looking for isn't found
                    </p>
                    <button
                    onClick={handleRedirect}
                     className="btn ps-3 pe-3 primary-color text-white">
                        Back to Home
                        <RightArrow/>
                    </button>
                </Col>
            </Row>
        </Container>
    );
};
export default PageNotFound;