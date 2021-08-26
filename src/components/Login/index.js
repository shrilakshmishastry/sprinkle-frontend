import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cancel from '../../Data/SVGs/cancel';
import AddressInput from './UI/addressInput';
import UserInfoInput from './UI/userInfoInput';
import PurityImg from '../../images/purity.jpg';

const Login = () => {
    // const [address, addAddress] = useState();
    // const [activeWindow, setActiveWindow] = useState(0);




    return (
        <Container>
            <Row className=" justify-content-end">
                <Col md={1}>
                    <button className="btn fw-bold ">
                        <Cancel />
                    </button>
                </Col>

            </Row>
            <Row className="border rounded">
                <Col md={6} lg={6} className="primary-color pt-3 pb-3   text-white">
                    <div className="d-flex flex-column justify-content-between">
                        <div >
                            <h4>
                                LOGIN
                            </h4>
                            <p className="">
                                Get access to place an order and your
                                orders
                            </p>
                        </div>

                        <img src={PurityImg} alt="Water purification image" className="mt-5 img-fluid" />

                    </div>
                </Col>
                <Col md={6} lg={{ span: 5 }}
                    className="">
                    {/* {
                        activeWindow === 0
                            ? <UserInfoInput
                                handleContinue={() => setActiveWindow(1)}
                            />
                            : <AddressInput
                                handleGoBack={() => setActiveWindow(0)}
                            />
                    } */}
                    <UserInfoInput/>
                </Col>
            </Row>
        </Container>
    );
};
export default Login;