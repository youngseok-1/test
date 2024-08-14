// prototype feature
const user = {
    id : 'user',
    login : function() {
        console.log(`${this.id}님 로그인 되었습니다.`)
    }
};

const student = {
    __proto__ : user
};

// 프로토타입은 프로퍼티를 읽을 때만 사용하며 프로퍼티를 추가, 수정, 삭제하는 연산은 객체에 직접 한다.
student.id = 'user01';

// login 메소드 내의 this는 프로토 타입에 영향을 받지 않는다.
student.login();

for(let prop in student) {
    // for in 반복문은 상속 프로퍼티도 순회 대상에 포함시킨다.
    console.log(prop);

    let isOwn = student.hasOwnProperty(prop);

    if(isOwn) {
        console.log(`객체 자신의 프로퍼티 ${prop}`);
    } else {
        console.log(`상속 프로퍼티 ${prop}`);
    }
}