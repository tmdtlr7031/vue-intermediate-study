# vue-intermediate-study
- 인프런 캡틴판교 Vue.js 중급강좌
- vue-intermediate 실습

## 브랜치 소개
- vue-todo : 섹션 4까지 진행
- es6 : 섹션 10까지 진행

## ES6 간략 정리
- 코드팩토리 강의 들었던거에서 좀 더 자세히 학습했으니 자세한건 그쪽 플젝 참고
- const, let, arrow함수 넘어감

---

#### 향상된 객체 리터럴
1) 객체의 속성을 메서드로 사용할 때 ```function``` 예약어 생략하고 생성 가능
```javascript
    var dictionary = {
        // ES5
        lookup : function() {
            console.log("find word");
        },
        // ES6
        lookup2() {
            console.log("find word");
        }
    }
```

2) 객체의 속성명과 갑 명이 동일할 때 축약 가능
```javascript
    var figures = 10;
    var dictionary = {
        // figures : figures,
        figures
    }
```

#### Modules - 자바스크립트 모듈화 방법
- 호출되기 전까지는 코드 실행과 동작을 하지 않는 특징
- 왜쓰냐? -> 재사용성이 뛰어난 기능을 묶어서 가져다 쓰기 위해
```javascript
    // libs/math.js
    export function sum(x,y) {
        return x + y;
    }
    
    export var pi = 3.141593;

    // main.js
    import {sum} from 'libs/math.js';
    sum(1,2);
```