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
  let followerTweet;
  let fllowerTweetArr = [];
  let snapshotStateArr;
  let currentStateArr = [];
  let lihtml;
  let html;
  const ul = document.querySelector(".twitter__main-page-content-messages");
  // const recursive = (num) => {
  //   if (num === idArr.length - 1) {
  //     get(child(dbRef, `tweets/${idArr[num]}`)).then((snapshot) => {
  //       if (snapshot.exists()) {
  //         totalTweets = totalTweets.concat(Object.values(snapshot.val()));
  //       } else {
  //         console.log("no data");
  //       }
  //     });

  //     return;
  //   } else {
  //     get(child(dbRef, `tweets/${idArr[num]}`)).then((snapshot) => {
  //       if (snapshot.exists()) {
  //         totalTweets = totalTweets.concat(Object.values(snapshot.val()));
  //       } else {
  //         console.log("no data");
  //       }
  //     });
  //     console.log(totalTweets);

  //     recursive(num++);
  //   }
  // };
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
                idArr.forEach((tweet) => {
                  get(child(dbRef, `tweets/${tweet}`)).then((snapshot) => {
                    totalTweets = totalTweets.concat(
                      Object.values(snapshot.val())
                    );
                  });
                });
                // idArr.forEach((tweet) => {
                //   console.log(totalTweets);
                //   const db = getDatabase();
                //   const starCountRef = ref(db, `tweets/${tweet}`);
                //   onValue(starCountRef, (snapshot) => {
                //     const data = snapshot.val();
                //     snapshotStateArr = Object.values(data);

                //     snapshotStateArr.pop(snapshotStateArr[0]);
                //     console.log(snapshotStateArr);
                //     snapshotStateArr.sort((a, b) => {
                //       return new Date(a.created_at) < new Date(b.created_at)
                //         ? 1
                //         : -1;
                //     });
                //     console.log(snapshotStateArr[0]);
                //     totalTweets.push(snapshotStateArr[0]);
                //     for (let l = 0; l < totalTweets.length; l++) {
                //       if (
                //         totalTweets[l].message &&
                //         totalTweets[l].message !== "" &&
                //         totalTweets[l] !== undefined
                //       ) {
                //         currentStateArr.push(totalTweets[l]);
                //       }
                //     }
                //     currentStateArr.sort((a, b) => {
                //       return new Date(a.created_at) < new Date(b.created_at)
                //         ? 1
                //         : -1;
                //     });
                //     console.log(currentStateArr);

                //     console.log(data);
                //   });
                // });

                get(child(dbRef, `tweets/${idArr[0]}`)).then((snapshot) => {
                  // if (snapshot.exists()) {
                  //   let objextVal = snapshot.val();
                  //   let objextValArr = Object.values(objextVal);
                  //   console.log(objextValArr);
                  //   // totalTweets = totalTweets.concat(objextValArr);
                  //   console.log(totalTweets);
                  //   for (let k = 1; k < idArr.length; k++) {
                  //     console.log(k);
                  //     get(child(dbRef, `tweets/${idArr[k]}`)).then(
                  //       (snapshot) => {
                  //         followerTweet = Object.values(snapshot.val());
                  //       }
                  //     );
                  //     console.log(totalTweets);
                  //   }
                  //   console.log(totalTweets);
                  // } else {
                  //   for (let k = 1; k < idArr.length; k++) {
                  //     get(child(dbRef, `tweets/${idArr[k]}`)).then(
                  //       (snapshot) => {
                  //         // totalTweets = totalTweets.concat(
                  //         //   Object.values(snapshot.val())
                  //         // );
                  //       }
                  //     );
                  //     console.log(totalTweets);
                  //   }
                  //   console.log("no tweet available");
                  // }
                  for (let l = 0; l < totalTweets.length; l++) {
                    if (
                      totalTweets[l].message &&
                      totalTweets[l].message !== "" &&
                      totalTweets[l] !== undefined
                    ) {
                      overallTweets.push(totalTweets[l]);
                    }
                  }
                  console.log(totalTweets);

                  overallTweets.sort((a, b) => {
                    return new Date(a.created_at) < new Date(b.created_at)
                      ? 1
                      : -1;
                  });

                  console.log(overallTweets);
                  idArr.forEach((tweet) => {
                    console.log(totalTweets);
                    const db = getDatabase();
                    const starCountRef = ref(db, `tweets/${tweet}`);
                    onValue(starCountRef, (snapshot) => {
                      const data = snapshot.val();
                      snapshotStateArr = Object.values(data);

                      snapshotStateArr.pop(snapshotStateArr[0]);
                      console.log(snapshotStateArr);
                      snapshotStateArr.sort((a, b) => {
                        return new Date(a.created_at) < new Date(b.created_at)
                          ? 1
                          : -1;
                      });
                      console.log(snapshotStateArr[0]);
                      overallTweets.push(snapshotStateArr[0]);
                      console.log(overallTweets);
                      overallTweets.sort((a, b) => {
                        return new Date(a.created_at) < new Date(b.created_at)
                          ? 1
                          : -1;
                      });

                      // lihtml = ` <li class="twitter__main-page-content-messages-item">
                      //   <div class="twitter__main-page-content-messages-item-userIcon">
                      //     <img src="${snapshotStateArr[0].photoURL}" width="" />
                      //   </div>
                      //   <div
                      //     class="twitter__main-page-content-messages-item-second-item"
                      //   >
                      //     <h1
                      //       class="twitter__main-page-content-messages-item-second-item-name"
                      //     >
                      //       ${snapshotStateArr[0].user}
                      //     </h1>
                      //     <h2
                      //       class="witter__main-page-content-messages-item-second-item-email"
                      //     >
                      //       ${snapshotStateArr[0].email}
                      //     </h2>
                      //     <div
                      //       class="twitter__main-page-content-messages-item-second-item-messsage"
                      //     >
                      //       <p
                      //         class="twitter__main-page-content-messages-item-second-item-messsage-text"
                      //       >
                      //         ${snapshotStateArr[0].message}
                      //       </p>
                      //     </div>
                      //   </div>
                      // </li>`;
                      // ul.innerHTML += lihtml;
                      ul.innerHTML = "";
                      overallTweets.forEach((tweet) => {
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
                      console.log(data);
                    });
                  });

                  console.log(overallTweets);
                  ul.innerHTML = "";
                  overallTweets.forEach((tweet) => {
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
