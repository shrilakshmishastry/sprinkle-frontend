import LeftArrow from "../../../images/SVGs/arrowLeft"
import AddressInputGeneric from "../../../presentational/AddressInput/addressInput";

// address_second_line:{
//     type: String,
//      required: true
//  },
//  city:{
//      type:    String,
//      required: true
//  },
//  state:{
//      type:    String,
//      required: true
//  },
//  postal:

const AddressInput = ({ handleGoBack, handleAddressInput, load }) => {


    function handleFormSubmit(value) {
        console.log(value);
        handleAddressInput({
            address_first_line : value.firstLineOfAddress,
            address_second_line : value.secondLineOfAddress,
            city:value.cityOfAddress,
            postal:value. postal,
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