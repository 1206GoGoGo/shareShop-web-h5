import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const state={
    user:{
        username:'',
        nickname:'',
    },
    isLogined:false,
    num_productsInCart:0,

};
const mutations={
    update_num_ProductsInCart(state,payload){
        state.num_productsInCart=payload.num;
    }


};

const store=new Vuex.Store({
    state,
    mutations,

});

export default store;