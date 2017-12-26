<?php
/**
 * @Author: sherah
 * @Date:   2017-12-25 10:08:10
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-12-26 14:08:57
 */
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    include "DBHelper.php";
    $gid = isset($_GET["gid"]) ? $_GET["gid"] : '';
    $phone = isset($_GET["phone"]) ? $_GET["phone"] : '';
    $userid ="select uid from user where phone=$phone";
    if(query($userid)){
      $uid=query($userid)[0]->uid;   
    }
    $sql="select s.uid,s.gid,s.qty from shoppingCart as s ,user as u where u.phone=$phone and s.gid=$gid and u.uid=s.uid"; 
    $sql.=";select FOUND_ROWS() as rows";
    $sql.=";select sum(qty) as sum from shoppingcart where uid='$uid'";
    $result = multi_query_oop($sql);
     // 数组转为对象   
    function array2object($array) {
      if (is_array($array)) {
        $obj = new StdClass();
        foreach ($array as $key => $val){
          $obj->$key = $val;
        }
      }
      else { $obj = $array; }
      return $obj;
    }
    $obj = array2object($result);
    if($obj->data1){
        $data1=array2object($obj->data1[0]);
        $qty=(int)$data1->qty;      
    }
    else{
        $qty=1;
    } 
    $data2=array2object($obj->data2[0]);   
    if($data2->rows!="0"){
        $sql="update shoppingcart set qty=$qty+1 where uid='$uid' and gid='$gid'";
    }
    else if($data2->rows=="0"||!$result){
        $sql="insert into shoppingcart(uid,gid,qty) values($uid,$gid,$qty)";
    }
    $result =excute($sql);
    // echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>