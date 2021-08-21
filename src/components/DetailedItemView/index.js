import { useLocation } from "react-router";
import React from 'react';
import { Row, Col, Container, Card, Alert } from 'react-bootstrap';
import waterBottel from '../../images/waterbottel.png';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/addCartAction";
import { cartActionTypeCreator, CART_ACTION } from "../../redux/action-type";
import { Redirect, useHistory } from "react-router-dom";


const DetailedView = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const stateInfo = useLocation();
    const [qty, handleQtyChange] = React.useState(1);
    const [show, setShow] = React.useState(false);
    const [content, addContent] = React.useState("");
    const [colorAlert, changeColor] = React.useState("success");
    const cardInnerColor = "ps-3 pe-3 pt-3 secondary-color    d-flex flex-row justify-content-between";
    const disabledBtn = "ps-5 pe-5 disabled bg-secondary btn  text-white";
    const activeBtn = "ps-5 pe-5 btn btn-primary";

    let name = useSelector(state => state.userReducer.userInfo.name);


    function handleNegativeBtn() {
        console.log("negative");
        if (qty === 1) {
            handleQtyChange(1);
        }
        handleQtyChange(qty - 1);
    }

    function handleAddCart() {
        changeColor("success");
        dispatch(addToCart(stateInfo.state.refer, cartActionTypeCreator(CART_ACTION).add));
        addContent("Item added to cart!");
        setShow(true);
    }

    function handleBuyNow() {
        if (name === "") {
            changeColor("danger");
            addContent("Login required to place an order.");
            setShow(true);
        } else {
            history.push("/cart");
        }
    }

    function handlePositiveBtn() {
        handleQtyChange(qty + 1);

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

            <Row className=" justify-content-center">
                <Col md={6}  lg={4} className="mt-lg-4">
                    <img alt="water bottel" src={waterBottel} className="img-fluid" />
                    <Row className="border pt-3 text-center">
                        <Col>
                        <button className={qty === 1 ? disabledBtn : activeBtn}
                            onClick={handleNegativeBtn}>
                            -
                        </button>


                        </Col>
                        <Col  className="">
                        <p className="mt-2 ">{qty}</p>
                        </Col>
                        <Col>
                        <button className={stateInfo.stock === qty ? disabledBtn : activeBtn}
                            onClick={handlePositiveBtn}>
                            +
                        </button>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} className="rounded ms-lg-5 ps-lg-3 pe-lg-3 pt-5 pb-5 mt-4 mt-md-0 mt-lg-4  secondary-color">
                    <div className="d-flex flex-lg-row flex-column justify-content-between">
                        <p className="mb-lg-0" >
                            Pack of {stateInfo.state.refer.qty} bottles
                        </p>

                        <p>
                            Consist of {stateInfo.state.refer.pack_of} bottles
                        </p>
                    </div>

                    <Card className=" shadow-sm mt-3">
                        <Card.Body  >
                            <div className={cardInnerColor}>
                                <p>
                                    Price
                                </p>
                                <p>
                                    ₹ {stateInfo.state.refer.price} x{qty}
                                </p>
                            </div>
                            <div className={cardInnerColor}  >
                                <p>
                                    Total
                                </p>
                                <p>
                                    ₹ {stateInfo.state.refer.price * qty}
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                    {
                        stateInfo.state.refer.tag === "out of stock" ?
                            <p className="text-secondary ps-3 small">
                                Currently unavialable
                            </p>
                            :
                            <p className="text-secondary ps-3 small">
                                Expect delivery within a day.
                            </p>
                    }

                </Col>
            </Row>
            <Row className="mt-5 pt-lg-5 d-flex flex-row justify-content-center">
                <Col xs={6} className="d-grid" md={4} >
                    <button className="btn warning text-white" onClick={handleAddCart}>
                        Add To cart
                    </button>

                </Col>
                <Col xs={6} md={4} className="d-grid">
                    <button className="btn primary-color text-white" onClick={handleBuyNow}>
                        Buy Now
                    </button>
                </Col>
            </Row>
        </Container>
    );
}
export default DetailedView;

