export function getUserInfo(_params){
    return {
        type: ['beforeRequest', 'Requested', 'requestError'],
        url: 'http://10.3.135.246:314/front/php/getUser.php',
        method:'get',
        params: _params
    }
}
export function delCart(_params){
    return {
        type: ['beforeRequestdel', 'Requesteddel', 'requestErrordel'],
        url: 'http://10.3.135.246:314/front/php/delCart.php',
        method:'post',
        params: _params
    }
}
