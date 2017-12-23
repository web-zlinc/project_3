<<<<<<< HEAD
/* 
* @Author: Marte
* @Date:   2017-12-20 20:19:50
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-22 17:08:30
*/

$(document).ready(function(){
    
});
=======
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
>>>>>>> 48317008fd1ed6146b587b8eab7034fa3aa7f126
