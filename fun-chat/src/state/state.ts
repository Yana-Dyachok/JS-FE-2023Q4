import { IUserIsLogined } from "../types/interfaces";

class State {
  public user: IUserIsLogined = { login: "", isLogined: false };

  public users: IUserIsLogined[] = [];

  public activeUsers: IUserIsLogined[] = [];

  public inActiveUsers: IUserIsLogined[] = [];

  private messages = [];

  public setUser(user: IUserIsLogined): void {
    this.user = user;
  }

  public getUser(): IUserIsLogined {
    return this.user;
  }

  public setAllUsers(user: IUserIsLogined): void {
    this.users.push(user);
  }

  public setActiveUsers(users: IUserIsLogined[]): void {
    this.activeUsers = users;
  }

  public setInactiveUsers(users: IUserIsLogined[]): void {
    this.inActiveUsers = users;
  }

  public getAllUsers(): IUserIsLogined[] {
    return this.users;
  }
}
export const state = new State();
