import "../scss/main.scss";
import { Twitter } from "./All-login-pages";
import { User } from "./All-login-pages";
import { preventDoubleSuggested } from "./All-login-pages";

import {
  loginScreen,
  signUpScreen,
  defaultScreen,
  mainPage,
} from "./All-login-pages";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// const db = getFirestore(app);
// import { getAnalytics } from "firebase/analytics";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  getDatabase,
  ref,
  onValue,
  get,
  child,
  set,
  push,
  update,
} from "firebase/database";
import { loadFollowers } from "./tweet";
import { loadTweets } from "./tweet";
const firebaseConfig = {
  apiKey: "AIzaSyAB1VyDJr8qxqBGMQ8z5gVrjVudP-dOqb4",
  authDomain: "twitter-e8f72.firebaseapp.com",
  databaseURL: "https://twitter-e8f72-default-rtdb.firebaseio.com",
  projectId: "twitter-e8f72",
  storageBucket: "twitter-e8f72.appspot.com",
  messagingSenderId: "297476739231",
  appId: "1:297476739231:web:95351f8ebc6c4b0c3f12aa",
  measurementId: "G-Y78608EE1F",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase();
export let id;
export let photoURL;
export let userName;
export let email;
const trial = new Twitter("i love this twitter");
trial.signUp().logIn().previousSignUP().previousLogIn();

// Initialize Firebase

// app.initializeApp();
// const cors = corsModule(options :  {CorsOptions:true});
// const test = new Suggested("khalifah", "khalifah@gmail.com");

// test.pushInfo();
const form = document.querySelector(".login__field-input");
const nameField = form.name;
const emailField = form.email;
const passwordField = form.password;
const confirmPasswordField = form.confirm_password;
const confirmPassword = document.querySelector(
  ".login__field-input-confirm-password"
);
const tweet = document.querySelector(
  ".twitter__main-page-user-sub-header-btn-button"
);
const follow = document.querySelector(
  ".twitter__main-suggested-user-section-list-users-container-person-btn-button"
);

const google = document.querySelector(".google-button");

const auth = getAuth();
const provider = new GoogleAuthProvider();
// confirmPassword.addEventListener("keyup", (e) => {
//   e.preventDefault();
//   console.log(e.target.value);
// });

const afterLogin = (email, user, photo) => {
  const url = "#?mainpage";
  const img = document.querySelector(
    ".twitter__nav-list-item-items-profile-img"
  );
  const img1 = document.querySelector(
    ".twitter__main-page-user-icon-event-profile-img"
  );
  const userName = document.querySelector(
    ".twitter__nav-list-item-items-emailUsername-username"
  );
  const userEmail = document.querySelector(
    ".twitter__nav-list-item-items-emailUsername-email"
  );
  const letsGo = document.querySelector(
    ".twitter__main-page-content-intro-btn-button"
  );
  const explore = document.querySelectorAll(".twitter__nav-list-item-hover");
  const exploreIcon = document.querySelectorAll(".twitter__nav-list-item-icon");
  const exploreLink = document.querySelectorAll(
    ".twitter__nav-list-item-text-container-link"
  );
  const main = document.querySelector(".twitter__main-page");
  const suggested = document.querySelector(".twitter__main-suggested");
  const bckSuggested = document.querySelector(
    ".twitter__main-suggested-header-container-back-icon-btn"
  );
  const home = document.querySelector(".home");
  const homeIcon = document.querySelector(".homeIcon");
  const homeLink = document.querySelector(".homeLink");
  console.log(img1);
  mainPage.style.display = "flex";
  window.location.href = url;
  signUpScreen.style.display = "none";
  defaultScreen.style.display = "none";
  img.style.backgroundImage = `url(${photo})`;
  img1.style.backgroundImage = `url(${photo})`;
  userName.textContent = user;
  userEmail.textContent = email;
  bckSuggested.addEventListener("click", (e) => {
    e.preventDefault();
    main.style.display = "block";
    const ul = document.querySelector(
      ".twitter__main-suggested-user-section-list-users"
    );
    ul.innerHTML = "";
    suggested.style.display = "none";
  });
  letsGo.addEventListener("click", (e) => {
    e.preventDefault();

    main.style.display = "none";

    suggested.style.display = "block";

    preventDoubleSuggested(email);
  });
  explore.forEach((explore) => {
    explore.addEventListener("click", (e) => {
      const ul = document.querySelector(
        ".twitter__main-suggested-user-section-list-users"
      );
      ul.innerHTML = "";
      console.log("explore");
      suggested.style.display = "block";
      main.style.display = "none";
      preventDoubleSuggested(email);
    });
  });

  exploreIcon.forEach((exploreIcon) => {
    exploreIcon.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
  exploreLink.forEach((exploreLink) => {
    exploreLink.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
  home.addEventListener("click", () => {
    main.style.display = "block";
    const ul = document.querySelector(
      ".twitter__main-suggested-user-section-list-users"
    );
    ul.innerHTML = "";
    suggested.style.display = "none";
  });
  homeLink.addEventListener("click", (e) => {
    e.preventDefault();
  });

  homeIcon.addEventListener("click", (e) => {
    e.preventDefault();
  });

  loginScreen.style.display = "none";
};

google.addEventListener("click", (e) => {
  e.preventDefault();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);

      id = user.uid;
      userName = user.displayName;
      photoURL = user.photoURL;
      email = user.email;

      // const userPerson = new User(
      //   user.email,
      //   user.displayName,
      //   user.photoURL,
      //   user.uid,
      //   user.metadata.lastSignInTime
      // );
      // console.log(userPerson);
      // userPerson.writeUserData();
      const db = getDatabase();
      const dbRef = ref(getDatabase());

      get(child(dbRef, `tweets/${id}`))
        .then((snapshot) => {
          // console.log(snapshot.val());
          if (snapshot.exists()) {
            const vanishLetsGo = document.querySelector(
              ".twitter__main-page-content-intro"
            );
            vanishLetsGo.style.display = "none";
            loadTweets(id, photoURL, userName, email);
          } else {
            set(ref(db, "tweets/" + id), {
              usr_email: user.email,
            });
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });

      get(child(dbRef, `followers/${id}`))
        .then((snapshot) => {
          // console.log(snapshot.val());
          if (snapshot.exists()) {
          } else {
            set(ref(db, "followers/" + id), {
              usr_email: user.email,
            });
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });

      afterLogin(user.email, user.displayName, user.photoURL);

      function writeUserData(userId, name, email, imageUrl, lastSignIn) {
        const db = getDatabase();
        const dbRef = ref(getDatabase());

        set(ref(db, "users/" + userId), {
          username: name,
          email: email,
          profile_picture: imageUrl,
          uid: userId,
          lastSignIn: lastSignIn,
        });
      }
      writeUserData(
        user.uid,
        user.displayName,
        user.email,
        user.photoURL,
        user.metadata.lastSignInTime
      );
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const signUp = () => {
    if (
      nameField.value.trim() === "" ||
      emailField.value.trim() === "" ||
      passwordField.value.trim() === "" ||
      confirmPasswordField.value.trim() === ""
    ) {
      alert("no empty fields allowed");
      return;
    } else if (
      confirmPasswordField.value.trim() !== passwordField.value.trim()
    ) {
      document.querySelector(
        ".login__field-input-confirm-password"
      ).style.border = "1px solid tomato";
      setTimeout(() => {
        confirmPassword.style.border = "0px";
        confirmPassword.value = "";
      }, 1000);

      return;
    } else {
      const url = "#?login";
      window.location.href = url;
      loginScreen.style.display = "block";
      defaultScreen.style.display = "none";
      signUpScreen.style.display = "none";
      //   const person = new Twitter("user has been signedup");
      //   person.logIn();
      createUserWithEmailAndPassword(
        auth,
        emailField.value.trim(),
        passwordField.value.trim()
      )
        .then((userCredential) => {
          // Signed in

          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  };
  signUp();
});

document
  .querySelector(".login__field-input-one")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const login = () => {
      const email = document
        .querySelector(".login__field-input-one-username")
        .value.trim();
      const password = document
        .querySelector(".login__field-input-one-password")
        .value.trim();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          afterLogin();

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    };

    login();
  });
// let mesage = document.querySelector(
//   ".twitter__main-page-user-icon-event-message-input"
// );
// mesage.addEventListener("keypress", (e) => {
//   e.preventDefault();
//   console.log(e);
//   if (e.key === "Enter") {
//     let msg = e.target.value();
//     loadFollowers(id, msg);
//     msg.value = "";
//   }
// });
tweet.addEventListener("click", (e) => {
  const ul = document.querySelector(".twitter__main-page-content-messages");
  ul.innerHTML = "";
  e.preventDefault();

  let message = document.querySelector(
    ".twitter__main-page-user-icon-event-message-input"
  );

  loadFollowers(id, message.value, email, photoURL, userName);
  message.value = "";
  const dbRef = ref(getDatabase());
  loadTweets(id, photoURL, userName, email);
  // get the user's own tweet
  // get(child(dbRef, `tweets/${id}`))
  //   .then((snapshot) => {
  //     // console.log(snapshot.val());
  //     if (snapshot.exists()) {
  //       console.log(snapshot.val());
  //     } else {
  //       console.log("No data available");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // // get the users followers tweets
  // get(child(dbRef, `followers/${id}`))
  //   .then((snapshot) => {
  //     // console.log(snapshot.val());
  //     if (snapshot.exists()) {
  //       console.log(snapshot.val());
  //       const objectVal = snapshot.val();

  //       const arr = Object.values(objectVal);
  //       console.log(arr);
  //     } else {
  //       console.log("No data available");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
});
const ul = document.querySelector(
  ".twitter__main-suggested-user-section-list-users"
);
ul.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "BUTTON") {
    let email =
      e.target.parentElement.parentElement.children[0].children[1].children[1]
        .innerText;
    console.log(email);
    const db = getDatabase();
    const dbRef = ref(getDatabase());

    set(
      ref(
        db,
        `followers/${id}` + `/${id}${Math.floor(Math.random() * 10000000)}`
      ),
      {
        usr_email: email,
      }
    );
  }
});
