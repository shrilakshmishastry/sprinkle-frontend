import { Col, Row } from "react-bootstrap";
import AddressCard from "./addressCard";
import CardOfContact from "./cardOfContact";

const ContactItemRender = ({
    title,
    description,
    item,
    contactOrAddress
}) => {
    return (
        <div className="secondary-color" >
            <Row className="justify-content-center">
                <Col className="ps-md-5 pt-5 text-center " xs={12} md={3} lg={3}>
                    <h4 className="mb-5 primary-text-color">
                        {title}
                    </h4>
                    {/* <p className="text-secondary">
                        {description}
                    </p> */}
                </Col>
            </Row>
            <Row className=" mt-3 mb-5 justify-content-center">

                {
                    contactOrAddress === "contact"
                        ?
                        item.map((value) => {
                            return (
                                <CardOfContact
                                    icon={
                                        value.icon
                                    }
                                    key={value.id}
                                    id={value.id}
                                    firstLine={value.place}
                                    secondLine={value.phoneNumber}
                                />
                            );
                        })
                        :
                        item.map((value) => {
                            console.log(value.address);
                            return (
                                <AddressCard
                                    icon={
                                        value.icon
                                    }
                                    key={value.id}
                                    id={value.id}
                                    firstLine={value.address.firstLine}
                                    secondLine={value.address.secondLine}
                                    city={value.address.city}
                                    postal={value.address.postalCode}
                                />
                            );
                        })

                }
            </Row>
        </div>

    );
}
export default ContactItemRender;