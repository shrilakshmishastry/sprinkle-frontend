import { useLocation } from "react-router";
import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Alert } from 'react-bootstrap';
import waterBottel from '../../images/waterbottel.png';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/addCartAction";
import { Redirect, useHistory } from "react-router-dom";
import CarryVehicle from "../../Data/SVGs/carryVehicle";
import Loader from 'react-loader-spinner';
import { useSelector } from "react-redux";


const DetailedView = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const stateInfo = useLocation();
    const state = stateInfo === undefined ? "" : stateInfo.state.refer;
    const [clicked, setClicked] = React.useState();
    const [show, setShow] = React.useState(false);

    let item = useSelector(state => state.checkoutReducer);
    let items = item.productsAtCart;
    const [itemPresent, changeItemPresent] = useState(false);

    useEffect(() => {
        let present;
        for(let i=0;i<items.length;i++){
            if(items[i].id===state.id){
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
        history.push( {
            pathname: "/place-order",
            state:{
                items: [state],
                qty:[1],
            }
        });
    }




    function description(display) {
        const style = display + " " + "rounded ms-lg-5 ps-lg-3 pe-lg-3 mt-3 mt-lg-5 pt-5 pb-5";
        return (
            <Col md={6} lg={4} className={style}>

                <h5 className="mb-lg-0" >
                    Pack of {state.qty} bottles,
                    consists of {state.pack_of} bottles
                </h5>
                <p className="mt-3 h6 text-primary">
                    ₹{state.price}  per pack
                </p>
                <p className="small">
                    Per bottel  ₹ {state.per_bottel_price}
                </p>


                {
                    stateInfo.state.refer.tag === "out of stock" ?
                        <p className="text-danger  small">
                            Currently unavialable
                        </p>
                        :
                        <p className="text-secondary  small">
                            <CarryVehicle />
                            Expect delivery within a day.
                        </p>
                }

            </Col>
        );
    }



    if (stateInfo.state === undefined) {
        return <Redirect to="/" />
    }
    return (
        <Container className="mt-5 mb-5">

            <Row className="border pb-5 justify-content-center ">
                {
                    description("d-block d-sm-none")
                }

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
                                            show && clicked === 0 ? <Loader type="Oval" color="#ffffff"
                                                height={25} width={80}
                                                className=" text-center" />
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
                {
                    description("d-none d-sm-block")
                }
            </Row>

        </Container>
    );
}
export default DetailedView;

