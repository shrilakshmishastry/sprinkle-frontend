import { useState } from "react";
import Loader from 'react-loader-spinner';

const UserInfoInput = () => {
    const [password, addPassword] = useState("");
    const [email, addEmail] = useState("");
    const [load, changeLoad] = useState(false);
    const inputStyle = "mt-4 align-self-center  d-block border-0 border-bottom border-secondary";

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("hello");
    }

    return (
        <div className="d-flex flex-column mt-5">
            <form onSubmit={handleFormSubmit} className=" mt-5">
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
                {
                    load ?
                        <Loader type="Oval" color="#4354fd" height={25} width={80} className="mt-4" />
                        :
                       <div className=" d-grid ">
                            <input
                            className="btn  mt-4 ms-3 ps-5 pe-5 btn btn-sm  primary-color d-block text-white"
                            type="submit" value="Submit" />
                       </div>
                }
            </form>
            <div  className="">
                <small className="d-flex  flex-row">
                    <p className="mt-3 ">
                    Don't have an account?
                    </p>
                    <button className="btn primary-text-color">
                        SignIn now
                    </button>
                </small>
            </div>

        </div>
    );
}
export default UserInfoInput;