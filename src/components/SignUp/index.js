import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Cancel from '../../images/SVGs/cancel';
import { useDispatch } from "react-redux";
import PurityImg from '../../images/purity.jpg';
import UserInfoInput from "./Ui/userInfoInput.js";
import AddressInput from "./Ui/addressInput.js";
import { modalSignIn } from '../../redux/actions/modalLogin';
import { signInHandler } from '../../Data/ApiCalls/Login/signin';
import { getProfileInitialData } from '../../redux/actions/profileAction';

const SignUp = () => {
    const [address, addAddress] = useState("");
    const [userInfo, addUserInfo] = useState("");
    const [activeWindow, setActiveWindow] = useState(0);
    const dispatch = useDispatch();
    const [load, changeLoad] = useState(false);
    const [errorText, addErrorText] = useState("");

    function handleContinue(value) {
        addUserInfo(value);
        setActiveWindow(1);
    }

    function handleModal() {
        modalSignIn(false)(dispatch);
    }

    async function handleAddressInput(address) {

        userInfo["address"] = address;

        changeLoad(true);

        const result = await signInHandler(userInfo);

        if (result==="success") {
            getProfileInitialData()(dispatch);
            modalSignIn(false)(dispatch);

        } else {

            addErrorText(result.message);
        }





        changeLoad(false);
    }

    return (
        <Container>
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
            <Row>

                <Col md={4} lg={6} className="bg-primary">
                </Col>
                <Col md={8} lg={{ span: 5, offset: 1 }}>
                    <p className="text-danger">
                    {errorText}
                    </p>
                </Col>

            </Row>
            <Row className="">
                <Col md={4} lg={6} className="bg-primary pt-5 pb-5   text-white">
                    <div className="d-flex flex-column justify-content-between">
                        <div >
                            <h4>
                                Signin
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
                    className="ms-lg-3 ">
                    {
                        activeWindow === 0
                            ? <UserInfoInput
                                handleContinue={
                                    (value) => handleContinue(value)}
                            />
                            : <AddressInput
                                load={load}
                                handleAddressInput={(data) => handleAddressInput(data)}
                                handleGoBack={() => setActiveWindow(0)}
                            />
                    }
                </Col>
            </Row>
        </Container>

    );
};
export default SignUp;