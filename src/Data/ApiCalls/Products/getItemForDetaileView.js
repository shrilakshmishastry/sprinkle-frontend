import axios from 'axios';
import { api } from '../../../config/api';


// function to get products for shop
async function getItem(id, qty, pack_of) {

    let query = `${api.root}${api.getItem}?id=${id}&qty${qty}&pack_of=${pack_of}`;
    try {
        const result = await axios.get(query);
        return result;
    } catch (e) {
        throw console.error(e);
    }
}
export {getItem};