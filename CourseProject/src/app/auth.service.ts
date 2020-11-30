export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const newPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });

    return newPromise;
  }

  login() {
    this.loggedIn = true;
  }
  logOut() {
    this.loggedIn = false;
  }
}
