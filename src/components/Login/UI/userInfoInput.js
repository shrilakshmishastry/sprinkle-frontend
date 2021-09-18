import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { loginHandler } from "../../../Data/ApiCalls/Login/login";
import { modalLogin, modalSignIn } from "../../../redux/actions/modalLogin";
import { getProfileInitialData } from "../../../redux/actions/profileAction";
import { inputStyle } from "../../../config/BtnConfig/inputStyle";
import { loginSchema } from "../../../config/configvalidation/loginSchema";
import { loginContent } from "../../../Data/Login/content";


const UserInfoInput = () => {

    const dispatch = useDispatch();
    const [errorShow, handleErrorMsg] = useState(false);

    async function handleFormSubmit(values) {
        handleErrorMsg(false);


            const result = await loginHandler(values.email, values.password);

            if (result === "success") {
                getProfileInitialData()(dispatch);
                modalLogin(false)(dispatch);
            } else {
                handleErrorMsg(true);
            }
    }

    function handleSignInBtn() {
        modalLogin(false)(dispatch)
        modalSignIn(true)(dispatch);
    }

    return (
        <div className=" mt-md-5">
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={loginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    handleFormSubmit(values);
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
                                loginContent.inputFields.map((value) => {
                                    return (
                                        <div key={value.label}>
                                            <label className="visually-hidden" id="AddFirstLine">
                                                {value.label}
                                            </label>
                                            <input
                                                value={values[value.name]}
                                                onChange={handleChange}
                                                name={value.name}
                                                type={value.type}
                                                placeholder={value.label}
                                                required
                                                className={inputStyle.inputStyle}
                                            />
                                            <div>

                                                {errors[value.name] && touched[value.name] ?

                                                    <div className="text-danger">
                                                        <span className="me-3">{errors[value.name].key}</span>
                                                    </div>
                                                    : null
                                                }

                                            </div>
                                        </div>


                                    )
                                })
                            }
                            <div className="d-grid">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn d-block mt-5 primary-color text-white">
                                    SUBMIT
                                </button>
                            </div>

                        </form>
                    )
                }
            </Formik>
            <Row className="">
                <Col md={9} xs={7}>
                    <p className="mt-2 text-start text-md-end small">
                        Don't have an account?
                    </p>

                </Col>
                <Col xs={4} md={3} className=" ps-0" >
                    <button
                        onClick={handleSignInBtn}
                        className="btn  text-start ps-0  primary-text-color">
                        <small>
                            Signup
                        </small>
                    </button>
                </Col>
            </Row>

            <div className={errorShow ? "text-center" : "d-none"}>
                <p className="text-danger small">
                    Check password and email
                </p>
            </div>

        </div>
    );
}
export default UserInfoInput;