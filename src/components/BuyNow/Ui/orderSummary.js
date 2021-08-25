import { Col, Row } from "react-bootstrap"
import { useLocation } from "react-router-dom";
import waterBottel from '../../../images/waterbottel.png';
import Loader from 'react-loader-spinner';
import { useState } from "react";
import { useSelector } from "react-redux";

const ProductsDetail = ({
    handlePositiveBtn,
    handleNegativeBtn,
    handleRemoveBtn,
    qty,
    active,
    addressSelected
}
) => {
    let info = useLocation().state.items;
    let user = useSelector(state=>state.userReducer.userInfo);
    const [show, setShow] = useState(false);

    function placeAnOrder() {
        let queryObj = {
            items: info,
            addressToDelivey : addressSelected,
            userInfo  : user
        };
        setShow(true);
        console.log(queryObj);
        console.log("place an order");
    }



    const disabledBtn = " ps-lg-4 pe-lg-4 ps-4 pe-4 pe-md-3 ps-md-2 disabled bg-secondary btn  text-white";
    const activeBtn = "ps-lg-4 pe-lg-4 ps-4 pe-4 pe-md-3 ps-md-2 btn btn-primary";



    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button
                    className={active === 2 ? " accordion-button " : "accordion-button collapsed"}
                    data-bs-toggle="collapse" data-bs-target="#collapseThree"
                    aria-expanded={active === 2 ? false : true}
                    aria-controls="collapseThree"

                >
                    ORDER SUMMARY
                </button>
            </h2>
            <div id="collapseThree"
                className={active === 2 ? "accordion-collapse show" : "accordion-collapse collapse"}
                aria-labelledby="headingThree" data-bs-parent="#accordionSprinkle"
            >
                <div className="accordion-body ">
                    {
                        info.map((val, index) => {
                            return (
                                <Row key={val.id} >
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
                                                <button className={info.stock === qty[index]  || show? disabledBtn : activeBtn}
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
                                                    onClick={() => handleRemoveBtn(index)}
                                                    className=" btn d-block ps-0 text-primary text-danger" >
                                                    REMOVE
                                                </button>
                                        }

                                    </Col>
                                </Row>
                            );
                        })
                    }
                </div>
                {
                    show
                        ?
                        <Loader type="Oval" color="#4354fd"
                            height={25} width={80}
                            className="mt-4 text-center" />
                        :
                        <div className=" d-grid">
                            <button
                                onClick={placeAnOrder}
                                className=" btn btn-sm primary-color text-white" >
                                PLACE AN ORDER
                            </button>
                        </div>
                }

            </div>

        </div>
    );

}
export default ProductsDetail;