<template>
  <div>
    <!-- name 은 하단의 css 클래스 transition class 와 연관-->
    <transition-group name="list" tag="ul">
        <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
            <span v-on:click="toggleComplete({todoItem, index})">
                <i class="checkBtn fa-solid fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}"></i>
            </span>
            <!-- todoItem.completed true 일 때 textCompleted 클래스 동적으로 추가 -->
            <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
            <!-- <span class="removeBtn" v-on:click="removeTodo(todoItem, index)"> -->
                <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
                <i class="fa-solid fa-trash"></i>
            </span>
        </li>
    </transition-group>
  </div>
</template>

<script>

import {mapGetters, mapMutations} from 'vuex'

export default {
    methods: {
        /**
         * helper쓰면 별도 선언없어도 <span class="removeBtn" v-on:click="removeTodo(todoItem, index)"> 에서 removeTodo의 파라미터 그대로 들고감
         * 하지만 위에서는 파라미터가 2개지만 this.$store.commit('removeOneItem', {todoItem, index}); 에서 보듯 실제로 넘기는 곳에선 객체로 묶어서 하나만 보내기 때문에 맞춰줘야함
         */
        ...mapMutations({
            removeTodo:'removeOneItem',
            toggleComplete:'toggleOneItem'
        })

        // removeTodo(todoItem, index) {
        //     this.$store.commit('removeOneItem', {todoItem, index});
        // },

        // toggleComplete(todoItem, index) {
        //     this.$store.commit('toggleOneItem', {todoItem, index});
        // }
    },
    computed : {
        ...mapGetters(['storedTodoItems'])
    }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }
    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .checkBtnCompleted {
        color: #b3adad;
    }
    .textCompleted {
        text-decoration: line-through;
        color: #b3adad;
    }
    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }

    /* 리스트 아이템 트랜지션 효과 */
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>