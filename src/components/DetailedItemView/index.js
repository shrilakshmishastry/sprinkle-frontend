import { useLocation } from "react-router";
import React from 'react';
import { Row, Col, Container, Alert } from 'react-bootstrap';
import waterBottel from '../../images/waterbottel.png';
import { useDispatch} from "react-redux";
import { addToCart } from "../../redux/actions/addCartAction";
import { cartActionTypeCreator, CART_ACTION } from "../../redux/action-type";
import { Redirect, useHistory } from "react-router-dom";


const DetailedView = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const stateInfo = useLocation();
    const state = stateInfo === undefined ? "" : stateInfo.state.refer;
    const [show, setShow] = React.useState(false);
    const [content, addContent] = React.useState("");
    const [colorAlert, changeColor] = React.useState("success");

    // const disabledBtn = "ps-5 pe-5 disabled bg-secondary btn  text-white";
    // const activeBtn = "ps-5 pe-5 btn btn-primary";

    // function handleNegativeBtn() {
    //     console.log("negative");
    //     if (qty === 1) {
    //         handleQtyChange(1);
    //     }
    //     handleQtyChange(qty - 1);
    // }

    function handleAddCart() {
        changeColor("success");
        dispatch(addToCart(stateInfo.state.refer, cartActionTypeCreator(CART_ACTION).add));
        addContent("Item added to cart!");
        setShow(true);
    }

    function handleBuyNow() {
        history.push("/place-order",state);
    }

    // function handlePositiveBtn() {
    //     handleQtyChange(qty + 1);

    // }


    function description(display) {
        const style = display+" " + "rounded ms-lg-5 ps-lg-3 pe-lg-3 mt-3 mt-lg-5 pt-5 pb-5";
        return (
            <Col md={6} lg={4} className={style}>

                <h5 className="mb-lg-0" >
                    Pack of {state.qty} bottles,
                    consists of {state.pack_of} bottles
                </h5>
                <p className="mt-3 h6 text-primary">
                    ₹{state.price} &nbsp; per pack
                </p>
                <p className="small">
                    Per bottel &nbsp; ₹ {state.per_bottel_price}
                </p>


                {
                    stateInfo.state.refer.tag === "out of stock" ?
                        <p className="text-danger  small">
                            Currently unavialable
                        </p>
                        :
                        <p className="text-secondary  small">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-truck me-3" viewBox="0 0 16 16">
                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
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
            {
                show ?
                    <Alert variant={colorAlert} >
                        <div className="ps-5 d-flex flex-row justify-content-between">
                            <p className="pt-2">
                                {content}
                            </p>
                            <button onClick={() => setShow(false)} className="btn fw-bold text-success">
                                X
                            </button>
                        </div>

                    </Alert>
                    : <div></div>
            }

            <Row className="border pb-5 justify-content-center ">
                {
                    description("d-block d-sm-none")
                }

                <Col md={6} lg={4} className="mt-lg-4">
                    <img alt="water bottel" src={waterBottel} className="img-fluid" />
                    <Row className=" mt-3">
                        <Col xs={6} className="d-grid" md={6} >
                            <button className="btn warning text-white" onClick={handleAddCart}>
                                Add To cart
                            </button>

                        </Col>
                        <Col xs={6} md={6} className="d-grid" >
                            <button className="btn primary-color text-white" onClick={handleBuyNow}>
                                Buy Now
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

