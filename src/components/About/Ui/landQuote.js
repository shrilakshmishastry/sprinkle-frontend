import { Col, Row } from "react-bootstrap";
import { content } from "../../../Data/About/conatctInfo";

const Land = () =>{
    return(
        <Row className="justify-content-start ">
                <Col md={{span:8,offset:1}} lg={{span:6,offset:1}} className="">
                    <h3>
                       {
                           content.landTitle
                       }
                    </h3>
                </Col>
            </Row>
    );
}
export default Land;