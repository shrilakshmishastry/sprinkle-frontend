import { Col, Row } from "react-bootstrap";

const AddressListGenerate = (
    {
        uniqueKey, selectedAddress, value, handler
    }) => {
    return (
        <Row key={uniqueKey} className="">
            <Col md="1" xs={2} >
                <input
                    checked={selectedAddress === value}
                    type="radio"
                    id="a"
                    name="address"
                    value={value}
                    onChange={(e) => handler(value)

                    }
                />
            </Col>
            <Col xs={10} md={6}>
                <label className="d-flex flex-row" >
                    <div>
                        <p className="mb-0">
                            {value.addFirstLine},
                        </p>
                        <p className="mb-0">
                            {value.addSecondLine},
                        </p>
                        <p className="mb-0">
                            {value.city}-{value.postalCode}
                        </p>

                    </div>

                </label>
            </Col>
            <Col md={4} >
                {
                    selectedAddress === value
                        ? <input
                            className="btn mt-4 ps-lg-5 pe-lg-5 btn btn-sm  primary-color d-block text-white"
                            type="submit" value="DELIVERY HERE" />
                        : <div className="d-none"></div>
                }

            </Col>
        </Row>
    );
}
export default AddressListGenerate;