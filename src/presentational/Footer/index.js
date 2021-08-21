import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="primary-text-color bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                        </a>
                        <a href="mailto:someone@example.com">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-4 primary-text-color bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                            </svg>
                        </a>
                        <a href="tel:+8792227928 " >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" ms-4 primary-text-color bi bi-telephone-x-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm9.261 1.135a.5.5 0 0 1 .708 0L13 2.793l1.146-1.147a.5.5 0 0 1 .708.708L13.707 3.5l1.147 1.146a.5.5 0 0 1-.708.708L13 4.207l-1.146 1.147a.5.5 0 0 1-.708-.708L12.293 3.5l-1.147-1.146a.5.5 0 0 1 0-.708z" />
                            </svg>
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