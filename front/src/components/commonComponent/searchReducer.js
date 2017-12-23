export default function searchFruit(state = {}, action) {
    var newState = state;
    switch (action.type) {
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