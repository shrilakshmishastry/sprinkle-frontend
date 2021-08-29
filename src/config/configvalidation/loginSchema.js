import * as yup from 'yup';
import { setLocale } from 'yup';


setLocale({
    string:{
        default: 'email or password invalid',
        min: 'password lenght should be greater than 4',
        email : ({email})=>({
            key:'email not valid',
            values:{email}
        })
    },

});

export const loginSchema = yup.object().shape({
    email : yup.string().email().required(),
    password: yup.string().min(4).required()
});