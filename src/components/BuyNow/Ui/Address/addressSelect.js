import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NewAddressAdd from "./newAddressInput";
import AddressListGenerate from "./Ui/addressListGenerator";


const AddressSelect = ({ active, changeActive }) => {

    const userInfo = useSelector(state => state.userReducer.userInfo);
    const [selectedAddress, setSelectedAddress] = useState();
    const [show, setShow] = useState(false);


    useEffect(() => {
        changeActive(userInfo.address[0]);
        setSelectedAddress(userInfo.address[0]);
    }, [userInfo]);


    function formSubmitHandler(e) {
        e.preventDefault();
        changeActive(selectedAddress);
    }




    if (userInfo) {
        return (
            <div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className={active === 1 ? " accordion-button" : "accordion-button collapsed"}
                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                            aria-expanded={active === 1 ? false : true}
                            aria-controls="collapseTwo"

                        >
                            DELIVERY ADDRESS
                        </button>
                    </h2>
                    <div id="collapseTwo"
                        className={active === 1 ? "accordion-collapse show" : "accordion-collapse collapse"}
                        aria-labelledby="headingTwo" data-bs-parent="#accordionSprinkle"
                    >
                        <div className="accordion-body">


                            <label id="address selection" className="visually-hidden">
                                Select an address
                            </label>
                            <form onSubmit={formSubmitHandler}>
                                {
                                    userInfo.address.map((value, index) => {
                                        return (
                                            <AddressListGenerate
                                                key={index.toString()}
                                                uniqueKey={index.toString()}
                                                value={value}
                                                selectedAddress={selectedAddress}
                                                handler={
                                                    (value) => {
                                                        setSelectedAddress(value)
                                                    }
                                                }
                                            />

                                        )
                                    })
                                }
                                {/* <input
                                    className="btn mt-4 ps-5 pe-5 btn btn-sm  primary-color d-block text-white"
                                    type="submit" value="DELIVERY HERE" /> */}

                            </form>

                        </div>
                        <button
                            onClick={() => setShow(!show)}
                            className=" btn d-block btn-sm  text-primary ms-3" >
                            +    Add new one
                        </button>


                        <NewAddressAdd show={show} hideHandler={() => setShow(false)} />
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div>

        </div>
    );

}
export default AddressSelect;