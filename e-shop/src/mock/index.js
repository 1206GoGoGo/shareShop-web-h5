const Mock=require('mockjs');

import {recommandList,categoryList} from './json/homeData'

Mock.mock('pro/info/getList/','get',recommandList);
Mock.mock('pro/category/getList','get',categoryList);
