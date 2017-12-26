export function getData(_url, _params = {}){
    if(_params.handle){
        return {
            types:['dataGridbeforeRequest','dataGridRequestedOne','dataGridRequestedError'],
            url:_url,
            params:_params
        }
    }else{
        return {
            types:['dataGridbeforeRequest','dataGridRequested','dataGridRequestedError'],
            url:_url,
            params:_params
        }
    }
}
