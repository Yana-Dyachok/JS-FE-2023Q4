import { IUserIsLogined } from "../types/interfaces";

class State {
  public user: IUserIsLogined = { login: "", isLogined: false };

  public users: IUserIsLogined[] = [];

  private messages = [];

  public setUser(user: IUserIsLogined): void {
    this.user = user;
  }

  public getUser(): IUserIsLogined {
    return this.user;
  }

  public externalLogin(user: IUserIsLogined): void {
    const userIndex = this.users.findIndex((el) => el.login === user.login);

    if (userIndex !== -1) {
      this.users[userIndex].isLogined = true;
    } else {
      this.users.push(user);
    }
  }

  public externalLogout(user: IUserIsLogined): void {
    const userIndex = this.users.findIndex((el) => el.login === user.login);

    if (userIndex !== -1) {
      this.users[userIndex].isLogined = false;
    }
  }

  public setActiveUsers(users: IUserIsLogined[]): void {
    this.users.push(...users);
  }

  public setInactiveUsers(users: IUserIsLogined[]): void {
    this.users.push(...users);
  }

  public getAllUsers(): IUserIsLogined[] {
    return this.users;
  }
}
export const state = new State();
