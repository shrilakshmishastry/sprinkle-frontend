import { Formik } from "formik";
import { addressSchema } from "../../config/configvalidation/addressSchema";
import { buyNowContent } from "../../Data/BuyNow/content";
import { SignUp } from "../../Data/Signup/content";


const AddressInputGeneric = ({handler}) =>{
return(
    <Formik
    validationSchema={addressSchema}
    initialValues={{
        firstLineOfAddress: "",
        secondLineOfAddress: "",
        cityOfAddress: "",
        postal: "",
        stateOfAddress: ""
    }}


    onSubmit={
        (values, { setSubmitting }) => {
            setSubmitting(true);
            handler(values);
            setSubmitting(false);
        }
    }
>
    {
        ({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
        }) => (

            <form onSubmit={handleSubmit}>

                {
                    buyNowContent.newAddress.map((value) => {
                        return (
                            <div key={value.label}>
                                <label className="visually-hidden" id="AddFirstLine">
                                    {value.label}
                                </label>
                                <input
                                    value={values[value.name]}
                                    onChange={handleChange}
                                    name={value.name}
                                    type={value.type}
                                    placeholder={value.label}
                                    required
                                    className={SignUp.inputStyle}
                                />
                                <div>

                                    {errors[value.name] && touched[value.name] ?

                                        <div className="text-danger">
                                            {/* {Object.keys(errors[value.name])} */}
                                            <span className="me-3">{errors[value.name].key}</span>
                                            <span>minmum {errors[value.name].values.min} character required</span>
                                        </div>
                                        : null
                                    }

                                </div>
                            </div>

                        );
                    })
                }
                <div className="d-grid">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn d-block mt-5 primary-color text-white">
                        SUBMIT
                    </button>
                </div>

            </form>
        )
    }

</Formik>
);
}
export default AddressInputGeneric;