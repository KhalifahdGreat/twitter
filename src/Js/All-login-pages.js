// signup event
export const defaultScreen = document.querySelector(".replace-item");
export const signUpScreen = document.querySelector(".container-login");
export const loginScreen = document.querySelector(".container-login-one");
export const mainPage = document.querySelector(".twitter");

const signUpButton = document.querySelector("#login__button-signup");
const logInButton = document.querySelector("#login__button-login");

const previousBtnSignUp = document.querySelector(".signup-previous");
const previousBtnLogIn = document.querySelector(".login-previous");

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
