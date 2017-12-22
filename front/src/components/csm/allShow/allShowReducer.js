/* 
* @Author: sherah
* @Date:   2017-12-21 14:15:02
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-21 14:15:37
*/
export default function AllShowReducer(state = {}, action){
    var newState = state;
    switch(action.type){
        case 'beforeRequest':
            newState.status = 0;
            break;
        case 'Requested':
            newState.status = 1;
            newState.response = action.response;
            break;
        case 'requestError':
            newState.status = -1;
            newState.error = action.error
            break;
    }

    return newState;
}