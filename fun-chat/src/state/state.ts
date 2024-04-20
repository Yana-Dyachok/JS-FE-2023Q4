import { IUserIsLogined, IMessageContent } from "../types/interfaces";

class State {
  public user: IUserIsLogined = { login: "", isLogined: false };

  public users: IUserIsLogined[] = [];

  messageContent:IMessageContent = {id:"", from: "",to: "",text: "", datetime: 0, status:{isDelivered:false, isEdited:  false, isReaded: false}};

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

  public setMessageContent(message:IMessageContent): void {
    this.messageContent = JSON.parse(JSON.stringify(message));
  }

  public getMessageContent(): IMessageContent {
   return  this.messageContent;
  }
}
export const state = new State();
