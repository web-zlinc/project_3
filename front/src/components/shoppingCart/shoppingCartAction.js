<<<<<<< HEAD

=======
>>>>>>> 80642f993a0bde109ea299306c7dc5923f458550
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
<<<<<<< HEAD

=======
>>>>>>> 80642f993a0bde109ea299306c7dc5923f458550
