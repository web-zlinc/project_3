<?php
/**
 * @Author: sherah
 * @Date:   2017-12-22 19:53:45
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-12-25 17:18:33
 */
    header('Access-Control-Allow-Origin:*');
    include 'DBHelper.php';
    $name=isset($_GET["name"])?$_GET["name"]:'';
    $phone = isset($_GET["phone"]) ? $_GET["phone"] : '';
    $userid ="select uid from user where phone=$phone";
    if(query($userid)){
      $uid=query($userid)[0]->uid;   
    }
    $sql="select * from goods";
    if($name){
        if($phone==""){
            $uid=" ";
        }
        $sql="select * from goods where find_in_set( '$name' , short_name)";
        $sql.=";select sum(qty) as sum from shoppingcart where uid='$uid';";
    }
       
     $result=multi_query_oop($sql);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);  
?>