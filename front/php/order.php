<?php
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
    $uid = isset($_GET["uid"]) ? $_GET["uid"] : '';
    
    $sql="SELECT * from `goods` as g inner join `order` as o ON (g.gid = o.gid)WHERE uid =$uid";

    $result = query($sql);
    echo json_encode($result,JSON_UNESCAPED_UNICODE);
     
?>