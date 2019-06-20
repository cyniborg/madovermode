import { fetchData, isFetching } from './../../store/actions';
import axios from 'axios';

export default function fetchJewellery(){
    return dispatch => {
        dispatch(isFetching());
        axios.get('https://my-json-server.typicode.com/cyniborg/madovermode/jewellery')
        .then(function(response){
            console.log(response);
            dispatch(fetchData(response.data));
        })
        .catch(function(error){
            console.log(error);
        })
    }
}