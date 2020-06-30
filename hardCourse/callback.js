// 콜백 & 콜백지옥

console.log('Start');

function loginUser(email, name, cb) {
  setTimeout(() => {
    console.log("Now we have the data");
    cb({mail: email})
  }, 2000)
}

function getUserVideos(email, cb) {
  setTimeout(() => {
    cb(['video1', 'video2', 'video3']);
  }, 1000)
}

function videoDetail(video, cb) {
  setTimeout(() => {
    cb('title of the video');
  }, 1000)
}

// 콜백 지옥
const user = loginUser("blair@gmail.com", "blair", (userEmail) => {
  console.log(userEmail);
  getUserVideos(userEmail.mail, (videos) => {
    console.log(videos);
    videoDetail(videos[0], (title) => {
      console.log(title);
    })
  });
});

console.log(user);
console.log('Finish');
