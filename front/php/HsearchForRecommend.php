<?php
/**
 * @Author: leon
 * @Date:   2017-12-22 14:10:27
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-12-22 16:08:21
 */

  // 跨域请求处理  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');

    include 'DBHelper.php';

    $sql = "select name,price,details,images,standard from goods"; 
   
    $result = query($sql);

    // var_dump($result);
    echo json_encode($result, JSON_UNESCAPED_UNICODE); 

?>