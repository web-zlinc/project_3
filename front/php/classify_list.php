<?php
/**
 * @Author: sherah
 * @Date:   2017-12-22 19:53:45
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-12-23 10:18:47
 */
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    include 'DBHelper.php';
    $name=isset($_GET["name"])?$_GET["name"]:'';
    if($name){
         $sql="select * from goods where find_in_set( '$name' , short_name)"; 
    }
    // var_dump($sql);
    $result=query($sql);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);  
?>