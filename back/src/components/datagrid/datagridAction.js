export function getData(_url, _params = {}){
    return {
        type:'requested',
        url:_url,
        params:_params
    }
}

//改变页码以及类型的查询
export function onPage(_url, _page, _type, _content, _states){
    // var _params = Object.assign({}, _page, _opt);
    var _params = {};
    _params[_type] = _content;
    _params.page = _page;
    _params.status = _states
    return {
        type:'requested',
        url:_url,
        params:_params
    }
}

//修改后保存内容的代码
export function saveData(_url, _arr, _status){
    var params = JSON.parse(JSON.stringify(_arr[0]));
    params.status = _status;
    params.save = 'save';
    params.handle = 'normal';
    return {
        type:'requested',
        url:_url,
        params:params
    }
}

//删除内容
export function delData(_url, _id, _status){
    var params = new Object();
    params.id = _id;
    params.status = _status;
    params.handle = 'delete';
    return {
        type:'requested',
        url:_url,
        params:params,
    }
}

//添加数据
export function addData(_url, _params, _status){
    _params.status = _status;
    _params.handle = 'insert';
    return {
        type:'requested',
        url:_url,
        params:_params,
    }
}
