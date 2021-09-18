import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RightArrow from '../../../images/SVGs/rightArrow';
import WaterGlass from '../../../images/namedBottel.png';

const OurBottelYourName = () => {
    return (
        <Row className="ps-md-5  pe-lg-5">
            <Col md={6} lg={{span:4 ,offset:2}}
             className="pt-5  text-center mt-5 text-md-start">
                <h3 className="mt-2 primary-text-color ">
                    Our Bottel Your Label
                </h3>
                <p className="mt-4">
                    We supply bottels with your
                     labels for wedding, hotels or to any functions.
                </p>

                    <Link to="/prodcuts" className="">
                    <button className=" btn ps-4 primary-color text-white">
                        Try Now
                        <RightArrow/>
                    </button>
                    </Link>

            </Col>
            <Col md={6} lg={{span:4,offset:1}} className="bg-sucess">
            <img src={WaterGlass} alt="pure water" className="img-fluid" />
            </Col>
        </Row>
    );
}
export default OurBottelYourName;