# vue-intermediate-study
- 인프런 캡틴판교 Vue.js 중급강좌
- vue-intermediate 실습

## 브랜치 소개
- vue-todo : 섹션 4까지 진행
- es6 : 섹션 10까지 진행
- vuex : vuex 섹션 12부터 진행
- vuex-helper : vuex 섹션 13부터 진행

### Vuex Helper
- Store에 있는 4가지 속성들을 간편하게 코딩하는 방법
> - state -> mapState
> - getters -> mapGetters
> - mutation -> mapMutations
> - actions -> mapActions

- 사용법
```javascript
   // App.vue
   // 모듈화된 파일에서 변수나, 함수 등의 단일 기능을 꺼내오는 경우에는 { }를 붙여야 합니다.
   // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import
   import {mapState} from 'vuex'
   import {mapGetters} from 'vuex'
   import {mapMutations} from 'vuex'
   import {mapActions} from 'vuex'

   export default {
      computed: {...mapState(['num']), ...mapGetters(['countedNum'])},
      methods: {...mapMutations(['clickBtn']), ...mapActions(['asyncClickBtn'])}
   }
```

- 꼭 spread operator 다음에 [] 만 사용하나?
> getters의 네이밍과 일치하는 경우엔 [''] 형식, 만약 TodoList.vue의 this.storedTodoItems 대신 this.items 처럼 네이밍이 다르면 ```...mapGetters({items: 'storedTodoItems'})``` 사용
```javascript
   // TodoList.vue
   <transition-group name="list" tag="ul">
        <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow"> 생략.. </li>

   export default {
    computed : {
        ...mapGetters(['storedTodoItems'])
    }

    // store.js
    getters: {
        storedTodoItems(state) {
            return state.todoItems;
        }
    },
   }
```

- 헬퍼의 유연한 문법
- - Vuex에 선언한 속성을 그대로 컴포넌트에 연결하는 문법
```javascript
    // 배열 리터럴
    ...mapMutations([
        'clickBtn', // clickBtn:'clickBtn' 
        'addNumber' // addNumber(인자) -> 따로 인자를 안적어줘도 같이 넘어간다.
    ])
```
- - Vuex에 선언한 속성을 컴포넌트의 특정 메서드에다가 연결하는 문법
```javascript
    // 객체 리터럴
    ...mapMutations({
        popupMsg : 'clickBtn' // 컴포넌트 메서드명 : store의 mutations 명
    })
```