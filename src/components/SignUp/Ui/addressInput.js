import LeftArrow from "../../../images/SVGs/arrowLeft"
import AddressInputGeneric from "../../../presentational/AddressInput/addressInput";


const AddressInput = ({ handleGoBack, handleAddressInput, load }) => {


    function handleFormSubmit(value) {
        console.log(value);
        handleAddressInput({
            addFirstLine : value.firstLineOfAddress,
            addSecondLine : value.secondLineOfAddress,
            city:value.cityOfAddress,
            postalCode:value. postal,
            state:value.stateOfAddress
        });
    }


    return (
        <div className="d-flex flex-column">
            <div className="">
                <button onClick={handleGoBack} className="btn ">
                    <LeftArrow />
                </button>
            </div>
            <AddressInputGeneric
                handler = {(value)=> handleFormSubmit(value)}
            />

        </div>
    );
}
export default AddressInput;