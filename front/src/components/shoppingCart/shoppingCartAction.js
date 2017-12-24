
export function getUserInfo(_params){
    return {
        type: ['beforeRequest', 'Requested', 'requestError'],
        url: 'http://10.3.135.246:314/front/php/getUser.php',
        method:'get',
        params: _params
    }
}
export function getUsergid(_params){
    return {
        type: ['beforeRequest', 'Requested', 'requestError'],
        url: 'http://10.3.135.246:314/front/php/shoppingCart.php',
        method:'get',
        params: _params
    }
}
