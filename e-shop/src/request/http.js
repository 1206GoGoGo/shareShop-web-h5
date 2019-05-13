import axios from 'axios'

const TIME_OUT_MS= 10 * 1000 ;  // 请求超时时间
//const BASE_URL='http://112.74.165.55:8080/shareshop/';
//const BASE_URL='http://10.120.203.64:8080/shareshop/';
const BASE_URL='/api';

let handleURL = function(url){
    url=BASE_URL +'/'+url;
    return  url;
} 

let handleParams = function(data){


    return data;
}

export default {

    //封装的 POST 方法
     post:function(url,data,response,exception){
        axios({
            method:'post',
            url:handleURL(url),
            data:handleParams(data),
            timeout:TIME_OUT_MS,
            headers:{
                'Content-Type':'application/json; charset=UTF-8',
                'Access-Control-Allow-Orgin':'*',
            },
        }).then((result)=>{
            response(result);
        }).catch((error)=>{
            if(exception){
                exception(error);
            }else{
                console.log(error)
            }
        })

    },

    //封装的get请求
    get(url,params,response,exception){
        axios({
            method:'get',
            url:handleURL(url),
            params:params,
            timeout:TIME_OUT_MS,
            headers:{
                'Content-Type':'application/json; charset=UTF-8'
            }

        }).then((result)=>{
            response(result);
        }).catch((error)=>{
            if(exception){
                exception(error);
            }else{
                console.log(error);
            }
        })
    }

}