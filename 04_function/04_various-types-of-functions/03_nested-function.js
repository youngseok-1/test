/* 03_nested-function (중첩 함수) 
함수 내부에 정의 된 함수를 중첩 함수 또는 내부 함수라고 한다.
중첩 함수를 포함하는 함수는 외부 함수라고 한다.
일반적으로 중첩 함수는 자신을 포함하는 외부 함수를 돕는 헬퍼 함수의 역할을 한다.
*/

function outer() {
    var outerVal = '외부 함수';

    function inner() {
        var innerVal = '내부 함수';

        // 외붑 함수의 변수를 참조할 수 있다.
        console.log(outerVal, innerVal);
    }

    inner();
}

outer();

// inner();

// ES6부터 함수 정의는 문이 위치할 수 있는 문맥이면 어디든지 가능하다.
// 단, if, for문 등의 코드 블록에서 함수 선언문을 통해 함수를 정의하는 것은
// 호이스팅으로 인해 혼란이 발생할 수 있으니 바람직하지 않다.