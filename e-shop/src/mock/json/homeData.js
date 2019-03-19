
const Mock = require('mockjs') 
const Random=Mock.Random;


const recommandList=function(){


    return {
        msg:"success",
        code:200,
        data:runRandomTimes({min:3,max:5},function(){
            return{
                
                    "title":Random.csentence(5,7),
                    "img":Random.image('400x300',Random.color())
            } 
        }),    
}
}

const categoryList=function(){

    return {
        msg:"success",
        code:200,
        data:runRandomTimes({min:3,max:25},function(){
            return{
                categoryName:Random.word(5),
                categoryId:Random.natural(0,5),
                categoryCode:Random.natural(0,5)+'',
                parentId:3,
                categoryThumb:Random.image('100x100',Random.color()),
                categoryLevel:1,
                categoryStatus:1,   
            }
        })
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


export { recommandList,categoryList };