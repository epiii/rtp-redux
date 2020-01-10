import {
    INCREMENT_NUMBER
} from '../types';
 
export default function(state={},action){
    switch(action.type){
        case INCREMENT_NUMBER:
            return {...state, clickedNumber: action.payload + 1 }
        default:
            return state;
    }
}