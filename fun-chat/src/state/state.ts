import { IUserIsLogined } from "../types/interfaces";

class State {
  public user: IUserIsLogined = { login: "", isLogined: false };

  private users = [];

  private messages = [];

  public setUser(user: IUserIsLogined): void {
    this.user = user;
  }

  public getUser(): IUserIsLogined {
    return this.user;
  }
}
export const state = new State();
