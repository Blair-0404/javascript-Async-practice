// callback.js -> promise 로 Refactoring! ( 비교하며 복습해보기 )

console.log('Start');

function loginUser(email, name) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Now we have the data");
      res({mail: email})
    }, 2000)
  })
}

function getUserVideos(email) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(['video1', 'video2', 'video3']);
    }, 1000)
  })
}

function videoDetail(video) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('title of the video');
    }, 1000)
  })
}

// // 콜백 지옥
// const user = loginUser("blair@gmail.com", "blair", (userEmail) => {
//   console.log(userEmail);
//   getUserVideos(userEmail.mail, (videos) => {
//     console.log(videos);
//     videoDetail(videos[0], (title) => {
//       console.log(title);
//     })
//   });
// });
// console.log(user);

// 콜백지옥에 비해 무지 짧아졌다.
loginUser('blair@gmail.com', 'blair')
  .then(user => getUserVideos(user.mail))
  .then(videos => videoDetail(videos[0]))
  .then(detail => console.log(detail));

console.log('Finish');
