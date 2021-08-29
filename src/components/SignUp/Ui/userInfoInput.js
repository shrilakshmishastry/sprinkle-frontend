import { useState } from "react";
import { Formik } from "formik";
import { signUpSchema } from "../../../config/configvalidation/signUpSchema";
import { SignUp } from "../../../Data/Signup/content";



const UserInfoInput = ({ handleContinue }) => {


    async function handleFormSubmit(values) {
        console.log(values);
        handleContinue(values);
    }



    return (
        <div className="d-flex flex-column mt-lg-5 pt-lg-5">
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    phoneNumber: '',
                    name: '',
                }}
                validationSchema={signUpSchema}
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
                                SignUp.inputField.map((value) => {
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
                                                className={SignUp.inputStyle}
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
        </div>
    );
}
export default UserInfoInput;
