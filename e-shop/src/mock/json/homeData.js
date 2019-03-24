
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

const productList=function(){
    return{
        msg:"success",
        code:200,
        data:runRandomTimes({min:1,max:8},function(){
            return{
                productName:"【设计师合作款】女装  双面针织大衣  416550",
                productDescription:"2019Uniqlo U 色彩新美学 摩登新经典",
                productPics:[
                    "https://www.uniqlo.cn/hmall/test/u0000000005573/main/first/1000/1.jpg",
                    "https://www.uniqlo.cn/hmall/test/u0000000005573/main/other1/1000/2.jpg",
                    "https://www.uniqlo.cn/hmall/test/u0000000005573/main/other2/1000/3.jpg",
                    "https://www.uniqlo.cn/hmall/test/u0000000005573/main/other3/1000/4.jpg",
                ],
                price:"5.00",
                num:2000,
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


export { recommandList,categoryList,productList};