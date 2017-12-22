<?php
/**
 * @Author: sherah
 * @Date:   2017-12-21 11:10:58
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-12-21 12:46:32
 */
  // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    include 'DBHelper.php';
    $type=isset($_GET["type"])?$_GET["type"]:'果园优选';
    $sql="select gid,short_name,images,type from goods where type like '%$type%'"; 
    $result=query($sql);
    var_dump($sql);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>