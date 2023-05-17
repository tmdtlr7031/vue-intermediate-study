import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'

// use 사용이유 : vue를 사용하는 모든 영역에 특정 기능 추가하고 싶을때 (글로벌 function 추가하려 할 때)
Vue.use(Vuex);

export const store = new Vuex.Store({
    modules : {
        todoApp //todoApp : todoApp
    }
});