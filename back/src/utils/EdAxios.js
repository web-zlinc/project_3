//进行axios的二次封装

//引入相关使用插件
import axios from 'axios';
import qs from 'qs';

var baseUrl = 'http://10.3.135.225:168/';
//url:参数类似(Query.php)
var fliterUrl = function(url){
    if(url.startsWith('http')){
        return url;
    }
    return baseUrl + url;
}
export default {
    get:(opt)=>{
        return  new Promise((resolve,reject)=>{
                    axios.get(fliterUrl(opt.url)).then((response)=>{
                        resolve(response);
                    }).catch((error)=>{
                        reject(error);
                    })
                })
    },
    post:(opt)=>{
        return new Promise((reslove,reject)=>{
                 axios({
                    url:fliterUrl(opt.url),
                    data: qs.stringify(opt.params),
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then((response) => {
                       reslove(response);
                    })
                    .catch((error) => {
                       reject(error);
                    }
                );
   
        })
    }
}