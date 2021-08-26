import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Loader from 'react-loader-spinner';
import { useDispatch } from "react-redux";
import { loginHandler } from "../../../Data/ApiCalls/Login/login";
import { modalLogin, modalSignIn } from "../../../redux/actions/modalLogin";
import { getProfileInitialData } from "../../../redux/actions/profileAction";


const UserInfoInput = () => {
    const [password, addPassword] = useState("");
    const [email, addEmail] = useState("");
    const [load, changeLoad] = useState(false);
    const inputStyle = "mt-4 align-self-center  d-block border-0 border-bottom border-secondary";
    const dispatch = useDispatch();
    const [errorShow,handleErrorMsg] = useState(false);

    async function handleFormSubmit(event) {
        event.preventDefault();
        handleErrorMsg(false);
        changeLoad(true);
        try{
            
            // const result = await loginHandler(email,password);
             getProfileInitialData()(dispatch);
            modalLogin(false)(dispatch);
        }catch(e){
        handleErrorMsg(true);

        }
        changeLoad();

    }

    function handleSignInBtn() {
        modalLogin(false)(dispatch)
        modalSignIn(true)(dispatch);
    }

    return (
        <div className=" mt-md-5">
            <form onSubmit={handleFormSubmit} className=" mt-md-5">
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
                       <div className=" d-grid me-5 me-md-0">
                            <input
                            className="btn  mt-4  btn-sm  primary-color d-block text-white"
                            type="submit" value="Submit" />
                       </div>
                }
            </form>
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