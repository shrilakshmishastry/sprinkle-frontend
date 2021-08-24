import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const ItemList = ({ qty }) => {
    let items = useLocation().state;
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
            <div>
                hello
            </div>
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
                                key={val.id}
                                className="d-flex flex-row justify-content-between">
                                <p>
                                    {val.qty} pack of  {val.pack_of} bottles
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
export default ItemList;