import LeftArrow from "../../../Data/SVGs/arrowLeft"

const AddressInput = ({handleGoBack}) =>{
    return(
        <div>
            <button
            className="btn primary-color"
            onClick={handleGoBack}
            >
                <LeftArrow/>
            </button>
        </div>
    );
}
export default AddressInput;