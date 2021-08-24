import { useLocation } from "react-router";
import React, { useEffect } from 'react';
import { Row, Col, Container, Alert } from 'react-bootstrap';
import waterBottel from '../../images/waterbottel.png';
import { useDispatch} from "react-redux";
import { addToCart } from "../../redux/actions/addCartAction";
import { cartActionTypeCreator, CART_ACTION } from "../../redux/action-type";
import { Redirect, useHistory } from "react-router-dom";
import CarryVehicle from "../../Data/BuyNow/SVGs/carryVehicle";


const DetailedView = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const stateInfo = useLocation();
    const state = stateInfo === undefined ? "" : stateInfo.state.refer;
    const [show, setShow] = React.useState(false);
    const [content, addContent] = React.useState("");
    const [colorAlert, changeColor] = React.useState("success");



    function handleAddCart() {
        changeColor("success");
        dispatch(addToCart(stateInfo.state.refer, cartActionTypeCreator(CART_ACTION).add));
        addContent("Item added to cart!");
        setShow(true);
    }

    function handleBuyNow() {
        history.push("/place-order",[state]);
    }




    function description(display) {
        const style = display+" " + "rounded ms-lg-5 ps-lg-3 pe-lg-3 mt-3 mt-lg-5 pt-5 pb-5";
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
                           <CarryVehicle/>
                            Expect delivery within a day.
                        </p>
                }

            </Col>
        );
    }



    if (stateInfo.state === undefined ) {
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

