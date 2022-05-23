import "../scss/main.scss";
import { Twitter } from "./All-login-pages";

const trial = new Twitter("i love this twitter");
trial.signUp().logIn().previousSignUP().previousLogIn();
