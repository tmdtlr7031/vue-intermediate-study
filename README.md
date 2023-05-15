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
> - state : 여러 컴포넌트에 공유되는 데이터 ```data```
> - getters : 연산된 state 값을 접근하는 속성 ```computed```
> - mutations : state값을 변경하는 이벤트 로직, 메서드 ```methods```
> - action : 비동기 처리 로직을 선언하는 메서드 ```async methods```

- state와 data 구분은 언제?
> https://www.inflearn.com/questions/82002/state%EC%A7%88%EB%AC%B8%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4


#### getters vs mutations
- getters는 값을 접근할 때 mutations는 값을 변경할 때 사용
- mutations는 state 값을 변경할 수 있는 **유일한 방법**이자 메서드며 ```commit()``` 으로 동작시킨다

