import { useLocation } from "react-router";
import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import waterBottel from '../../images/waterbottel.png';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/addCartAction";
import { Redirect, useHistory } from "react-router-dom";
import CarryVehicle from "../../images/SVGs/carryVehicle";
import Loader from 'react-loader-spinner';
import { useSelector } from "react-redux";
import Description from "./Ui/description";


const DetailedView = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const stateInfo = useLocation();
    const state = stateInfo.state === undefined ? "" : stateInfo.state.refer;
    const [clicked, setClicked] = React.useState();
    const [show, setShow] = React.useState(false);

    let item = useSelector(state => state.checkoutReducer);
    let items = item.productsAtCart;
    const [itemPresent, changeItemPresent] = useState(false);

    useEffect(() => {
        let present;
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === state.id) {
                present = true;
                break;
            }
        }
        console.log(present);
        changeItemPresent(present);
    }, [item]);



    function handleAddCart() {
        setClicked(0);
        setShow(true);
        addToCart(stateInfo.state.refer)(dispatch);
        setShow(false);
        history.push("/cart");

    }

    function handleBuyNow() {

        setClicked(1);
        history.push({
            pathname: "/place-order",
            state: {
                items: [state],
                qty: [1],
            }
        });
    }



    if (stateInfo.state === undefined) {
        history.replace("/");
    }

    return (
        <Container className="mt-5 mb-5">

            <Row className="border pb-5 justify-content-center ">

                <Description state={state} display={"d-block d-sm-none"} />

                <Col md={6} lg={4} className="mt-lg-4">
                    <img alt="water bottel" src={waterBottel} className="img-fluid" />
                    <Row className=" mt-3">
                        <Col xs={6} className="d-grid" md={6} >
                            {
                                itemPresent ?
                                    <button
                                        className={
                                            show ? "btn btn-secondary disabled"
                                                : "btn warning text-white"
                                        }
                                        onClick={() => history.push("/cart")}>

                                        Added To cart
                                    </button>
                                    : <button
                                        className={
                                            show ? "btn btn-secondary disabled"
                                                : "btn warning text-white"
                                        }
                                        onClick={handleAddCart}>
                                        {
                                            show && clicked === 0 ?
                                                <div>
                                                    <Loader type="Oval" color="#ffffff"
                                                        height={25} width={80}
                                                        className=" text-center" />
                                                    Going to cart
                                                </div>

                                                :
                                                <p className="mb-0">
                                                    Add To cart
                                                </p>
                                        }
                                    </button>
                            }


                        </Col>
                        <Col xs={6} md={6} className="d-grid" >
                            <button
                                className={show ? "btn btn-secondary disabled"
                                    : "btn primary-color text-white"
                                }
                                onClick={handleBuyNow}>
                                {
                                    show && clicked === 1 ? <Loader type="Oval" color="#ffffff"
                                        height={25} width={80}
                                        className=" text-center" />
                                        :
                                        <p className="mb-0">
                                            Buy Now
                                        </p>
                                }

                            </button>
                        </Col>
                    </Row>
                </Col>
                <Description state={state} display={"d-none d-sm-block"} />
            </Row>

        </Container>
    );
}
export default DetailedView;

