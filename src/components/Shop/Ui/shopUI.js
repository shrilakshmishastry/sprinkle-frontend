import { useEffect } from "react";
import { Col, Container, Row,Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import SadEmoji from "../../../Data/SVGs/sadEmoji";
import CardOfProducts from "../../../presentational/Card";
import { getProductsShop } from "../../../redux/actions/getProductsShopAction";

const ShopUi = () =>{
    const dispatch = useDispatch();
    const products = useSelector(state=>state.productsReducer.productsList);
    const history = useHistory();

    useEffect(()=>{
        getProductsShop()(dispatch);
    },[]);

    function detailViewRedirector(refer) {
        history.push("/item-details", {
            refer
        });
    }
    if (!products.length > 0) {
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

    return(
        <Container className="pt-5 pb-5 light-variant" fluid>
            <Row className="text-center">
                <Col>
                    <h4 className="primary-text-color">
                    Products
                    </h4>
                    <p>
                        We provide customer worthy products.
                        Pure water , better life!!
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center mt-3 ps-4 pe-4">
                <Col lg={9} md={12}>
                    <Row className="justify-content-center">
                        {
                            products && products.length > 0 &&
                            products.map((item) => {
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
        </Container>
    );
}
export default ShopUi;