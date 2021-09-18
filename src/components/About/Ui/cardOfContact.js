import { Col } from "react-bootstrap";

const CardOfContact = ({id,icon,firstLine,secondLine,textColor}) =>{
    return(
        <Col className="text-center  pb-4" key={id} xs={6} md={3} lg={3}>
            <p className={`${textColor} mb-0`}>
            {icon}
            </p>

            <p className="mb-0 text-white">
                {firstLine}
            </p>
            <p className="text-white small">
                {secondLine}
            </p>
        </Col>
    );
}
export default CardOfContact;