const Mock=require('mockjs');

import {recommandList} from './json/homeData'

Mock.mock('pro/info/getList/','get',recommandList);
