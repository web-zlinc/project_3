/* 
* @Author: Marte
* @Date:   2017-12-07 09:11:16
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-07 11:50:50
*/

export default {
    rem:function(){
    var wd = document.documentElement.clientWidth*window.devicePixelRatio/10;
        //物理像素*设备像素比=真实像素
        document.getElementsByTagName("html")[0].style.fontSize = wd + "px";
        // 把屏幕的倍率缩小到N分之一（N是window.devicePixelRatio）
        var scale = 1/window.devicePixelRatio;
        var mstr = 'initial-scale='+ scale +', maximum-scale='+ scale +', minimum-scale='+ scale +', user-scalable=no';
        document.getElementById("vp").content = mstr;

    }
}    