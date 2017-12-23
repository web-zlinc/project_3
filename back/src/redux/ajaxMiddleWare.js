import http from '../utils/EdAxios'

export function ajaxMiddleWare(MiddleWareAPI){
    return function(dispatch){
        return function(action){
            const {type, url, method = 'post', params} = action
            if(!url){
                return dispatch(action);
            }
            if(!params.page){
                params.page = 1;
            }
            if(url && !params.handle ){
                http[method]({url:url,params}).then(res => {
                    MiddleWareAPI.dispatch({
                        type:'requested',
                        respones:res,
                        page:params.page
                    })
                }).catch(error => {
                    MiddleWareAPI.dispatch({
                        type: 'requestError',
                        error,
                    })
                })
            } else if(params.handle == 'ant-btn show ant-btn-primary'){
                delete params.handle;
                http[method]({url:url,params}).then(res =>{
                    MiddleWareAPI.dispatch({
                        type:'requestSingle',
                        respones:res,
                    })
                }).catch(error =>{
                    MiddleWareAPI.dispatch({
                        type: 'requestError',
                        error,
                    })
                })
            } else if(params.save == 'save'){
                delete params.save;
                delete params.handle;
                http[method]({url:url,params}).then(res =>{
                    MiddleWareAPI.dispatch({
                        type:'updateResponse',
                        updateResponse:res
                    })
                }).catch(error => {
                    MiddleWareAPI.dispatch({
                        type: 'requestError',
                        error,
                    })
                })
            } else if(params.status == 'delete'){
                delete params.handle;              
                http[method]({url:url,params}).then(res =>{
                    MiddleWareAPI.dispatch({
                        type:'updateResponse',
                        updateResponse:res
                    })
                }).catch(error => {
                    MiddleWareAPI.dispatch({
                        type: 'requestError',
                        error,
                    })
                })
            } else if(params.status == 'insert'){
                delete params.handle;              
                http[method]({url:url,params}).then(res =>{
                    console.log(res);
                    MiddleWareAPI.dispatch({
                        type:'updateResponse',
                        updateResponse:res
                    })
                }).catch(error => {
                    MiddleWareAPI.dispatch({
                        type: 'requestError',
                        error,
                    })
                })
            }
        }
    }
}