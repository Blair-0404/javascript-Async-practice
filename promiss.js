const posts = [
  {title: "Post One", body: "This is post one"},
  {title: "Post Two", body: "This is post two"}
];

function getPosts() {
  setTimeout(() => {
    let output = '';

    posts.forEach((post, postIdx) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000)
}

function createPost(post) {
  return new Promise((res, rej) => { // 프라미스 선언부
    setTimeout(() => {
      posts.push(post);

      const err = false;

      if (!err) {
        res()
      } else {
        rej('Error : Something went wrong');
      }
    }, 2000)
  })
}

// // 프라미스 실행부
// createPost({title: "Post Three", body: "This is post three"})
// .then(getPosts)
// .catch(err => console.log('에러 : ' + err));

// // Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((res, rej) => {
//   setTimeout(res, 2000, 'Goodbye')
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
//
// Promise.all([promise1, promise2,promise3, promise4]).then((values) => console.log(values));



// // Async / Await
// async function init() {
//   await createPost({title: "Post Three", body: "This is post three"});
//
//   getPosts();
// }
// init()

// // Async / Await / Fetch
// async function fetchUsers() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const datas = await res.json();
//   // console.log(datas);
//
//   datas.forEach((data) => {
//     posts.push({title: data.name, body: data.email});
//   });
//   // console.log(posts);
//   getPosts();
// }
//
// fetchUsers();