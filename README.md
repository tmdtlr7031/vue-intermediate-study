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
