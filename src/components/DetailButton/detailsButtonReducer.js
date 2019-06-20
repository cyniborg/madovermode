import { CURRENT_PRODUCT_ID } from './../../store/actions';

const initialState = {
    currentProductId: null
}

export default function currentProductId(state = initialState, action){
    switch(action.type){
        case CURRENT_PRODUCT_ID:
            return Object.assign({}, state, {currentProductId: action.payload});
        default:
            return state;
    }
}