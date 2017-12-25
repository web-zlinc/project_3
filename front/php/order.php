<?php
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
    $uid = isset($_GET["uid"]) ? $_GET["uid"] : '';
    $status = isset($_GET["status"]) ? $_GET["status"] : '';
    
    if($uid && !$status){
        $sql="SELECT * from `goods` as g inner join `order` as o ON (g.gid = o.gid)WHERE uid =$uid";
    }

    if($status){
        $sql="select * from `order` as o inner join `goods` as g  ON (o.gid = g.gid) WHERE uid ='$uid' and stu ='$status'";
    }
    $result = query($sql);
    echo json_encode($result,JSON_UNESCAPED_UNICODE);
     
?>