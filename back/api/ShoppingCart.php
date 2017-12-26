<?php
    include 'DBHelper.php';
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    $page = isset($_POST["page"]) ? $_POST["page"] : 1;
    $limit = isset($_POST["limit"]) ? $_POST["limit"] : 7;

    $status = isset($_POST['status']) ? $_POST['status'] : '';

    $id = isset($_POST['id']) ? $_POST['id'] : '';
    $uid = isset($_POST['uid']) ? $_POST['uid'] : '';
    $gid = isset($_POST['gid']) ? $_POST['gid'] : '';
    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $qty = isset($_POST['qty']) ? $_POST['qty'] : '';
    
    
    if($status == 'query'){
        $sql = 'select SQL_CALC_FOUND_ROWS * from shoppingcart where ';
        
        if($id){
            $sql .='id='."'".$id."'".' and ';
        }
        if($uid){
            $sql .='uid='."'".$uid."'".' and ';
        }
        if($gid){
            $sql .='gid='."'".$gid."'".' and ';
        }
        if($username){
            $sql .='username='."'".$username."'".' and ';
        }
        if($qty){
            $sql .='qty='."'".$qty."'".' and ';
        }
       
        $sql .= '1=1';
        $sql .= ' limit ';
        $sql .= ($page - 1)*$limit;
        $sql .= ', ';
        $sql .= $limit;
    
        $sql .= ';select FOUND_ROWS() as rowsCount;';
    
        $result = multi_query_oop($sql);
        
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }else if($status == 'update'){
        $sql = 'update shoppingcart set ';
        
        if($uid){
            $sql .="uid='{$uid}'";
        }
        if($gid){
            $sql .=",gid='{$gid}'";
        }
        if($username){
            $sql .=",username='{$username}'";
        }
        if($qty){
            $sql .=",qty='{$qty}'";
        }
        
        $sql .=" where id={$id}";
        
        // echo $sql;
        $result = excute_oop($sql);
        
        if($result == '1'){
            echo 'updateOk';
        }
    }else if($status == 'delete'){
        $sql = 'delete from shoppingcart where id='.$id;
        
        $result = excute_oop($sql);
        
        if($result == '1'){
            echo 'deleteOk';
        }
    }else if($status == 'insert'){
        $sql = 'insert into shoppingcart(`uid`,`gid`,`username`,`qty`)';
        $sql .=' values ('."'".$uid."'".','."'".$gid."'".','."'".$username."'".','."'".$qty."'".')';

        
        $result = excute_oop($sql);

        if($result == '1'){
            echo 'insertOk';
        }

    }

?>