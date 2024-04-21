import { IUserIsLogined, IMessage } from "../types/interfaces";

class State {
  public user: IUserIsLogined = { login: "", isLogined: false };

  public users: IUserIsLogined[] = [];

  private messages: IMessage[] = [];

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

  public removeAllData(): void {
    this.user.isLogined = false;
    this.user.login = "";
    this.users = [];
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

  public setMessage(message: IMessage): void {
    // this.messageContent = JSON.parse(JSON.stringify(message));
    this.messages.push(message);
  }

  public getMessages(): IMessage[] {
    // return  this.messageContent;
    return this.messages;
  }
}
export const state = new State();
