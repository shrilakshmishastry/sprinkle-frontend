import React, { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";
import LoginHandle from './Ui/loginHandle';


const BuyNow = () => {
    const info = useLocation();
    console.log(info.state);
    const userInfo = useSelector(state => state.userReducer.userInfo.email);

    useEffect(()=>{},[userInfo]);


    if (info.state === undefined) {
        return <Redirect to="/" />
    }

    
    return (
        <Container>
            <Row className="mt-5 mb-5">
                <Col md={6} lg={8} className="bg-primary" >
                    <div className="accordion" id="accordionSprinkle">
                        <LoginHandle />
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button
                                    className={userInfo === " " ? " accordion-button collapsed" : "accordion-button"}
                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                    aria-expanded={userInfo === "" ? false : true}
                                    aria-controls="collapseTwo"

                                >
                                    DELIVERY ADDRESS
                                </button>
                            </h2>
                            <div id="collapseTwo"  className={userInfo === " " ?  "accordion-collapse collapse" : "ccordion-collapse  show"}
                                aria-labelledby="headingTwo" data-bs-parent="#accordionSprinkle"
                            >
                                <div className="accordion-body">
                                    <strong>
                                        Address
                                    </strong>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className={userInfo === "" ? "accordion-button collapsed" : "accordion-button"}
                                    data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                    aria-expanded="false" aria-controls="collapseThree"

                                >
                                    ORDER SUMMARY
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse"
                                aria-labelledby="headingThree" data-bs-parent="#accordionSprinkle"
                            >
                                <div className="accordion-body">
                                    <strong>
                                        ORDER SUMMARY
                                    </strong>
                                </div>
                            </div>
                        </div>


                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className={userInfo === "" ? "accordion-button collapsed" : "accordion-button"}
                                    data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                    aria-expanded="false" aria-controls="collapseThree"

                                >
                                    PAYMENT OPTION
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse"
                                aria-labelledby="headingThree" data-bs-parent="#accordionSprinkle"
                            >
                                <div className="accordion-body">
                                    <strong>
                                        PAYMENT OPTION
                                    </strong>
                                </div>
                            </div>
                        </div>


                    </div>
                </Col>
                <Col md={6} lg={4} className="bg-success">
                    item list
                </Col>
            </Row>
        </Container>

    );
}
export default BuyNow;