import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";

const ItemList = ({ qty, items ,addressSelected }) => {

    const [total, changeTotal] = useState(0);
    const userInfo = useSelector(state => state.userReducer.userInfo.email);
    let info = useLocation().state.items;
    const user = useSelector(state => state.userReducer.userInfo);
    const history = useHistory();

    useEffect(() => {
        let val = 0;
        for (let i = 0; i < items.length; i++) {
            val = val + items[i].price * qty[i];
        }

        changeTotal(val);
    }, [qty]);

    function handlePlaceAnOrderBtn() {
        for(let i=0;i<info.length;i++){
            info[i]["ordered-quantity"] = qty[i];
        }

        let queryObj = {
            items: info,
            addressToDelivey : addressSelected,
            userInfo  : user,
            total: total
        };
        console.log("place an order");
        console.log(queryObj);
        // try{
        //    const result = await placeAnOrder(queryObj);
        // }catch(e){
        //     console.log(e);
        // }

        history.replace("/order-success");

    }

    if (userInfo === "") {
        return (
            <div className="mt-5">
                <h5 className="primary-text-color">
                    Sprinkle
                </h5>
                <p>
                    We give the world most purified water!!
                </p>
            </div>
        );
    }

    return (
        <Card>
            <Card.Header className="d-flex flex-row justify-content-between">
                <h6 className=" text-secondary pt-2">
                    PRICE DETAILS
                </h6>
                <button onClick={handlePlaceAnOrderBtn}
                 className="btn p-0 primary-text-color ">
                    <small>
                    PLACE ORDER
                    </small>
                </button>
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