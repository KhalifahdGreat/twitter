import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
const db = getFirestore(app);
const app = initializeApp(firebaseConfig);

export class Suggested {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.info = db.collection("users");
  }
  async pushInfo() {
    const userDet = {
      username: this.username,
      email: this.email,
    };
    this.info.add(userDet).then(() => {
      console.log("user added ");
    });
  }
  getInfo() {
    this.info.onSnapshot((snapshot) => {});
  }
}
