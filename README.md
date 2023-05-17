# vue-intermediate-study
- 인프런 캡틴판교 Vue.js 중급강좌
- vue-intermediate 실습

## 브랜치 소개
- vue-todo : 섹션 4까지 진행
- es6 : 섹션 10까지 진행
- vuex : vuex 섹션 12부터 진행
- vuex-helper : vuex 섹션 13부터 진행
- vuex-modules : vuex 섹션 14 - 스토어 속성 모듈화 방법

### 프로젝트 구조화와 모듈화 방법 2
- 앱이 비대해져서 1개의 store로는 관리가 힘들 때 ```modules``` 속성 사용
```javascript
    // store.js
    import Vue from 'vue'
    import Vuex from 'vuex'
    import todo from 'modules/todo.js'

    export const store = new Vuex.Store({
        modules : {
            moduleA : todo, // 모듈 명칭 : 모듈 파일명
            todo // 만약 같은 네이밍이 같은 경우 축약 (== todo : todo)
        }
    });

    // todo.js
    const state = {}
    const getters = {}
    const mutations = {}
    const actions = {}
```

- ```default``` 관련 글
> https://ko.javascript.info/import-export#ref-4122