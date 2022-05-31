import "../scss/main.scss";
import { Twitter } from "./All-login-pages";
<<<<<<< HEAD
// import { Suggested } from "./suggested";
=======
import * as corsModule from "cors";
>>>>>>> fc372d34aa512ce2071cbd6574f6190d977da696
import {
  loginScreen,
  signUpScreen,
  defaultScreen,
  mainPage,
} from "./All-login-pages";
import { initializeApp } from "firebase/app";
<<<<<<< HEAD
// import { getFirestore } from "firebase/firestore";

=======
import { getFirestore } from "firebase/firestore";
// const db = getFirestore(app);
>>>>>>> fc372d34aa512ce2071cbd6574f6190d977da696
// import { getAnalytics } from "firebase/analytics";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, onValue, get, child } from "firebase/database";

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
const trial = new Twitter("i love this twitter");
trial.signUp().logIn().previousSignUP().previousLogIn();

// Initialize Firebase
<<<<<<< HEAD
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const test = new Suggested("khalifah", "khalifah@gmail.com");

=======

// app.initializeApp();
// const cors = corsModule(options :  {CorsOptions:true});
// const test = new Suggested("khalifah", "khalifah@gmail.com");

>>>>>>> fc372d34aa512ce2071cbd6574f6190d977da696
// test.pushInfo();
const form = document.querySelector(".login__field-input");
const nameField = form.name;
const emailField = form.email;
const passwordField = form.password;
const confirmPasswordField = form.confirm_password;
const confirmPassword = document.querySelector(
  ".login__field-input-confirm-password"
);
const google = document.querySelector(".google-button");

const auth = getAuth();
const provider = new GoogleAuthProvider();
// confirmPassword.addEventListener("keyup", (e) => {
//   e.preventDefault();
//   console.log(e.target.value);
// });

const afterLogin = (photo, user, email) => {
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
  const main = document.querySelector(".twitter__main-page");
  const suggested = document.querySelector(".twitter__main-suggested");

  console.log(img1);
  mainPage.style.display = "flex";
  window.location.href = url;
  signUpScreen.style.display = "none";
  defaultScreen.style.display = "none";
  img.style.backgroundImage = `url(${photo})`;
  img1.style.backgroundImage = `url(${photo})`;
  userName.textContent = user;
  userEmail.textContent = email;
  letsGo.addEventListener("click", (e) => {
    e.preventDefault();
    main.style.display = "none";
    suggested.style.display = "block";

    // fetch("https://twitter-e8f72-default-rtdb.firebaseio.com/users", {
    //   method: "GET",
    //   headers: {
    //     mode: "no-cors",
    //     Accept: "application/json",
    //     "Access-Control-Allow-Origin": "http://localhost:8000",

    //     "Content-type": "application/json",
    //     "Access-Control-Allow-Credentials": "true",
    //   },
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    const dbRef = ref(getDatabase());
    get(child(dbRef, `users`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
        let usersArr = [];
        const objectVal = snapshot.val();
        const arr = Object.values(objectVal);
        const newArr = arr.filter((item) => {
          return item.email !== email;
        });
        let html;
        newArr.forEach((each) => {
          const ul = document.querySelector(
            ".twitter__main-suggested-user-section-list-users"
          );
          html = `<li
        class="twitter__main-suggested-user-section-list-users-container"
      >
        <a
          href=""
          class="twitter__main-suggested-user-section-list-users-container-person"
        >
          <!-- user profile image -->
          <div
            class="twitter__main-suggested-user-section-list-users-container-person-container"
          >
            <div
              class="twitter__main-suggested-user-section-list-users-container-person-container-profile-img"
            ><img width="100" height="100" src="${each.photoURL}" /></div>
            <!-- user username and email -->
            <div
              class="twitter__main-suggested-user-section-list-users-container-person-container-emailUsername"
            >
              <div
                class="twitter__main-suggested-user-section-list-users-container-person-container-emailUsername-username"
              >
              ${each.userName}
              </div>
              <div
                class="twitter__main-suggested-user-section-list-users-container-person-container-emailUsername-email"
              >
               ${each.email}
              </div>
            </div>
          </div>

          <!-- more -->
          <div
            class="ttwitter__main-suggested-user-section-list-users-container-person-btn"
          >
            <button
              class="twitter__main-suggested-user-section-list-users-container-person-btn-button"
            >
              follow
            </button>
          </div>
        </a>
      </li>`;
          ul.innerHTML += html;
        });
      })
      .catch((error) => {
        console.error(error);
      });
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
      console.log(result);
      afterLogin(user.photoURL, user.displayName, user.email);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
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
