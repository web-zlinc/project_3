export function addCart(_url,_params){
    return {
        types: ['beforeRequest', 'Requested', 'requestError'],
        url: _url,
        // method:'post',
        params: _params
    }
}
export function getData(_url, _params){
    return {
        types: ['beforeRequest', 'Requested', 'requestError'],
        url: _url,
        params: _params
    }
}