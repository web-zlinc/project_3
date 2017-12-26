export function login(_url, _params = {}){
    return {
        types:['loginbeforeRequest','loginRequested','loginRequestedError'],
        url:_url,
        params:_params,
        method:'get'
    }
}