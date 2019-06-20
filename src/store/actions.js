// 1. Fetch data for the landing page
// 2. Detail Page data manipulation
// 3. Enquiry List data saving
// 4. 

export const FETCH_DATA = 'FETCH_DATA';
export const IS_FETCHING = 'IS_FETCHING';

export const CURRENT_PRODUCT_ID = 'CURRENT_PRODUCT_ID';
export const IS_LOADING = 'IS_LOADING';

export const ADD_ENQUIRY = 'ADD_ENQUIRY';
export const REMOVE_ENQUIRY = 'REMOVE_ENQUIRY';
export const UPDATE_ENQUIRY = 'UPDATE_ENQUIRY';

export function fetchData(data){
    return {
        type: FETCH_DATA,
        payload: data
    }
}

export function isFetching(){
    return {
        type: IS_FETCHING
    }
}

export function currentProductId(id){
    return {
        type: CURRENT_PRODUCT_ID,
        payload: id
    }
}

export function isLoading(){
    return {
        type: IS_LOADING
    }
}

export function addEnquiry(data){
    return {
        type: ADD_ENQUIRY,
        payload: data
    }

}

export function removeEnquiry(id){
    return {
        type: REMOVE_ENQUIRY,
        payload: id
    }
}

export function updateEnquiry(id, data){
    return {
        type: UPDATE_ENQUIRY,
        id,
        data
    }
}