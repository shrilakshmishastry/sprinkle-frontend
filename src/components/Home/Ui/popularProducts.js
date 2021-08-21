import { Row, Col, Card } from "react-bootstrap"
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import waterBottel from '../../../images/waterbottel.png';

const PopularProducts = () => {
    let popularProducts = useSelector(state => state.homeReducer.productsInHomePage);
        const history = useHistory();

        function detailViewRedirector(refer){
            history.push("/item-details",{
                    refer
            });
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
                            <Col  key={item.id.toString()} lg={3} md={4} xs={6}
                                className="mt-5 pe-lg-3 ps-lg-3 ">
                                <Card onClick={()=>detailViewRedirector(item)} className="pt-3 secondary-color border-0 shadow-sm rounded">
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