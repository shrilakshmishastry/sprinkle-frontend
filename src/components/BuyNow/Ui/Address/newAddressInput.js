import { useDispatch, useSelector } from "react-redux";
import { updateProfileAction } from "../../../../redux/actions/profileAction";
import classNames from "classnames";
import Cancel from '../../../../images/SVGs/cancel';
import AddressInputGeneric from "../../../../presentational/AddressInput/addressInput";


const NewAddressAdd = ({ show, hideHandler }) => {

    const userInfo = useSelector(state=>state.userReducer.userInfo);
    const dispatch = useDispatch();

    const active = "border ps-md-5 pb-5 mt-3 pe-md-5";
    const disabled = "d-none";

    const cancelBtnStyle = classNames({
        [`${active}`]: show,
        [`${disabled}`]: !show
    });


    function handleFormSubmit(values) {

        const address = {
            address_first_line: values.firstLineOfAddress,
            address_second_line: values.secondLineOfAddress,
            city: values.cityOfAddress,
            state: values.stateOfAddress,
            postal: values.postal
        };
        const newAddress = [...userInfo.address,address];

        const data = {
            name: userInfo.name,
            email: userInfo.email,
            phone_number: userInfo.phoneNumber,
            address: newAddress
        };
       updateProfileAction(data)(dispatch);
        hideHandler();
 
    }


    return (
        <div className={cancelBtnStyle}>
            <div className="d-flex justify-content-end">
                <button className="btn fw-bold" onClick={hideHandler} >
                    <Cancel />
                </button>
            </div>
          <AddressInputGeneric
          handler={(value)=> handleFormSubmit(value)}
          />
        </div>
    );
}
export default NewAddressAdd;