# vue-intermediate-study
- 인프런 캡틴판교 Vue.js 중급강좌
- vue-intermediate 실습

## 브랜치 소개
- vue-todo : 섹션 4까지 진행
- es6 : 섹션 10까지 진행
- vuex : vuex 섹션 12부터 진행
- vuex-helper : vuex 섹션 13부터 진행
- vuex-modules : vuex 섹션 14

### 프로젝트 구조화와 모듈화 방법 1
- ES6의 import & export 이용한 속성별 모듈화
```javascript
    import Vue from 'vue'
    import Vuex from 'vuex'
    import * as getters from 'store/getters.js'
    import * as mutations from 'store/mutations.js'
    import * as actions from 'store/actions.js'

    export const store = new Vuex.Store({
        state : {},
        getters : getters,
        mutations : mutations,
        actions : actions
    });
```