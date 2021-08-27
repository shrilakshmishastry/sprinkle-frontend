import { Row, Col, Card } from "react-bootstrap"
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import SadEmoji from "../../../Data/SVGs/sadEmoji";
import waterBottel from '../../../images/waterbottel.png';
import CardOfProducts from "../../../presentational/Card";

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
                    <SadEmoji/>
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
                                    <CardOfProducts item={item} key={item.id.toString()}
                                    handler={(item)=>detailViewRedirector(item)}
                                    />

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