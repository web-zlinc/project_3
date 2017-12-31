export function getData(_url, _params){
    return {
        types: ['beforeRequest', 'Requested', 'requestError'],
        url: _url,
        params: _params
    }
}