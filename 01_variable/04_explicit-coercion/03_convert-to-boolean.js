/* 03_convert-to-boolean (불리언 타입으로 변환) */
console.log('==== 논리 타입으로 변환 ====');

// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(Boolean('JavaScript')); // true
console.log(Boolean(''));   // false
console.log(Boolean(1));    // true
console.log(Boolean(0));    // false
console.log(Boolean(NaN));  // false
console.log(Boolean(Infinity)); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined));    // false
console.log(Boolean({}));   // true
console.log(Boolean([]));   // true

// 2. ! 부정 논리 연산자를 두 번 사용하는 방법
console.log('==== 부정 논리 연산자 ====');
console.log(!!'JavaScript');
console.log(!!'');
console.log(!!0);
console.log(!!NaN);
console.log(!!Infinity);
console.log(!!null);
console.log(!!undefined);
console.log(!!{});
console.log(!![]);
