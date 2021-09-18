import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cancel from '../../images/SVGs/cancel';
import UserInfoInput from './UI/userInfoInput';
import PurityImg from '../../images/purity.jpg';
import { useDispatch } from 'react-redux';
import { modalLogin } from '../../redux/actions/modalLogin';

const Login = () => {


    const dispatch = useDispatch();

    function handleModal() {
        modalLogin(false)(dispatch);
    }

    return (
        <Container fluid>
            <Row >
                <Col md={4} lg={6} className="bg-primary">
                </Col>
                <Col md={6} lg={{ span: 4, offset: 1 }}>

                </Col>
                <Col md={2} lg={1} className="text-end ">
                    <button onClick={handleModal} className="btn fw-bold ">
                        <Cancel />
                    </button>
                </Col>

            </Row>
            <Row className="">
                <Col md={4} lg={6} className="bg-primary pt-5 pb-5   text-white">
                    <div className="d-flex flex-column justify-content-between">
                        <div >
                            <h4>
                                LOGIN
                            </h4>
                            <p className="small mt-3">
                                Get access to all
                                orders
                            </p>
                        </div>

                        <img src={PurityImg} alt="Water purification image" className="mt-5 img-fluid" />

                    </div>
                </Col>
                <Col md={8} lg={{ span: 4 }}
                    className="ms-lg-3 mt-lg-5 pt-lg-5">

                    <UserInfoInput />
                </Col>
            </Row>
        </Container>
    );
};
export default Login;