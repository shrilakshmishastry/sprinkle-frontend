import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import waterBottel from '../../images/waterbottel.png';
import PaymentOption from '../BuyNow/Ui/paymentOption';
import { useHistory } from 'react-router-dom';
import { removeFromCart, updateCart } from '../../redux/actions/addCartAction';
import SadEmoji from '../../images/SVGs/sadEmoji';
import RightArrow from '../../images/SVGs/rightArrow';
import ListViewCart from './listViewCart';

const Cart = () => {

    const [qty, handleQtyChange] = useState([]);
    const disabledBtn = " ps-lg-4 pe-lg-4 ps-4 pe-4 pe-md-3 ps-md-2 disabled bg-secondary btn  text-white";
    const activeBtn = "ps-lg-4 pe-lg-4 ps-4 pe-4 pe-md-3 ps-md-2 btn btn-primary";
    const [show, setShow] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();



    let item = useSelector(state => state.checkoutReducer);
    let items = item.productsAtCart;
    useEffect(() => {

        handleQtyChange(item.qty);
    }, [items]);

    function handleNegativeBtn(index) {
        console.log(qty[index]);
        if (qty[index] > 1) {
            handleQtyChange(qty.map((val, ind) =>
                index === ind ? val - 1 : val
            ));
            updateCart(items[index], qty[index] - 1)(dispatch);
        }
    }

    function handlePositiveBtn(index) {
        handleQtyChange(qty.map((val, ind) =>
            index === ind ? val + 1 : val
        ));
        updateCart(items[index], qty[index] + 1)(dispatch);
    }

    function handleRemove(index) {
        // console.log(index);
        if (items.length === 1) {
            items.splice(index, 1)
            qty.splice(index, 1);


            removeFromCart(items, qty)(dispatch);
            history.goBack();
        } else {
            items.splice(index, 1)
            qty.splice(index, 1);
            removeFromCart(items, qty)(dispatch);
        }
    }

    function handleOrderNowRedirection() {
        setShow(true);
        history.push("/place-order", {
            items: items,
            qty: qty
        });
    }


    function handleRedirect() {
        history.push("/products");
    }

    if (items.length === 0) {
        return (
            <Container className="mb-5 text-center mt-3 pt-lg-5 pb-5 ">
                <Row className=" pt-5">
                    <h3 className="text-center primary-text-color" >
                        Cart
                    </h3>
                </Row>
                <p className=" mt-3 text-secondary">
                    <SadEmoji />
                    No Items in the cart
                </p>
                <button onClick={handleRedirect} className="btn btn-primary rounded ps-5 mt-3 mt-lg-4 pe-5">
                    Shop Now
                    <RightArrow />
                </button>
            </Container >
        );
    }

    return (
        <Container>
            <Row className="mt-5 mb-5">
                <Col md={8} lg={8} className="" >
                    <ListGroup>
                        <ListGroup.Item className="d-flex flex-row justify-content-between">
                            <h5>
                                My Cart
                                <span className="ms-3">
                                    ({items.length})
                                </span>
                            </h5>
                            <button
                                onClick={handleOrderNowRedirection}
                                className="btn primary-color text-white">
                                ORDER NOW
                            </button>
                        </ListGroup.Item>
                        {
                            items.map((val, index) => {

                                return (
                                    <ListGroup.Item key={val.id}>
                                        <Row  >
                                            <Col md={5} lg={4} className="">
                                                <img alt="water bottel" src={waterBottel} className="img-fluid" />
                                                <Row className=" pt-3 text-center  ">
                                                    <Col md={4} xs={4} >
                                                        <button className={qty[index] <= 1 || show ? disabledBtn : activeBtn}
                                                            onClick={() => handleNegativeBtn(index)}>
                                                            -
                                                        </button>

                                                    </Col>
                                                    <Col md={4} xs={4} >
                                                        <p className="pt-2">{qty[index]}</p>
                                                    </Col>
                                                    <Col md={4} xs={4} >
                                                        <button className={val.stock || show ? disabledBtn : activeBtn}
                                                            onClick={() => handlePositiveBtn(index)}>
                                                            +
                                                        </button>
                                                    </Col>
                                                </Row>

                                            </Col>
                                            <Col md={7} lg={{ span: 7, offset: 1 }} className="ps-lg-5 mt-4">
                                                <h6 className="mb-lg-0" >
                                                    Pack of {val.qty} bottles,
                                                    consists of {val.pack_of} bottles
                                                </h6>
                                                <p className="mt-3 h6 text-primary">
                                                    ₹{val.price}  per pack
                                                </p>
                                                <p className="small">
                                                    Per bottel  ₹ {val.per_bottel_price}
                                                </p>
                                                <p className="primary-text-color">
                                                    Total ₹ {val.price * qty[index]}
                                                </p>
                                                {
                                                    show
                                                        ? <div></div>
                                                        : <button
                                                            onClick={() => handleRemove(index)}
                                                            className=" btn d-block ps-0 text-danger" >
                                                            REMOVE
                                                        </button>
                                                }

                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )
                            })
                        }
                    </ListGroup>
                </Col>
                <Col md={4} lg={4} className="mt-5 mt-md-0">
                    <ListViewCart qty={qty} items={items} />
                    <PaymentOption />
                </Col>
            </Row>
        </Container>
    );
};
export default Cart;