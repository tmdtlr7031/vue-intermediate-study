# vue-intermediate-study
- 인프런 캡틴판교 Vue.js 중급강좌
- vue-intermediate 실습

## 브랜치 소개
- vue-todo : 섹션 4까지 진행
- es6 : 섹션 10까지 진행
- vuex : vuex 섹션 12부터 진행

### Vuex
- 설치 : npm i vuex@3.6.2 --save
- import 시 중괄호 여부
 ```javascript
    // 중괄호 필요 여부는 export에 default를 쓰느냐의 차이
    import { store } from './store/store'
 ```

- Vuex 기술요소
>> state : 여러 컴포넌트에 공유되는 데이터 ```data````
>> getters : 연산된 state 값을 접근하는 속성 ```computed````
>> mutations : state값을 변경하는 이벤트 로직, 메서드 ```methods````
>> action : 비동기 처리 로직을 선언하는 메서드 ```async methods````

