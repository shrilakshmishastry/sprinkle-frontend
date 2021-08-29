import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TelePhone from '../../images/SVGs/telephone';
import Email from '../../images/SVGs/email';
import Twitter from '../../images/SVGs/twitter';

const Footer = () => {
    return (
        <Container fluid>
            <Row className="ps-5 pb-5 pt-5 pb-5 bg-dark" >
                <Col md={{ span: 4 }}
                    lg={{ span: 3, offset: 1 }}
                    className="">
                    <h5 className="fw-bold primary-text-color">
                        Sprinkle
                    </h5>
                    <p className="small mb-0 mt-3 text-light">
                        © 2010 - 2021, Sprinkle Ltd.
                    </p>
                    <p className="small text-light">

                        All rights reserved.
                    </p>
                    <div className="d-flex flex-row ">
                        <a href="/">
                            <Twitter/>
                        </a>
                        <a href="mailto:someone@example.com">
                           <Email/>
                        </a>
                        <a href="tel:+8792227928 " >
                           <TelePhone/>
                        </a>
                    </div>
                </Col>
                <Col md={3} className="mt-5 mt-md-0  d-flex flex-column">
                    <h6 className="primary-text-color ms-md-5">
                        Company
                    </h6>
                    <Link to="/about-us" className="mt-3  ">
                        <button className="btn text-start text-light ps-md-5 pe-md-5">
                            About
                        </button>
                    </Link>
                    <Link to="/products" className="mt-3  ">
                        <button className="btn text-start text-light ps-md-5 pe-md-5">
                            Shop
                        </button>
                    </Link>
                </Col>
                <Col md={{ span: 3, offset: 1 }} lg={3} className="mt-4">
                    <h5 className="mb-0 text-light">
                        Sprinkle
                    </h5>
                    <p className="text-secondary text-light">
                        #50, Gurudeva Near Tempo Stand
                        Shimoga - 577202
                    </p>
                </Col>
            </Row>
        </Container>

    );
}
export default Footer;