import {FETCH_DATA, IS_FETCHING} from './../../store/actions';

const initialState = {
    jewellery: [],
    isFetching: false
}

export default function jewellery(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA:
            return Object.assign({}, state, {isFetching: false, jewellery: action.payload})
        case IS_FETCHING:
            return Object.assign({}, state, {isFetching: true})
        default:
            return state
    }
}