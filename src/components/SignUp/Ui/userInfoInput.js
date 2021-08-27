import { useState } from "react";


const UserInfoInput = ({ handleContinue }) => {
    const [password, addPassword] = useState("");
    const [name, addName] = useState("");
    const [email, addEmail] = useState("");
    const [phoneNumber, addPhoneNumber] = useState("");

    const inputStyle = "mt-4 align-self-center  d-block border-0 border-bottom border-secondary";


    async function handleFormSubmit(event) {
        event.preventDefault();
        handleContinue({ name, password, email });
    }

    function inputFieldGenerator(value, handler, pattern, label, type) {
        return (
            <div>
                <label className="visually-hidden" id={label}>
                    {label}
                </label>
                <input
                    pattern={pattern}
                    aria-labelledby={label}
                    className={inputStyle}
                    type={type}
                    placeholder={label}
                    value={value}
                    required
                    onChange={(value) => handler(value.target.value)}
                />
            </div>
        );
    }


    return (
        <div className="d-flex flex-column mt-lg-5 pt-lg-5">
            <form onSubmit={handleFormSubmit} className=" ">
                {
                    inputFieldGenerator(
                        name,
                        (value) => {
                            addName(value)
                        },
                        "[a-zA-s0-9 .]{1,}",
                        "Enter your name",
                        "text"
                    )
                }
                {
                    inputFieldGenerator(
                        phoneNumber,
                        (value) => {
                            addPhoneNumber(value)
                        },
                        "[0-9]{10}",
                        "Enter your phone number",
                        "tel"
                    )}
                {
                    inputFieldGenerator(
                        email,
                        (value) => {
                            addEmail(value)
                        },
                        "[a-zA-s0-9 .@-]{1,}",
                        "Enter your emai",
                        "email"
                    )
                }
                {
                    inputFieldGenerator(
                        password,
                        (value) => {
                            addPassword(value)
                        },
                        "[a-zA-s0-9.]{4,}",
                        "Enter your password",
                        "password"
                    )
                }


                <div className=" d-grid ">
                    <input
                        className="btn  mt-4 btn btn-sm  primary-color d-block text-white"
                        type="submit" value="Continue" />

                </div>
            </form>


        </div>
    );
}
export default UserInfoInput;
