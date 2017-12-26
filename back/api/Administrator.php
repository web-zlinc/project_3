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
    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    $type = isset($_POST['type']) ? $_POST['type'] : '';    
    
    if($status == 'query'){
        $sql = 'select SQL_CALC_FOUND_ROWS * from admin where ';
        
        if($id){
            $sql .='id='."'".$id."'".' and ';
        }
        if($username){
            $sql .='username='."'".$username."'".' and ';
        }
        if($type){
            $sql .='type='."'".$type."'".' and ';
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
        $sql = 'update admin set ';
        
        if($username){
            $sql .="username='{$username}'";
        }
        if($password){
            $sql .=",password='{$password}'";
        }
        if($type){
            $sql .=",type='{$type}'";
        }
        
        $sql .=" where id={$id}";
        
        // echo $sql;
        $result = excute_oop($sql);
        
        if($result == '1'){
            echo 'updateOk';
        }
    }else if($status == 'delete'){
        $sql = 'delete from admin where id='.$id;
        
        $result = excute_oop($sql);
        
        if($result == '1'){
            echo 'deleteOk';
        }
    }else if($status == 'insert'){
        $sql = 'insert into admin(`username`,`password`,`type`)';
        $sql .=' values ('."'".$username."'".','."'".$password."'".','."'".$type."'".')';

        
        $result = excute_oop($sql);

        if($result == '1'){
            echo 'insertOk';
        }

    }

?>