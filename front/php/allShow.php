<?php
/**
 * @Author: sherah
 * @Date:   2017-12-21 11:10:58
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-12-25 16:10:52
 */  
    header('Access-Control-Allow-Origin:*');
    include 'DBHelper.php';
    $type=isset($_GET["type"])?$_GET["type"]:'';
    if($type){
         $sql="select gid,short_name,images,type from goods where type like '%$type%'"; 
    }     
    $result=query($sql);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>