import { Col, Row } from "react-bootstrap"
import Travel from '../../../images/travel.jpg';
import Purity from '../../../images/purity.jpg';

const WorkingHours = () => {

    const daysName = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thrusday",
        "Friday",
        "Saturday"
    ];

    const timings = [
        "09 AM - 6 PM",
        "09 AM - 6 PM",
        "09 AM - 6 PM",
        "09 AM - 6 PM",
        "09 AM - 6 PM",
        "09 AM - 6 PM",
    ];

    const description = "text-center text-secondary text-lg-start small";

    const days = "d-flex flex-row justify-content-between text-center text-lg-start small";

    return (
        <Row className="pb-5 pt-5  justify-content-center">
            <Col md={4} lg={3} className="d-flex flex-column">
                <img src={Travel} alt="pure water" className="img-fluid" />
                <figcaption className="fw-bold mt-3">
                    Everyone need pure water and we do supply it
                </figcaption>
                <p className={description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ea aut neque odit ad nam similique quidem veritatis quia numquam nobis.
                </p>
            </Col>
            <Col md={4} lg={3} className="">
                <img src={Purity} alt="pure water" className="img-fluid" />
                <figcaption className="fw-bold mt-3">
                    Everyone need pure water and we do supply it
                </figcaption>
                <p className={description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ea aut neque odit ad nam similique quidem veritatis quia numquam nobis.
                </p>
            </Col>
            <Col md={6} lg={3} className="mt-md-5 mt-lg-0 rounded ps-3 pe-3 pt-3 secondary-color">
                <p className="fw-bold mt-3 h5 text-center text-lg-start">
                    Deliver Timings
                </p>
                <p className="text-center text-lg-start small text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
               {
                   daysName.map((name,index)=>{
                       return (
                        <p key={name} className={days}>
                        <span>{name}</span>
                        <span className="warning-text-color">{timings[index]}
                        </span>
                     </p>
                       );
                   })
               }

            </Col>
        </Row>
    );
}
export default WorkingHours;