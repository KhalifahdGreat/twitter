import { getDatabase, ref, onValue, get, child, set } from "firebase/database";

export const loadFollowers = (userid, message) => {
  let fm = getDatabase();

  const dbRef = ref(getDatabase());
  get(child(dbRef, `followers/${userid}`));
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
