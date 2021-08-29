import * as yup from 'yup';
import { setLocale } from 'yup';


setLocale({
    string:{
        min:({min})=>({
            key: 'field too short',
            values:{min}
        }),
    }
});

export const addressSchema = yup.object().shape({
    firstLineOfAddress : yup.string().min(2).required(),
    secondLineOfAddress: yup.string().min(2).required(),
    cityOfAddress: yup.string().min(4).required(),
    postal: yup.number().min(56).required(),
    stateOfAddress : yup.string().min(4).required()
});
