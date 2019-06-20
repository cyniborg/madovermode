import { currentProductId } from './../../store/actions';
export default function storeCurrentProductId (id){
    return dispatch => {
        dispatch(currentProductId(id))
    }
}