import { getDatabase, ref, onValue, get, child, set } from "firebase/database";

export const loadFollowers = (userid, message) => {
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
  const now = new Date();

  set(
    ref(
      db,
      `tweets/${userid}` + `/${userid}${Math.floor(Math.random() * 10000000)}`
    ),
    {
      message: message,
      created_at: now,
    }
  );
};

export const loadTweets = (id) => {
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
                      overallTweets.push(totalTweets[l].message);
                    }
                  }
                  console.log(totalTweets);

                  console.log(overallTweets);
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
