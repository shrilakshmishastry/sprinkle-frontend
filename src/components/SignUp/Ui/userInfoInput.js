import { useState } from "react";


const UserInfoInput = ({handleContinue}) => {
    const [password, addPassword] = useState("");
    const [name,addName] = useState("");
    const [email, addEmail] = useState("");

    const inputStyle = "mt-4 align-self-center  d-block border-0 border-bottom border-secondary";


    async function handleFormSubmit(event) {
        event.preventDefault();


    }



    return (
        <div className="d-flex flex-column ">
            <form onSubmit={handleFormSubmit} className=" ">
            <input
                    className={inputStyle}
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    required
                    onChange={(value) => addName(value.target.value)}
                />
                <input
                    className={inputStyle}
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    required
                    onChange={(value) => addEmail(value.target.value)}
                />
                <input
                    className={inputStyle}
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    required
                    onChange={(value) => addPassword(value.target.value)}
                />
                <div className=" d-grid ">
                    <input
                    onClick={()=>handleContinue({name,password,email})}
                        className="btn  mt-4 btn btn-sm  primary-color d-block text-white"
                        type="submit" value="Continue" />

                </div>
            </form>


        </div>
    );
}
export default UserInfoInput;
