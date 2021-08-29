import { Col, Row } from "react-bootstrap";
import AddressCard from "./addressCard";
import CardOfContact from "./cardOfContact";

const ContactItemRender = ({
    title,
    description,
    item,
    contactOrAddress
}) =>{
    return(
        <Row className=" mt-3 justify-content-center">
        <Col className="ps-md-5 text-center text-md-start" xs={12} md={3} lg={3}>
        <h5 className="primary-text-color">
            {title}
        </h5>
        <p className="text-secondary">
            {description}
        </p>
        </Col>
        {
            contactOrAddress === "contact"
            ?
            item.map((value)=>{
                return(
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
           item.map((value)=>{
               console.log(value.address);
            return(
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
    );
}
export default ContactItemRender;