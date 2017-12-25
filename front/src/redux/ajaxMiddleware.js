import http from '../utils/httpClient'

export function ajaxMiddleware(api){
    return function(dispatch){
        return function(action){      
            const {types, url, method = 'get', params = {}} = action
            if(!url){
                return dispatch(action)
            }

            api.dispatch({
                type: 'beforeRequest',
                data:params
            })
            if(url){
                return new Promise((resolve, reject) => {
                    http[method](url, params).then(res => {
                        api.dispatch({
                            type: 'Requested',
                            response: res
                        })
                        resolve(res);
                    })
                })
            }
        }
    }
}