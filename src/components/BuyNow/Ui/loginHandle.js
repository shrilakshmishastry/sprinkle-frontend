import React from 'react';
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from "react-redux";
import { inputStyle } from '../../../config/BtnConfig/inputStyle';
import { getProfileInitialData } from '../../../redux/actions/profileAction';
// import { loginHandler } from '../../../config/api';

const LoginHandle = ({active}) => {
    const user = useSelector(state => state.userReducer.userInfo.email);
    const emailPattren = "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}";
    const passwordPattren = "[a-zA-Z0-9.-_]{4,}";

    const [email, addEmail] = React.useState("");
    const [password, addPassword] = React.useState("");
    const [load,changeLoad] = React.useState(false);
    const dispatch = useDispatch();

    function handleLogin(target) {
        target.preventDefault();
        changeLoad(true);
        // try{
        //     // const result = loginHandler(email,password);
        // }catch(e){

        // }

        getProfileInitialData()(dispatch);
       changeLoad(false);
    }

    function handleSignUpBtn(){
        console.log("signup");
    }

    return (

        <div className="accordion-item">
            <h2 className="accordion-header" id="panelStayOpen-headingOne">
                {
                    active === 0 || user ==="" ?
                        <button className="accordion-button"
                            data-bs-toggle="collapse" data-bs-target="#panelStayOpen-collapseOne"
                            aria-expanded="true" aria-controls="panelStayOpen-collpaseOne"
                        >
                           LOGIN
                        </button>
                        : <div className="ps-4 pt-3 pb-3">
                            <p className="h6 primary-text-color  fw-normal">
                              LOGIN
                            </p>
                        </div>
                }

            </h2>
            <div id="panelStayOpen-collapseOne"
                className={active === 0 || user ==="" ? "accordion-collapse collapse show" : "d-none"}
                aria-labelledby="panelStayOpen-headingOne"
                data-bs-parent="#accordionSprinkle"
            >
                <div className="accordion-body">

                    <form
                        onSubmit={handleLogin}
                        className="">
                        <label className="visually-hidden" id="email" >
                            Email
                        </label>
                        <input aria-labelledby="email"
                            type="email"
                            pattern={emailPattren}
                            placeholder="Enter Email"
                            value={email}
                            className={inputStyle.inputStyleLogin}
                            onChange={(value) => {
                                addEmail(value.target.value)
                            }}
                            required
                        />


                        <label className="visually-hidden" id="password" >
                            Password
                        </label>
                        <input aria-labelledby="password"
                            type="password"
                            pattern={passwordPattren}
                            placeholder="Enter Password"
                            value={password}
                            className={inputStyle.inputStyleLogin}
                            onChange={(value) => {
                                addPassword(value.target.value)
                            }}
                            required
                        />
                        {
                            load ?
                            <Loader type="Oval" color="#4354fd" height={25} width={80}  className="mt-4" />
                            :
                            <input
                            className="btn mt-4 ps-5 pe-5 btn btn-sm  primary-color d-block text-white"
                            type="submit" value="Submit" />
                        }

                    </form>
                    <p className="text-secondary small">
                        Don't have an account
                        <span >
                            <button onClick={handleSignUpBtn}
                             className="small btn btn-sm primary-text-color" >
                                Signup Now
                            </button>

                        </span>
                    </p>
                </div>
            </div>
        </div>


    );
}
export default LoginHandle;