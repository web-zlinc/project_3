export default function dataGridReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'beforeRequest':
            newState.status = 0;
            newState.type = action.type;
            newState.updateResponse = '';
            newState.loading = action.loading;
            break;
        case 'requested':
            newState.status = 1;
            newState.type = action.type;
            newState.respones = action.respones.data.data1;
            newState.total = action.respones.data.data2[0].rowsCount;
            newState.currentPage = action.page;
            newState.loading = action.loading;            
            break;
        case 'requestError':
            newState.status = -1;
            newState.error = action.error;
            break;
        case 'requestSingle':
            newState.status = 2;
            newState.type = action.type;
            newState.responeSingle = action.respones.data.data1;
            break;
        case 'updateResponse':
            console.log('action',action);
            newState.status = 3;
            newState.type = action.type;
            newState.currentPage = action.page;            
            if(action.updateResponse.data == "updateOk" ||  action.updateResponse.data == 'deleteOk' ||  action.updateResponse.data == 'insertOk' ){
                newState.updateResponse = 'Ok';
            }
            break;
    } 
    return newState;
}