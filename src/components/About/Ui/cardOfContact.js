import { Col } from "react-bootstrap";

const CardOfContact = ({id,icon,firstLine,secondLine}) =>{
    return(
        <Col className="text-center text-md-start pb-4" key={id} xs={6} md={3} lg={3}>
            <p className="primary-text-color mb-0">
            {icon}
            </p>

            <p className="mb-0">
                {firstLine}
            </p>
            <p className="text-secondary small">
                {secondLine}
            </p>
        </Col>
    );
}
export default CardOfContact;