import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router-dom';
import WaterGlass from '../../../images/land.png';
import './../../../App.css';

const LandLayout = () => {
    const history = useHistory();

    function handleRedirect(){
        history.push("/products");
    }

    return (
        <Row className="">
            <Col className="d-block d-sm-none" >
                <img src={WaterGlass} alt="pure water" className="img-fluid" />
            </Col>
            <Col md={6} lg={4} className=" mt-5  text-md-start text-center" >
                <h1 className="mt-md-5 pt-lg-5">

                    Morden &nbsp;

                    Furniture Brands
                </h1>
                <button onClick={handleRedirect} className="btn btn-primary rounded ps-5 mt-3 mt-lg-4 pe-5">
                    Shop Now
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-3 bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </button>
            </Col>
            <Col md={6} lg={{ span: 6, offset: 2 }} className="d-none d-sm-block" >
                <img src={WaterGlass} alt="pure water" className="img-fluid" />
            </Col>
        </Row>
    );
}
export default LandLayout;