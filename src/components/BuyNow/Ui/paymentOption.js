import Cash from "../../../Data/BuyNow/SVGs/cash"

const PaymentOption = () => {
    return (
        <div className="mt-md-5 ps-3">
        <div className="d-flex flex-row">
        <Cash/>
        <p className="primary-text-color ms-3">
            Cash on Delivery
        </p>
        </div>
        <p className="text-secondary small">
            No return and cancellation once out for delivery.
        </p>
    </div>

    );
}
export default PaymentOption;