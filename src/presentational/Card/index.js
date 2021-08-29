import { Card, Col } from "react-bootstrap";
import waterBottel from '../../images/waterbottel.png';

const CardOfProducts = ({ item,handler }) => {

    return (
        <Col key={item.id.toString()} lg={3} md={4} xs={6}
            className="mt-5 pe-lg-3 ps-lg-3 ">
            <Card onClick={() => handler(item)} className="pt-3 secondary-color border-0 shadow-sm rounded">
                <Card.Img src={waterBottel} className="img-fluid" alt={item.qty} />
                <Card.Footer className=" bg-white ">
                    <span className="d-flex flex-row justify-content-between">
                        <p className="mb-0" >{item.qty}</p>
                        <p className="mb-0 fw-bold warning-text-color " > ₹{item.price}</p>
                    </span>

                    <p className="small mb-0 text-center ">Pack of {item.pack_of} bottels</p>

                </Card.Footer>
            </Card>
        </Col>
    );


}
export default CardOfProducts;