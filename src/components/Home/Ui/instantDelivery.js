import { Col, Row } from "react-bootstrap";
import Call from "../../../Data/SVGs/call";

const InstantDelivery = () => {
    return (
        <Row className="justify-content-center pb-4 ">
            <Col md={10} className="secondary-color pb-5 pt-5 text-center flex flex-column">
                <h4 className="text-dark mt-3">
                    For instant delivery contact us
                </h4>
                <a href="tel:+8792227928" className="ps-3 pe-3 text-dark">
                <Call/>
                 8792227928
                </a>

            </Col>
        </Row>
    );
}
export default InstantDelivery;