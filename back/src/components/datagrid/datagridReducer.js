export default function dataGridReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'dataGridbeforeRequest':
            newState.status = 0;
            newState.type = action.type;
            newState.loading = action.loading;
            newState.responesone = '';    
            break;
        case 'dataGridRequested':
            newState.status = 1;
            newState.type = action.type;
            newState.respones = action.respones.data1;
            newState.total = action.respones.data2[0].rowsCount;
            newState.currentPage = action.page;
            newState.loading = action.loading;
            break;
        case 'dataGridRequestedError':
            newState.status = -1;
            newState.error = action.error;
            break;
        case 'dataGridRequestedOne':
            newState.status = 1;
            newState.type = action.type;
            if(action.respones.data1){
                newState.responesone = action.respones.data1;
            }else{
                newState.responesone = action.respones;              
            }
            newState.loading = action.loading;
            newState.currentPage = action.page;            
            break;
    } 
    return newState;
}