import Vue from 'vue'
import Vuex from 'vuex'

// use 사용이유 : vue를 사용하는 모든 영역에 특정 기능 추가하고 싶을때 (글로벌 function 추가하려 할 때)
Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') { // 불필요한 값 제외
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
};

export const store = new Vuex.Store({
    state: {
        todoItems : storage.fetch()
    }
});