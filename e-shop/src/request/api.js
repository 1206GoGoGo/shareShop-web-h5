
export default{

    category:{
        getFirstLevel:'pro/category/getList',
        getChildrenByParentId:'/pro/category/getListByParentId',
    },
    user:{
        register:'member/login/add',
        login:'member/login/in',
    },
    search:{
        byKeyword:'pro/info/search',                //按商品名
        byCategory:'pro/info/getListByCategorySearch',    //按分类
    },
    product:{
        getDetailById:'pro/info/getDetail',
        getDetailByCode:'pro/info/getDetailByCode',
        getList:'pro/info/getList'
    },
    cart:{
        addToCart:'member/shopcart/add'
    }


}