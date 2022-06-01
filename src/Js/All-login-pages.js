// signup event
export const defaultScreen = document.querySelector(".replace-item");
export const signUpScreen = document.querySelector(".container-login");
export const loginScreen = document.querySelector(".container-login-one");
export const mainPage = document.querySelector(".twitter");

const signUpButton = document.querySelector("#login__button-signup");
const logInButton = document.querySelector("#login__button-login");

const previousBtnSignUp = document.querySelector(".signup-previous");
const previousBtnLogIn = document.querySelector(".login-previous");
import { getDatabase, ref, onValue, get, child, set } from "firebase/database";
export class Twitter {
  constructor(tweet) {
    this.tweet = tweet;
  }
  signUp() {
    signUpButton.addEventListener("click", (e) => {
      e.preventDefault();
      const url = "#?signup";
      window.location.href = url;
      signUpScreen.style.display = "block";
      defaultScreen.style.display = "none";
      loginScreen.style.display = "none";
    });
    return this;
  }
  logIn() {
    logInButton.addEventListener("click", (e) => {
      e.preventDefault();
      const url = "#?login";
      window.location.href = url;
      loginScreen.style.display = "block";
      defaultScreen.style.display = "none";
      signUpScreen.style.display = "none";
    });
    return this;
  }

  previousSignUP() {
    previousBtnSignUp.addEventListener("click", (e) => {
      e.preventDefault();
      const url = "#?home";
      window.location.href = url;
      defaultScreen.style.display = "block";
      signUpScreen.style.display = "none";
    });
    return this;
  }
  previousLogIn() {
    previousBtnLogIn.addEventListener("click", (e) => {
      e.preventDefault();
      const url = "#?home";
      window.location.href = url;
      defaultScreen.style.display = "block";
      loginScreen.style.display = "none";
    });
  }
}

export class User {
  constructor(email, userName, photoURL, uid, lastsignin, data) {
    this.email = email;
    this.userName = userName;
    this.photoURL = photoURL;
    this.uid = uid;
    this.lastsignin = lastsignin;
    this.data = data;
  }

  writeUserData() {
    const db = getDatabase();
    set(ref(db, "users/" + userId), {
      email: this.email,
      userName: this.userName,
      photoURL: this.photoURL,
      id: this.uid,
      lastsignin: this.lastsignin,
      data: this.data,
    });
  }
}

export const preventDoubleSuggested = (email) => {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users`))
    .then((snapshot) => {
      console.log(snapshot.val());
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
          ><img width="100" height="100" src="${each.profile_picture}" /></div>
          <!-- user username and email -->
          <div
            class="twitter__main-suggested-user-section-list-users-container-person-container-emailUsername"
          >
            <div
              class="twitter__main-suggested-user-section-list-users-container-person-container-emailUsername-username"
            >
            ${each.username}
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
};
