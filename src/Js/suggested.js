class Suggested {
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
    const response = await this.info.add(userDet);
    return response;
  }
}

// const test = new Suggested("khalifah", "khalifah@gmail.com");
// test.pushInfo();
