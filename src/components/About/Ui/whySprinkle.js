import { Col, Row } from "react-bootstrap";
import { content } from "../../../Data/About/conatctInfo";
import Travel from '../../../images/travel.jpg';

const WhySprinkle = () => {
    return (
        <Row className="mt-5">
            <Col className="mt-md-5" md={{span:5,offset:1}} lg={{span:4,offset:1}}>
                <h5 className="primary-text-color">
                    {content.secondTitle}
                </h5>
                <p>
                   {content.secondDescription}
                    <span className="ms-2 primary-text-color">
                        Sprinkle
                    </span>
                </p>
                <p className="small text-secondary">
                  {content.secondSubDescription}
                </p>
            </Col>
            <Col className="mt-md-5 mt-lg-0" md={{span:5}} >
            <img src={Travel} alt="Water carrage" className="mt-2 img-fluid" />
            </Col>
        </Row>
    );
}
export default WhySprinkle;