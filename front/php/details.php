<?php
/**
 * @Author: sherah
 * @Date:   2017-12-24 15:30:17
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-12-25 10:12:06
 */
    header('Access-Control-Allow-Origin:*');
    include 'DBHelper.php';
    $gid=isset($_GET["gid"])?$_GET["gid"]:'';
    if($gid){
        $sql="select * from goods where gid = '$gid' ";
        $sql.="; select * from appraise where gid= '$gid';";
        
    } 
    $result = multi_query_oop($sql); 
     echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>