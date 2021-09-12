import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";


const ListViewCart = ({ qty, items, addressSelected }) => {
    const [total, changeTotal] = useState(0);
    const userInfo = useSelector(state => state.userReducer.userInfo.email);

    useEffect(() => {
        let val = 0;
        for (let i = 0; i < items.length; i++) {
            val = val + items[i].price * qty[i];
        }

        changeTotal(val);
    }, [qty]);

    if (userInfo === "") {
        return (
            <Container className="mt-5">
                <h5 className="primary-text-color">
                    Sprinkle
                </h5>
                <p>
                    We give the world most purified water!!
                </p>
            </Container>
        );
    }

    return (
        <Card>
            <Card.Header>
                <h6 className=" text-secondary ">
                    PRICE DETAILS
                </h6>
            </Card.Header>
            <Card.Body>
                {
                    items.map((val, index) => {

                        return (
                            <div
                                key={val._id}
                                className="d-flex flex-row justify-content-between">
                                <p>
                                    {val.name}
                                </p>
                                <p>
                                    ₹{val.price * qty[index]}
                                </p>
                            </div>
                        );
                    })
                }
            </Card.Body>
            <Card.Footer>
                <div className="d-flex flex-row justify-content-between">
                    <p className="fw-bold mb-0" >
                        Total Amount
                    </p>
                    <p className="fw-bold mb-0">
                        ₹ {total}
                    </p>
                </div>
            </Card.Footer>
        </Card>
    );

}
export default ListViewCart;