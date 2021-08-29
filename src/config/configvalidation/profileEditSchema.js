import * as yup from 'yup';
import { setLocale } from 'yup';


setLocale({
    string:{
        default: 'Invalid invalid',
        min: ({min})=>({
            key: 'field too short',
            values:{min}
        }),

        email : ({email})=>({
            key:'email not valid',
            values:{email}
        })
    },

});

export const profileEditSchema = yup.object().shape({
    email : yup.string().email().required(),
    name: yup.string().min(3).required(),
    phoneNumber: yup.number().min(4).required()
});