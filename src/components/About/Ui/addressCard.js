import { Col } from "react-bootstrap";

const AddressCard = ({
    firstLine,
    secondLine,
    city,
    postal,
    icon,
    id
}) =>{
    return(
        <Col className="text-center text-md-start"
         key={id} xs={6} md={3} lg={3}>
        <p className="primary-text-color mb-0">
        {icon}
        </p>

        <p className="mb-0 text-secondary small">
            {firstLine}
        </p>
        <p className="text-secondary small">
            {secondLine}
        </p>
        <p className="">
            {city} - {postal}
        </p>
    </Col>
    );
}
export default AddressCard;