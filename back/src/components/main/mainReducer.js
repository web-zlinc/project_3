export default function mainReducer(state={}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'mainbeforeRequest':
            newState.status = 0;
            newState.type = action.type;
            break;
        case 'mainRequested':
            newState.status = 1;
            newState.type = action.type;
            newState.currentHighLight =action.highLight;
            break;
        case 'mainRquestedError':
            newState.status = -1;
            newState.error = action.error;
            break;
    }
    return newState;
}