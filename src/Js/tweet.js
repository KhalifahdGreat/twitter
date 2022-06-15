import { getDatabase, ref, onValue, get, child, set } from "firebase/database";

export const loadFollowers = (userid) => {
  let fm = getDatabase();

  const dbRef = ref(getDatabase());
  console.log(child(dbRef, `followers/${userid}`));
  // if (child(dbRef, `followers/${userid}`)._path.pieces_[1]) {
  //   console.log("nah");
  // } else {
  //   console.log("yh");
  // }
  get(child(dbRef, `followers/${userid}`))
    .then((snapshot) => {
      console.log(snapshot.val());
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
