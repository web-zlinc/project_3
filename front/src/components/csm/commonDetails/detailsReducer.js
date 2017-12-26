/* 
* @Author: sherah
* @Date:   2017-12-21 14:15:02
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-26 09:30:20
*/
export default function DetailsReducer(state = {}, action){
    var newState = state;
    switch(action.type){
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