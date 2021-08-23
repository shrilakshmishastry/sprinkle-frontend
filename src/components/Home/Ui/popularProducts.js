import { Row, Col, Card } from "react-bootstrap"
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import waterBottel from '../../../images/waterbottel.png';

const PopularProducts = () => {
    let popularProducts = useSelector(state => state.homeReducer.productsInHomePage);
    const history = useHistory();

    function detailViewRedirector(refer) {
        history.push("/item-details", {
            refer
        });
    }

    if (!popularProducts.length > 0) {
        return (
            <div className="text-center mt-3 pt-lg-5 pb-5 light-variant">
                <Row className=" pt-5">
                    <h3 className="text-center primary-text-color" >
                        Popular Products
                    </h3>
                </Row>
                <p className=" mt-5 text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-emoji-frown me-3" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                    </svg>
                    No Items Found
                </p>
            </div>
        );
    }
    return (
        <div className="mt-3 pt-lg-5 pb-5 light-variant">
            <Row className=" pt-5">
                <h3 className="text-center primary-text-color" >
                    Popular Products
                </h3>
            </Row>
            <Row className="justify-content-center mt-3 ps-3 pe-3">
                <Col lg={8} >
                    <p className="text-center text-secondary small">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea aut neque odit ad nam similique quidem veritatis quia numquam nobis.
                    </p>
                    {/* <Dropdown.Divider className="mt-5 bg-primary " /> */}
                </Col>

            </Row>

            <Row className="justify-content-center mt-3 ps-4 pe-4">
                <Col lg={9} md={12}>
                    <Row className="justify-content-center">
                        {
                            popularProducts && popularProducts.length > 0 &&
                            popularProducts.map((item) => {
                                return (
                                    <Col key={item.id.toString()} lg={3} md={4} xs={6}
                                        className="mt-5 pe-lg-3 ps-lg-3 ">
                                        <Card onClick={() => detailViewRedirector(item)} className="pt-3 secondary-color border-0 shadow-sm rounded">
                                            <Card.Img src={waterBottel} className="img-fluid" alt={item.qty} />
                                            <Card.Footer className=" bg-white ">
                                                <span className="d-flex flex-row justify-content-between">
                                                    <p className="mb-0" >{item.qty}</p>
                                                    <p className="mb-0 fw-bold warning-text-color " >₹ {item.price}</p>
                                                </span>

                                                <p className="small mb-0 text-center ">Pack of {item.pack_of} bottels</p>

                                            </Card.Footer>
                                        </Card>
                                    </Col>

                                );
                            })
                        }
                    </Row>
                </Col>

            </Row>
        </div>
    );
}
export default PopularProducts;