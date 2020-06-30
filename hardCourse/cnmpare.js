// Callback(hell) - 중첩이 심해서 가독성이 안좋다.
const user = loginUser("blair@gmail.com", "blair", (userEmail) => {
  console.log(userEmail);
  getUserVideos(userEmail.mail, (videos) => {
    console.log(videos);
    videoDetail(videos[0], (title) => {
      console.log(title);
    })
  });
});


// Promise - 콜백지옥에 비해 무지 짧아졌다.
loginUser('blair@gmail.com', 'blair')
  .then(user => getUserVideos(user.mail))
  .then(videos => videoDetail(videos[0]))
  .then(detail => console.log(detail));


// Async / Await - 코드가 동기처럼 보이고 매우 직관적이다!
async function displayUser() {
  try {
    const logInUser = await loginUser('blair@gmail.com', 'blair');
    const videos = await getUserVideos(logInUser.mail);
    const detail = await videoDetail(videos[0]);
    console.log(detail);
  } catch (err) {
    console.log("에러 : " + err);
  }
}