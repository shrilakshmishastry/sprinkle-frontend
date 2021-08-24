import { useState } from "react";
import { buyNowContent } from "../../../Data/BuyNow/content";
import Loader from 'react-loader-spinner';

const NewAddressAdd = ({ show, hideHandler }) => {
    console.log(show);
    const [addFirstLine, addAddFirstLine] = useState("");
    const inputStyle = "mt-4 align-self-center  d-block border-0 border-bottom border-secondary";
    const [addSecondLine, addAddSecondLine] = useState("");
    const [city, addCity] = useState("");
    const [state, addState] = useState("");
    const [postalCode, addPostalCode] = useState("");
    // const postalPattern = "[1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3}";
    const addressPattern = "[a-zA-Z0-9.-_]{4,}";
    const [load, changeLoad] = useState(false);

    console.log(show);

    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(e);
    }

    function inputGenerator(label, stateValue, handle) {
        return (
            <div key={label} className="mt-3 d-flex justify-content-start">
                <label className="visually-hidden" id="AddFirstLine">
                    {label}
                </label>
                <input
                    value={stateValue}
                    onChange={(e) => handle(e.target.value)}
                    type="text"
                    placeholder={label}
                    pattern={addressPattern}
                    required
                    className={inputStyle}
                />
            </div>
        );
    }

    return (
        <div className={show ?
        "border ps-md-5 pb-5 pe-md-5"
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
                        }
                    )

                }
                {
                    inputGenerator(
                        buyNowContent.newAddress[1],
                        addSecondLine,
                        (value) => {
                            addAddSecondLine(value);
                        }
                    )

                }
                <div className="d-flex flex-row justify-content-between" >
                {
                    inputGenerator(
                        buyNowContent.newAddress[2],
                        city,
                        (value) => {
                            addCity(value);
                        }
                    )

                }
                 <div  className="mt-3 d-flex justify-content-start">
                 <label className="visually-hidden" id="AddPostalCode">
                    Postal Code
                </label>
                <input
                aria-labelledby="AddPostalCode"
                    value={postalCode}
                    onChange={(e) => addPostalCode(e.target.value)}
                    type="number"
                    placeholder={"Enter postal code"}
                    pattern={"[0-9]{6}"}
                    required
                    className={`${inputStyle} ms-4`}
                />
                 </div>


                </div>

                {
                    inputGenerator(
                        buyNowContent.newAddress[4],
                        state,
                        (value) => {
                            addState(value);
                        }
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