import { api } from "../../../config/api";
async function removeProfile(userData) {
    try{
        const result = await axios.post(api.root.concat(api.profile),userData)
        return result;

    }catch(e){
        throw console.error(e);
    }
}
export { removeProfile };