import { getTopProductList } from "../../redux/actions/topProductGetAction";
import {  getTopProducts } from "../api"

const initialTopProductLoad = async (dispatch) => {
    try {
        const result = await getTopProducts();
        getTopProductList(dispatch, result.data);
    }
    catch (e) {

    }
}

export { initialTopProductLoad };