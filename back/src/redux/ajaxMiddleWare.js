import http from '../utils/EdAxios'

export function ajaxMiddleWare(MiddleWareAPI){
    return function(dispatch){
        return function(action){
            const {types, url, method = 'post', params} = action
            
            if(!url){
                return dispatch(action);
            }

            MiddleWareAPI.dispatch({
                type: types[0],
                loading:true,
            })

            var curPage;
            if(!params.page){
                curPage = 1;
            }else{
                curPage = params.page
            }
            if(url){
                http[method]({url:url,params}).then(res => {
                    MiddleWareAPI.dispatch({
                        type:types[1],
                        respones:res.data,
                        page:curPage,
                        loading:false,
                    })
                }).catch(error => {
                    MiddleWareAPI.dispatch({
                        type: types[2],
                        error,
                    })
                })
            } 
        }
    }
}

                        // else if(params.handle == 'ant-btn show ant-btn-primary'){
                        //     delete params.handle;
                        //     http[method]({url:url,params}).then(res =>{
                        //         MiddleWareAPI.dispatch({
                        //             type:'requestSingle',
                        //             respones:res,
                        //             page:curPage,                        
                        //             loading:false,                        
                        //         })
                        //     }).catch(error =>{
                        //         MiddleWareAPI.dispatch({
                        //             type: 'requestError',
                        //             error,
                        //         })
                        //     })
                        // } else if(params.save == 'save'){
                        //     delete params.save;
                        //     delete params.handle;
                        //     http[method]({url:url,params}).then(res =>{
                        //         MiddleWareAPI.dispatch({
                        //             type:'updateResponse',
                        //             updateResponse:res,
                        //             page:curPage,                        
                        //             loading:false,
                                    
                        //         })
                        //     }).catch(error => {
                        //         MiddleWareAPI.dispatch({
                        //             type: 'requestError',
                        //             error,
                        //         })
                        //     })
                        // } else if(params.status == 'delete'){
                        //     delete params.handle;              
                        //     http[method]({url:url,params}).then(res =>{
                        //         MiddleWareAPI.dispatch({
                        //             type:'updateResponse',
                        //             updateResponse:res,
                        //             page:curPage,
                        //             loading:false,                        
                        //         })
                        //     }).catch(error => {
                        //         MiddleWareAPI.dispatch({
                        //             type: 'requestError',
                        //             error,
                        //         })
                        //     })
                        // } else if(params.status == 'insert'){
                        //     delete params.handle;              
                        //     http[method]({url:url,params}).then(res =>{
                        //         console.log(res);
                        //         MiddleWareAPI.dispatch({
                        //             type:'updateResponse',
                        //             updateResponse:res,
                        //             page:curPage,                        
                        //             loading:false,
                                    
                        //         })
                        //     }).catch(error => {
                        //         MiddleWareAPI.dispatch({
                        //             type: 'requestError',
                        //             error,
                        //         })
                        //     })
                        // }