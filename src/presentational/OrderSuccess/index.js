import { Col, Container, Row } from "react-bootstrap";
import Order from '../../images/orderConfirm.png';

const OrderSuccess = () => {
    return (
        <Container className="">
            <Row className="text-center mt-5 ">
                <h4 className="primary-text-color">
                    Your order is accepted !
                </h4>
            </Row>
            <Row className="justify-content-center mt-5">
                <Col md={6} className="text-center">
                     <img src={Order} alt="Order success"
                     className="h-50"
                     />
                </Col>
            </Row>
        </Container>
    );
}
export default OrderSuccess;