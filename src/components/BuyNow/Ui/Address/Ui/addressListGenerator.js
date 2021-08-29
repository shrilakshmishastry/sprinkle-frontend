import { Col, Row } from "react-bootstrap";

const AddressListGenerate = (
    {
        uniqueKey,selectedAddress,value,handler
    }) =>{
    return(
        <Row key={uniqueKey} >
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
                <Col xs={10}>
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
            </Row>
    );
}
export default AddressListGenerate;