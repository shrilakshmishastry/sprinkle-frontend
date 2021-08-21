import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-3 bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
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