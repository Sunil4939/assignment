import { GET_ALL_POST } from "../types";

const initialState = {
    getAllPost: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POST:
            return {
                ...state,
                getAllPost: action.payload
            }

        default:
            return state;
    }
}