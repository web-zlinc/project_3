export default function ToggleAction(state,action){
    switch(action.type){
        case 'r':
            state = '完成';
            break;
        default:
            state = '编辑'
    }
    return state;
}
