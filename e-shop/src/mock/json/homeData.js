
const Mock = require('mockjs') 
const Random=Mock.Random;





const recommandList=function(){


    return {
        msg:"success",
        code:200,
        "data":runRandomTimes({min:3,max:5},function(){
            return{
                
                    "title":Random.csentence(5,7),
                    "img":Random.image('400x300',Random.color(),Random.color()+'-')
            } 
        }),    
}
}



//重复执行某个函数
const runRandomTimes=function(range,fun){
    
    var retData=[];
    var tepData={};

    for(var a=0;a<Random.natural(range.min,range.max);a++){
        tepData=fun();
        retData.push(tepData);
    }

    return retData;

}


export { recommandList };