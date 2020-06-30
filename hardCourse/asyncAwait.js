// callback.js -> promise 로 Refactoring! ( 비교하며 복습해보기 )


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


// Async / Await
async function displayUser() {
  try {
    // throw Error;
    const logInUser = await loginUser('blair@gmail.com', 'blair');
    const videos = await getUserVideos(logInUser.mail);
    const detail = await videoDetail(videos[0]);
    console.log(detail);
  } catch (err) {
    console.log("에러 : " + err);
  }
}

displayUser();
