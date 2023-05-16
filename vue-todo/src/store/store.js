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
    },
    mutations: {
        addOneItem(state, payload) {
            // 저장하는 로직
            const obj = {completed : false, item: payload};
            localStorage.setItem(payload, JSON.stringify(obj)) // 개발자도구 > 애플리케이션 > 로컬스토리지
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggleOneItem(state, payload) {
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed; 

            // localStorage는 update가 없어서 삭제 후 추가
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        }
    }
});