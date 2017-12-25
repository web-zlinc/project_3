<?php
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
    //个人信息
    $id = isset($_GET["id"]) ? $_GET["id"] : '';

    if($id){
        $sql = "select * from `order` as o inner join `goods` as g  ON (o.gid = g.gid) WHERE uid ='$id'";
    }
    $result = query($sql); 
    echo json_encode($result,JSON_UNESCAPED_UNICODE);
?>    