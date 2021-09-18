import React, { useState, useRef } from 'react';
import { Formik } from 'formik';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getProfileInitialData, updateProfileAction } from '../../redux/actions/profileAction';
import { profileEditSchema } from '../../config/configvalidation/profileEditSchema';
import { profileContent } from '../../Data/UserProfile/emptyUserData';
import classNames from "classnames";

const UserProfile = () => {
    const [readOnlyMode, changeMode] = useState(true);
    const dispatch = useDispatch();
    let history = useHistory();
    let userInfo = useSelector(state => state.userReducer.userInfo);
    const [error, addError] = useState("");

    // const [address,changeAddress] = useState(userInfo.address);

    if (userInfo && userInfo.email === "") {
        history.replace("/");
    }

    const editStyle = profileContent.inputStyle;
    const readOnlyStyle = profileContent.inputStyleReadOnly;

    const inputStyle = classNames({
        [`${editStyle}`]: !readOnlyMode,
        [`${readOnlyStyle}`]: readOnlyMode
    });

    function getError(data, reset) {
        addError(data);
        reset();
    }

    async function handleDone(values, reset) {
        let data = {
            name: values.name,
            email: values.email,
            phone_number: values.phoneNumber,
            address: userInfo.address
        }

        await updateProfileAction(data,
            (data) => getError(data, reset)
        )(dispatch);
        changeMode(true);

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
                                    readOnlyMode
                                        ?

                                        <button
                                            onClick={() => changeMode(false)}
                                            className="btn primary-text-color">
                                            Edit
                                        </button>
                                        : <div></div>
                                }

                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p className="text-danger">{error}</p>
                        </ListGroup.Item>
                        <ListGroup.Item className="">
                            <Row className="">
                                <Formik
                                    initialValues={{
                                        email: userInfo.email,
                                        phoneNumber: userInfo.phone_number,
                                        name: userInfo.name,
                                    }}
                                    validationSchema={profileEditSchema}
                                    onSubmit={(values, { setSubmitting, resetForm }) => {
                                        setSubmitting(true);
                                        handleDone(values, resetForm);
                                        setSubmitting(false);
                                    }}
                                >
                                    {
                                        ({
                                            values,
                                            handleSubmit,
                                            errors,
                                            touched,
                                            handleChange,
                                            isSubmitting
                                        }) => (
                                            <form onSubmit={handleSubmit}>
                                                {
                                                    profileContent.inputField.map((value) => {
                                                        return (
                                                            <div key={value.label}>
                                                                <label className="visually-hidden" id="AddFirstLine">
                                                                    {value.label}
                                                                </label>
                                                                <input
                                                                    readOnly={readOnlyMode}
                                                                    value={values[value.name]}
                                                                    onChange={handleChange}
                                                                    name={value.name}
                                                                    type={value.type}
                                                                    placeholder={value.label}
                                                                    required
                                                                    className={inputStyle}
                                                                />
                                                                <div>

                                                                    {errors[value.name] && touched[value.name] ?

                                                                        <div className="text-danger">

                                                                            <span className="me-3 ">{errors[value.name].key}</span>
                                                                        </div>
                                                                        : null
                                                                    }

                                                                </div>
                                                            </div>


                                                        )
                                                    })
                                                }
                                                {
                                                    readOnlyMode
                                                        ? <div></div>
                                                        : <div className="d-grid">
                                                            <button
                                                                type="submit"
                                                                disabled={isSubmitting}
                                                                className="btn d-block mt-5 primary-color text-white">
                                                                SUBMIT
                                                            </button>
                                                        </div>

                                                }


                                            </form>
                                        )
                                    }
                                </Formik>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};
export default UserProfile;