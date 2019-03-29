const Mock=require('mockjs');

import {recommandList,categoryList,productList} from './json/homeData'

Mock.mock('pro/info/getList','get',recommandList);
Mock.mock('pro/category/getList','get',categoryList);
Mock.mock('pro/product/getList','get',productList);
