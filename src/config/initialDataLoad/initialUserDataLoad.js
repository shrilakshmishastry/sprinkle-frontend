import { getProfileData } from "../api";
import { getProfileInitialData } from '../../redux/actions/profileAction';


export const initilaDataLoad = async(dispatch) =>{
    try{
        const result = await getProfileData();
     getProfileInitialData(dispatch,result.data);
    }
    catch(e){
    }

}