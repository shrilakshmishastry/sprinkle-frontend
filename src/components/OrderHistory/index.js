import { useEffect, useState } from "react";
import { Col, Container, ListGroup, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import getOrderHistory from "../../Data/ApiCalls/OrderSummary/getOrderHistory";
import removeOrder from "../../Data/ApiCalls/PlaceAnOrder/removeOrder";
import CarryVehicle from "../../images/SVGs/carryVehicle";
import waterBottel from '../../images/waterbottel.png';
import Loader from 'react-loader-spinner';
import { Redirect, useHistory } from "react-router-dom";

const OrderHistory = () => {
    const [show, setShow] = useState(false);
    const user = useSelector(state => state.userReducer.userInfo);
    const [data, addData] = useState([]);
    const [load,setLoad] = useState(false);
    const history = useHistory();
    useEffect(async () => {
        let result = await getOrderHistory(user);
        addData(result.data);

    }, []);

    async function handleCancel() {
        setLoad(true);
        setShow(false);
        try{
        //     const result = await removeOrder();
            let res = await getOrderHistory(user);
            addData(res.data);

        }catch(e){

        }
        setLoad(false);
        history.replace("/order-history");
    }
    if(user.email === ""){
        history.replace("/");
    }

    return (
        <Container className="mt-5 mb-5">
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header >
                    <Modal.Title>
                        <p className="h6">Confirm Order Cancel</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        Are you sure, you want to cancel order?
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                        onClick={()=>setShow(false)}
                        className="btn primary-text-color">
                            close
                        </button>
                        <button
                        onClick={handleCancel}
                        className="btn text-danger">
                            Yes
                        </button>
                    </Modal.Footer>
            </Modal>
            <Row className="justify-content-center">
                <Col md={12} lg={10} xs={10}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h5>
                                Order Summary
                            </h5>
                        </ListGroup.Item>
                        {data.length > 0 &&
                            data.map((val) => {
                                return (
                                    <ListGroup.Item key={val.order_id}>
                                        <Row className="">
                                            <Col className=" mt-3" md={2}>
                                                <img alt="water bottel" src={waterBottel} className=" img-fluid" />
                                            </Col>
                                            <Col className=" mt-5 mt-md-0" md={6}>
                                                <h6 className="mb-lg-0" >
                                                    Pack of {val.qty} bottles,
                                                    consists of {val.pack_of} bottles
                                                </h6>
                                                <p className="mt-3 h6 ">
                                                    ₹{val.price}  per pack
                                                </p>
                                                <p className="small">
                                                    Per bottel  ₹ {val.per_bottel_price}
                                                </p>
                                                <p className="">
                                                    Total ₹ {val.price * val.orderedQty}
                                                </p>
                                            </Col>
                                            <Col className=" mt-4" md={4}>
                                                <h6
                                                    className={val.tag === "Canceled" ? "text-danger" : "primary-text-color"}>
                                                    <CarryVehicle />
                                                    {val.tag}
                                                </h6>
                                                {
                                                    val.tag === "Canceled" ? <span></span>
                                                        :
                                                        <p className="small" >
                                                            on
                                                            <span className="ms-3">
                                                                {val.DeliveryDate}
                                                            </span>
                                                        </p>
                                                }{
                                                    val.tag === "Delivery"
                                                        ?
                                                         load
                                                          ?
                                                        <Loader type="Oval" color="#4354fd"
                                                        height={25} width={80}
                                                        className=" text-center" />
                                                        :
                                                        <button
                                                            onClick={() => setShow(true)}
                                                            className=" btn d-block ps-0  text-danger" >
                                                            REMOVE
                                                        </button>
                                                        : <span></span>
                                                }
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                );
                            })
                        }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}
export default OrderHistory;