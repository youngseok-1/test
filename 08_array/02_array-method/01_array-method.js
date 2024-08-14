// 배열 메소드
const arr = [];
// 배열의 생성자 함수 Array
console.log(arr.constructor == Array);


// Array.prototype.indexOf
// indexOF : 배열에서 요소가 위치한 인덱스를 리턴 (앞에서부터)
// lastIndexOF : 배열에서 요소가 위치한  마지막 인덱스를 리턴 (뒤에서부터)
// includes : 배열에 해당 요소 포함 여부 리턴

const foodlist = ['물회', '삼계탕', '냉면', '수박', '물회'];

console.log(foodlist.indexOf('물회'));
console.log(foodlist.indexOf('물회', 1)); // 1번쨰 인덱스부터 찾음
console.log(foodlist.indexOf('삼겹살')); // 없어서 -1을 리턴

console.log(foodlist.lastIndexOf('물회'));
console.log(foodlist.lastIndexOf('물회', 1));
console.log(foodlist.lastIndexOf('삼겹살',)); // 없어서 -1을 리턴

console.log(foodlist.includes('물회'));
console.log(foodlist.includes('삼겹살'));

// Array.prototype.push : 배열의 맨 뒤에 요소 추가
// Array.prototype.pop : 배열의 맨 뒤에 요소 제거
const chineseFood = ['짜장면', '짬뽕', '우동']

console.log(chineseFood);

chineseFood.push('탕수육');
console.log(chineseFood);

chineseFood.pop();
console.log(chineseFood);
chineseFood.pop();
console.log(chineseFood);

// Array.prototype.unshift : 배열의 맨 앞에 요소 추가 
// Array.prototype.shift : 배열의 맨 앞 요소 제거 후 반환
const chickenList = ['양념치킨', '후라이드', '파닭'];
console.log(chickenList)
chickenList.unshift('간장치킨')
chickenList.unshift('마늘치킨')

console.log(chickenList)

chickenList.shift();
chickenList.shift();
chickenList.shift();

console.log(chickenList);

// Array.prototype.concat : 두 개 이상의 배열을 결합
const idol1 = ['아이브', '오마이걸']
const idol2 = ['트와이스', '에스파']
const idol3 = ['블랙핑크', '레드벨벳']

const mix = idol1.concat(idol2);
console.log(mix);

const mix2 = idol3.concat(idol1, idol2)
console.log(mix2);


// Array.prototype.slice : 배열의 요소 선택 잘라내기
// Array.prototype.splice : 배열의 index 위치의 요소 제거 및 추가
const front = ['HTML', 'CSS', 'JavaScript', 'React']
console.log(front.slice(1, 3));
console.log(front); // slice 메소드는 원본 배열에 영향을 주지 않는다.

// 인덱스 3에서 시작해서 1개 요소를 제거하고 그자리에 "Vue"를 추가
console.log(front.splice(3, 1, 'Vue'));
console.log(front) // splice 메소드는 원본 배열에 영향을 줌.

// Array.prototype.join : 배열을 구분자로 결합하여 문자열로 반환
const snacklist = ['사탕','초콜릿','껌','과자'];
console.log(snacklist.join('/'));

// Array.prototype.reverse : 배열의 순서를 뒤집음 
console.log([1,2,3,4,5].reverse());
