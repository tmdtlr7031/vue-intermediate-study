const addOneItem = (state, payload) => {
    // 저장하는 로직
    const obj = {completed : false, item: payload};
    localStorage.setItem(payload, JSON.stringify(obj)) // 개발자도구 > 애플리케이션 > 로컬스토리지
    state.todoItems.push(obj);
}

const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
}

const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed; 

    // localStorage는 update가 없어서 삭제 후 추가
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}
const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export {addOneItem, removeOneItem, toggleOneItem, clearAllItems}