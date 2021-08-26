import { useState } from "react";
import { buyNowContent } from "../../../Data/BuyNow/content";
import Loader from 'react-loader-spinner';
import { useDispatch } from "react-redux";
import { addNewAddress } from "../../../redux/actions/profileAction";

const NewAddressAdd = ({ show, hideHandler }) => {

    const [addFirstLine, addAddFirstLine] = useState("");
    const inputStyle = "mt-4 align-self-center  d-block border-0 border-bottom border-secondary";
    const [addSecondLine, addAddSecondLine] = useState("");
    const [city, addCity] = useState("");
    const [state, addState] = useState("");
    const [postalCode, addPostalCode] = useState("");
    const postalPattern = "[1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3}";
    const addressPattern = "^[#.0-9a-zA-Z\s,-]+$";
    const [load, changeLoad] = useState(false);
    const dispatch = useDispatch();


    function handleFormSubmit(e) {
        e.preventDefault();
        const address = {
            "addFirstLine": addFirstLine,
            "addSecondLine":addSecondLine,
            "city" : city,
            "state" :state,
            "postalCode":postalCode
        };
        addNewAddress(address)(dispatch);
        hideHandler();
    }

    function inputGenerator(
        label,
         stateValue,
         handle,
         type,
         pattern
        ) {
        return (
            <div key={label} className="mt-3 d-flex justify-content-start">
                <label className="visually-hidden" id="AddFirstLine">
                    {label}
                </label>
                <input
                    value={stateValue}
                    onChange={(e) => handle(e.target.value)}
                    type={type}
                    placeholder={label}
                    pattern={pattern}
                    required
                    className={inputStyle}
                />
            </div>
        );
    }

    return (
        <div className={show ?
        "border ps-md-5 pb-5 mt-3 pe-md-5"
        : "d-none"}>
            <div className="d-flex justify-content-end">
                <button className="btn fw-bold" onClick={hideHandler} >
                    x
                </button>
            </div>

            <form onSubmit={handleFormSubmit}>
                {
                    inputGenerator(
                        buyNowContent.newAddress[0],
                        addFirstLine,
                        (value) => {
                            addAddFirstLine(value);
                        },
                        "text",
                        addressPattern
                    )

                }
                {
                    inputGenerator(
                        buyNowContent.newAddress[1],
                        addSecondLine,
                        (value) => {
                            addAddSecondLine(value);
                        },
                        "text",
                        addressPattern
                    )

                }
                {
                    inputGenerator(
                        buyNowContent.newAddress[2],
                        city,
                        (value) => {
                            addCity(value);
                        },
                        "text",
                        addressPattern
                    )

                }
                 {
                    inputGenerator(
                        buyNowContent.newAddress[3],
                        postalCode,
                        (value) => {
                            addPostalCode(value);
                        },
                        "number",
                        postalPattern
                    )

                }
                {
                    inputGenerator(
                        buyNowContent.newAddress[4],
                        state,
                        (value) => {
                            addState(value);
                        },
                        "text",
                        addressPattern
                    )

                }
                {
                    load ?
                        <Loader type="Oval" color="#4354fd" height={25} width={80} className="mt-4" />
                        :
                        <input
                            className="btn mt-4 ps-5 pe-5 btn btn-sm  primary-color d-block text-white"
                            type="submit" value="Submit" />
                }

            </form>
        </div>
    );
}
export default NewAddressAdd;