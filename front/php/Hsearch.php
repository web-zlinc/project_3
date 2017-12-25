<?php
/**
 * @Author: leon
 * @Date:   2017-12-22 14:10:27
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-12-25 19:32:16
 */

  // 跨域请求处理  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');

    include 'DBHelper.php';

    $keyWord = isset($_GET["keyword"]) ? $_GET["keyword"] : '';

    if($keyWord){
         $sql = "select * from goods where (name like '%".$keyWord."%') or (short_name like '%".$keyWord."%') order by name,short_name "; 
    }
   
    $result = query($sql);

    // var_dump($result);
    echo json_encode($result, JSON_UNESCAPED_UNICODE); 

?>