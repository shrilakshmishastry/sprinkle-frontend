import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import waterBottel from '../../images/waterbottel.png';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/addCartAction";
import { useHistory } from "react-router-dom";
import Loader from 'react-loader-spinner';
import { useSelector } from "react-redux";
import Description from "./Ui/description";
import classNames from 'classnames';
import Cancel from '../../images/SVGs/cancel';
import { modalDetailView } from '../../redux/actions/modalLogin';


const DetailedView = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const state = useSelector(state => state.modalDetailViewReducer.content);
    const [clicked, setClicked] = React.useState();
    const [show, setShow] = React.useState(false);

    // in order to check whether item is in  cart
    let item = useSelector(state => state.checkoutReducer);
    let items = item.productsAtCart;
    const [itemPresent, changeItemPresent] = useState(false);

    const inActiveBtn = "btn  btn-secondary disabled";
    const activeBuyNowBtn = "btn primary-color text-white";
    const activeAddToCartBtn = "btn warning text-white";

    const addToCartBtnStyle = classNames({
        [activeAddToCartBtn]: !show,
        [inActiveBtn]: show
    });

    const buyNowBtnStyle = classNames({
        [activeBuyNowBtn]: !show,
        [inActiveBtn]: show
    });



    useEffect(() => {
        let present;
        for (let i = 0; i < items.length; i++) {
            if (items[i].sku === state.sku) {
                present = true;
                break;
            }
        }
        changeItemPresent(present);
    }, [item]);



    function handleAddCart() {
        setClicked(0);
        setShow(true);
        addToCart(state)(dispatch);
        setShow(false);
        modalDetailView(false, {})(dispatch);
        history.replace("/cart");

    }

    function handleBuyNow() {
        setClicked(1);
        modalDetailView(false, {})(dispatch);
        history.push({
            pathname: "/place-order",
            state: {
                items: [state],
                qty: [1],
                from:"detailedView"
            }
        });
    }

    function handleModal() {
        modalDetailView(false, {})(dispatch);
    }

    function handleAddedToCart(){
        modalDetailView(false, {})(dispatch);
        history.push("/cart")
    }




    return (
        <Container className="pb-5 pt-3">
            <Row >
                <Col md={4} lg={6} className="">
                </Col>
                <Col md={6} lg={{ span: 4, offset: 1 }}>

                </Col>
                <Col md={2} lg={1} className="text-end ">
                    <button onClick={handleModal} className="btn fw-bold ">
                        <Cancel />
                    </button>
                </Col>

            </Row>

            <Row className="border ms-lg-3 me-lg-3 justify-content-center ">

                <Description state={state} display={"d-block d-sm-none"} />

                <Col md={6} lg={4} className="mt-lg-4 pt-lg-5">

                    <img alt="water bottel" src={waterBottel} className="img-fluid" />


                    <div className="d-flex flex-row justify-content-between">
                        {
                            itemPresent ?
                                <button
                                    className={ addToCartBtnStyle}
                                    onClick={handleAddedToCart}>
                                        <small>
                                        Added To cart
                                        </small>

                                </button>
                                : <button
                                    className={addToCartBtnStyle}
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
                        <button
                            className={buyNowBtnStyle}
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

                    </div>



                </Col>

                <Description state={state} display={"d-none d-sm-block"} />
            </Row>

        </Container>
    );
}
export default DetailedView;

