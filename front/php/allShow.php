<?php
/**
 * @Author: sherah
 * @Date:   2017-12-21 11:10:58
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-12-26 12:53:19
 */  
    header('Access-Control-Allow-Origin:*');
    include 'DBHelper.php';
    $type=isset($_GET["type"])?$_GET["type"]:'';
    if($type){
         $sql="select gid,short_name,images,type from goods where type like '%$type%'"; 
         $sql.=";select FOUND_ROWS() as row frm goods;";
    }     
    $result=multi_query_oop($sql);
    // var_dump($sql);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>