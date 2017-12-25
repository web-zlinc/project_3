export function getOrderInfo(_params){
    return {
        type: ['beforeRequest', 'Requested', 'requestError'],
        url: 'http://10.3.135.246:314/front/php/getOrder.php',
        method:'get',
        params: _params
    }
}