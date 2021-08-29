import React, { useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { updateProfileAction } from '../../redux/actions/profileAction';
const UserProfile = () => {
    const [editMode, changeMode] = useState(true);
    const dispatch = useDispatch();
    let history = useHistory();
    let userInfo = useSelector(state => state.userReducer.userInfo);
    const inputStyle = "align-self-center  d-block border-0 border-bottom border-secondary";
    const inputStyleReadOnly = "pt-2  pb-2 border-0 secondary-color ps-3 text-secondary align-self-center  d-block";
    const [name, changeName] = useState(userInfo.name);
    const [email, changeEmail] = useState(userInfo.email);
    const [phoneNumber, changePhoneNumber] = useState(userInfo.phoneNumber);
    // const [address,changeAddress] = useState(userInfo.address);

    if (userInfo.email === "") {
        history.replace("/");
    }


    function handleDone(){

        let data = {
            name: name,
            email : email,
            phoneNumber: phoneNumber
        }
        updateProfileAction(data)(dispatch);
        changeMode(true);
        history.replace("/user-profile");
    }

    function inputFieldgenerator(label, value, handler, mode, pattern, type) {
        return (
            <Col md={6}>
                <label className="h6 mt-5" id={label}>
                    {label}
                </label>
                <input
                    pattern={pattern}
                    aria-labelledby={label}
                    className={editMode ? inputStyleReadOnly : inputStyle}
                    type={type}
                    placeholder={label}
                    value={value}
                    required
                    readOnly={mode}
                    onChange={(value) => handler(value.target.value)}
                />
            </Col>
        );
    }

    return (
        <Container className="mt-5 mb-5">
            <Row className="justify-content-center">
                <Col md={10} lg={10} className=" ">
                    <ListGroup>
                        <ListGroup.Item>
                            <div className=" d-flex flex-row justify-content-between">
                                <h5 className="mt-2">
                                    My Profile
                                </h5>
                                {
                                    editMode
                                        ? <button
                                            onClick={() => changeMode(false)}
                                            className="btn primary-text-color">
                                            Edit
                                        </button>
                                        : <button
                                            onClick={handleDone}
                                            className="btn primary-text-color">
                                            Done
                                        </button>

                                }

                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="">
                          <Row className=" justify-content-start">
                          {
                                inputFieldgenerator(
                                    "Name",
                                    name,
                                    (value) => {
                                        changeName(value)
                                    },
                                    editMode,
                                    "[a-zA-z .]{1,}",
                                    "text"
                                )
                            }
                            {
                                inputFieldgenerator(
                                    "Email",
                                    email,
                                    (value) => {
                                        changeEmail(value)
                                    },
                                    editMode,
                                    "[a-zA-z .]{1,}",
                                    "email"
                                )
                            }
                             {
                                inputFieldgenerator(
                                    "Phone number",
                                    phoneNumber,
                                    (value) => {
                                        changePhoneNumber(value)
                                    },
                                    editMode,
                                    "[0-9]{10}",
                                    "tel"
                                )
                            }
                          </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};
export default UserProfile;