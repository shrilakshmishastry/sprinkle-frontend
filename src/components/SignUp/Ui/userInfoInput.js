import UserInfoInputSignUp from "../../../presentational/UserInfoInput/userInfoInputSignUp";

const UserInfoInput = ({ handleContinue }) => {


    async function handleFormSubmit(values) {
        handleContinue(values);
    }



    return (
        <div className="d-flex flex-column mt-lg-5 pt-lg-5">
            <UserInfoInputSignUp
            handler={(value)=>handleFormSubmit(value)}
            />
        </div>
    );
}
export default UserInfoInput;
