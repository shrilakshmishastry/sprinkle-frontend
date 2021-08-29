import { Col, Row } from "react-bootstrap";
import PurityImg from '../../../images/waterplant.jpg';


const LandImg = () => {
    return (
        <Row className="justify-content-start ">
            <Col md={{span:11,offset:1}} lg={{span:8,offset:1}} className="">
                <img src={PurityImg} alt="Water purification image" className="mt-2 img-fluid" />
            </Col>
        </Row>
    );
}
export default LandImg;