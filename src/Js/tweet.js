import { getDatabase, ref, onValue, get, child, set } from "firebase/database";

export const loadFollowers = (userid, message, email, photoURL, user) => {
  let fm = getDatabase();

  const dbRef = ref(getDatabase());

  // .then((snapshot) => {
  //   console.log(snapshot.val());
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val());
  //   } else {
  //     console.log("No data available");
  //   }
  // })
  // .catch((error) => {
  //   console.error(error);
  // });

  const db = getDatabase();
  const now = Date.now();

  set(
    ref(
      db,
      `tweets/${userid}` + `/${userid}${Math.floor(Math.random() * 10000000)}`
    ),
    {
      message: message,
      created_at: now,
      email: email,
      photoURL: photoURL,
      user: user,
    }
  );
};

export const loadTweets = (id, image, user, email) => {
  let tweetsArr;
  let followersArr;
  let userArr;
  let idArr = [];
  let totalTweets;
  let overallTweets = [];
  const dbRef = ref(getDatabase());
  get(child(dbRef, `tweets/${id}`))
    .then((snapshot) => {
      // console.log(snapshot.val());
      if (snapshot.exists()) {
        let tweets = snapshot.val();
        tweetsArr = Object.values(tweets);
        totalTweets = tweetsArr;
        console.log(tweetsArr);
        get(child(dbRef, `followers/${id}`)).then((snapshot) => {
          // console.log(snapshot.val());
          if (snapshot.exists()) {
            const objectVal = snapshot.val();

            followersArr = Object.values(objectVal);
            console.log(followersArr);
            get(child(dbRef, `users`)).then((snapshot) => {
              // console.log(snapshot.val());
              if (snapshot.exists()) {
                const objectVal = snapshot.val();

                userArr = Object.values(objectVal);

                console.log(userArr);
                for (let i = 0; i < followersArr.length - 1; i++) {
                  for (let j = 0; j < userArr.length; j++) {
                    if (followersArr[i].usr_email === userArr[j].email) {
                      idArr.push(userArr[j].uid);
                    }
                  }
                }
                console.log(idArr);

                get(child(dbRef, `tweets/${idArr[0]}`)).then((snapshot) => {
                  if (snapshot.exists()) {
                    let objextVal = snapshot.val();
                    let objextValArr = Object.values(objextVal);
                    totalTweets = tweetsArr.concat(objextValArr);
                    for (let k = 1; k < idArr.length; k++) {
                      get(child(dbRef, `tweets/${idArr[k]}`)).then(
                        (snapshot) => {
                          if (snapshot.exists()) {
                            totalTweets = totalTweets.concat(
                              Object.values(snapshot.val())
                            );
                          } else {
                            console.log("no data");
                          }
                        }
                      );
                    }
                  } else {
                    console.log("no tweet available");
                  }
                  for (let l = 0; l < totalTweets.length; l++) {
                    if (
                      totalTweets[l].message &&
                      totalTweets[l].message !== ""
                    ) {
                      overallTweets.push(totalTweets[l]);
                    }
                  }
                  console.log(totalTweets);

                  console.log(overallTweets);
                  let html;

                  overallTweets.forEach((tweet) => {
                    const ul = document.querySelector(
                      ".twitter__main-page-content-messages"
                    );
                    html = `
                   <li class="twitter__main-page-content-messages-item">
                <div class="twitter__main-page-content-messages-item-userIcon">
                  <img src="${tweet.photoURL}" width="" />
                </div>
                <div
                  class="twitter__main-page-content-messages-item-second-item"
                >
                  <h1
                    class="twitter__main-page-content-messages-item-second-item-name"
                  >
                    ${tweet.user}
                  </h1>
                  <h2
                    class="witter__main-page-content-messages-item-second-item-email"
                  >
                    ${tweet.email}
                  </h2>
                  <div
                    class="twitter__main-page-content-messages-item-second-item-messsage"
                  >
                    <p
                      class="twitter__main-page-content-messages-item-second-item-messsage-text"
                    >
                      ${tweet.message}
                    </p>
                  </div>
                </div>
              </li>`;
                    ul.innerHTML += html;
                  });
                });
              } else {
                console.log("No data available");
              }
            });
          }
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
// get the users followers tweets
