import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import AddressSelect from './Ui/Address/addressSelect';
import ItemList from './Ui/itemList';
import LoginHandle from './Ui/loginHandle';
import ProductsDetail from './Ui/orderSummary';
import PaymentOption from './Ui/paymentOption';


const BuyNow = () => {
    const state = useLocation().state;
    const info = useLocation().state.items;
    const qt = useLocation().state.qty;
    const history = useHistory();
    const [selectedAddress, addSelectedAddress] = useState("");
    const [qty, handleQtyChange] = useState([]);
    const [active, changeActiveAccordion] = useState(0);
    const [error, addError] = useState("");

    const user = useSelector(state => state.userReducer.userInfo);
    const userInfo = user.email;
    useEffect(() => {
        userInfo != "" ? changeActiveAccordion(1) : changeActiveAccordion(0);
        handleQtyChange(qt);
    }, [userInfo]);


    function handleNegativeBtn(index) {

        if (qty[index] > 1) {
            handleQtyChange(qty.map((val, ind) =>
                index === ind ? val - 1 : val
            ));
        }

    }

    function handlePositiveBtn(index) {
        handleQtyChange(qty.map((val, ind) =>
            index === ind ? val + 1 : val
        ));

    }

    function handleRemoveBtn(index) {
        if (info.length === 1) {
            history.replace("/");
        } else {
            info.splice(index, 1);
            let newQty = qty.splice(index, 1);
            history.push("/place-order", {
                items: info,
                qty: newQty
            });
        }
    }



    if (state === undefined) {
        history.replace("/");
    }


    function errorHandler(error) {
        addError(error);
    }

    return (
        <Container>
            {
                error === ""
                    ? <div className="d-none"></div>
                    : <p className="text-danger">{error}</p>
            }
            <Row className="mt-5 mb-5">
                <Col md={8} lg={8} className="" >
                    <div className="accordion" id="accordionSprinkle">

                        {
                            userInfo != ""
                                ?
                                <>
                                    <AddressSelect active={active}
                                        changeActive={(param) => {
                                            addSelectedAddress(param);
                                            changeActiveAccordion(2);
                                        }}
                                    />
                                    <ProductsDetail
                                        active={active}
                                        handleNegativeBtn={(index) => handleNegativeBtn(index)}
                                        handlePositiveBtn={(index) => handlePositiveBtn(index)}
                                        handleRemoveBtn={(index) => handleRemoveBtn(index)}
                                        qty={qty}
                                        addressSelected={selectedAddress}
                                        info
                                        errorHandler={(value) => {
                                            errorHandler(value)
                                        }}
                                    />
                                </>
                                :  <LoginHandle
                                 active={active}
                                 errorHandler ={(value)=>errorHandler(value)}
                                 />
                        }

                    </div>
                </Col>
                <Col md={4} lg={4} className="mt-5 mt-md-0">
                    <ItemList qty={qty} items={state.items}
                        addressSelected={selectedAddress}
                        errorHandler={(value) => {
                            errorHandler(value)
                        }}
                    />
                    <PaymentOption />
                </Col>
            </Row>
        </Container>

    );
}
export default BuyNow;