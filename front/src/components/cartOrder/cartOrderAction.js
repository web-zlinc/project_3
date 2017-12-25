export function createOrder(_params){
    return {
        type: ['beforeRequest', 'Requested', 'requestError'],
        url: 'http://10.3.135.246:314/front/php/createOrder.php',
        method:'post',
        params: _params
    }
}
export function deleteCart(_params){
    return {
        type: ['beforeRequest', 'Requested', 'requestError'],
        url: 'http://10.3.135.246:314/front/php/delCart.php',
        method:'post',
        params: _params
    }
}