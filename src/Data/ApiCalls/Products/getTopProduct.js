import axios from 'axios';
import { api } from '../../../config/api';
// function to fetch top products

async function getTopProducts() {
    let url  = `${api.root}${api['top-products']}`;
    try {
        const result = await axios.get(url);
        return result;
    } catch (e) {
         return e;
    }
}

export {
    getTopProducts
};
