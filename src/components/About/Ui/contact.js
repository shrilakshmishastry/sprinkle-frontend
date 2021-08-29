import { Col, Row } from "react-bootstrap";
import { addressInfo, contactInfo } from "../../../Data/About/conatctInfo";
import WaterDrop from "../../../images/SVGs/waterDrop";
import CardOfContact from "./cardOfContact";
import ContactItemRender from "./conatctItemRender";

const ContactUs = () =>{


return(
<div className="mt-5">
    <ContactItemRender
    title={"Contact us"}
    description={"Where we work from"}
    item={contactInfo}
    contactOrAddress={"contact"}
    />
     <ContactItemRender
    title={"Visit Us"}
    description={"Where we work from"}
    item={addressInfo}
    contactOrAddress={"address"}
    />

</div>
);
}
export default ContactUs;