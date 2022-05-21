import "../scss/main.scss";
import { HTML } from "./html";

const divReplace = document.querySelector(".replace-item");
const previousBtn = document.querySelector(".container-login-button");
// signup event

class Twitter {
  constructor(tweet) {
    this.tweet = tweet;
  }
  signUp() {
    const signUpBtn = document.querySelector(".login__button-signup");

    signUpBtn.addEventListener("click", (e) => {
      e.preventDefault();
      divReplace.innerHTML = HTML.SIGN_UP_HTML;
      previousBtn.style.display = "block";
    });
    return this;
  }
  logIn() {
    const logInBtn = document.querySelector(".login__button-login");

    logInBtn.addEventListener("click", (e) => {
      e.preventDefault();
      divReplace.innerHTML = HTML.LOG_IN_HTML;
      previousBtn.style.display = "block";
    });
    return this;
  }

  previous() {
    previousBtn.addEventListener("click", (e) => {
      e.preventDefault();
      divReplace.innerHTML = HTML.SIGNUP_OPTION;
      previousBtn.style.display = "none";
      this.signUp();
      this.logIn();
    });
  }
}

const trial = new Twitter("i love this twitter");

trial.signUp().logIn().previous();
