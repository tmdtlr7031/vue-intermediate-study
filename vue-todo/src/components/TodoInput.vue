<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo"> <!-- enter 누를때 addTodo 실행 -->
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
        <i class="fa-solid fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">
            경고!
            <span @click="showModal =  false">
                <i class="closeModalBtn fa-solid fa-xmark"></i>
            </span>
        </h3>
        <div slot="body">내용을 입력하세요</div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/AlertModal.vue'

export default {
    data: function() {
        return {
            newTodoItem : "",
            showModal: false
        }
    },
    methods: {
        addTodo : function() {
            if (this.newTodoItem !== '') { // 빈 값 입력 제외
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            }else{
                this.showModal = !this.showModal;
            }
        },
        clearInput: function() {
            this.newTodoItem = '';
        }
    },
    components: {
        Modal: Modal
    }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50ox;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
    .closeModalBtn {
        color: #42b983;
    }
</style>