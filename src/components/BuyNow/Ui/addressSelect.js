import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from 'react-bootstrap';
import NewAddressAdd from "./newAddressInput";


const AddressSelect = ({active,changeActive}) => {

    const userInfo = useSelector(state => state.userReducer.userInfo);
    const [addressSelcted, selectAddress] = useState();
    const [show, setShow] = useState(false);


    useEffect(() => {
        selectAddress(userInfo.address[0]);
    }, [userInfo]);


    function formSubmitHandler(e) {
        e.preventDefault();
        changeActive(addressSelcted);
    }

    function addressListGenerate(value) {
        return (
            <Row key={value.addFirstLine} >
                <Col md="1" xs={2} >
                    <input
                        checked={addressSelcted === value}
                        type="radio"
                        id="a"
                        name="address"
                        value={value}
                        onChange={(e) => selectAddress(value)

                        }
                    />
                </Col>
                <Col xs={10}>
                    <label className="d-flex flex-row" >
                        <div>
                            <p className="mb-0">
                                {value.addFirstLine},
                            </p>
                            <p className="mb-0">
                                {value.addSecondLine},
                            </p>
                            <p className="mb-0">
                                {value.city}-{value.postalCode}
                            </p>

                        </div>

                    </label>
                </Col>
            </Row>

        );

    }


    if (userInfo) {
        return (
            <div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className={ active=== 1 ? " accordion-button" : "accordion-button collapsed"}
                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                            aria-expanded={active===1 ? false : true}
                            aria-controls="collapseTwo"

                        >
                            DELIVERY ADDRESS
                        </button>
                    </h2>
                    <div id="collapseTwo"
                     className={active === 1 ? "accordion-collapse show"  : "accordion-collapse collapse" }
                        aria-labelledby="headingTwo" data-bs-parent="#accordionSprinkle"
                    >
                        <div className="accordion-body">


                            <label id="address selection" className="visually-hidden">
                                Select an address
                            </label>
                            <form onSubmit={formSubmitHandler}>
                                {
                                    userInfo.address.map((value) => {
                                        return (
                                            addressListGenerate(value));

                                    })
                                }
                                <input
                                    className="btn mt-4 ps-5 pe-5 btn btn-sm  primary-color d-block text-white"
                                    type="submit" value="DELIVERY HERE" />

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