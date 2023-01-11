export class User {
  nm_user: string;
  email: string;
  password: string;

  constructor(nm_user: string, email: string, password: string) {
    this.nm_user = nm_user;
    this.email = email;
    this.password = password;
  }
}
