import { Col } from "react-bootstrap";
import CarryVehicle from "../../../images/SVGs/carryVehicle";

const Description = ({display,state}) =>{
    const style = `${display} rounded ms-lg-5 ps-lg-3 pe-lg-3 mt-3 mt-lg-5 pt-5 pb-5`;
    console.log(state);
    return(
        <Col md={6} lg={4} className={style}>

        <h5 className="mb-lg-0" >
            Pack of {state.qty} bottles,
            consists of {state.pack_of} bottles
        </h5>
        <p className="mt-3 h6 text-primary">
            ₹{state.price}  per pack
        </p>
        <p className="small">
            Per bottel  ₹ {state.per_bottel_price}
        </p>


        {
            state.tag === "out of stock" ?
                <p className="text-danger  small">
                    Currently unavialable
                </p>
                :
                <p className="text-secondary  small">
                    <CarryVehicle/>
                    Expect delivery within a day.
                </p>
        }

    </Col>
    );
}
export default Description;