<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

/**
 * 향상된 객체 리터럴
 * - 객체의 속성을 메서드로 사용할 때 function 예약어 생략 가능
 * - addOneItem : function(todoItem) { ...} => addOneItem(todoItem) 과 같은 의미
 */

export default {
  /**
   * 향상된 객체리터럴 2
   * - 객체의 속성명과 값 명이 동일한 경우 축약 가능
   * - 'TodoHeader' : TodoHeader => TodoHeader
   */
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F6;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }

</style>
