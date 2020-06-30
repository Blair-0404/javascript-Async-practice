// 프라미스는 객체이다.
// 선언부, 실행부가 있음

const promise = new Promise((res, rej) => { // 프라미스 선언부
  setTimeout(() => {
    console.log('got ths user');
    // res({user: 'blair'});
    rej(new Error('User not logged in'));
  }, 2000)
});

promise.then(user => { // 프라미스 실행부
  console.log(user);
}).catch(err => console.log(err.message));

