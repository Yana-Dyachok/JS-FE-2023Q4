import { state } from "../../../state/state";
import { IUserIsLogined, IMessage } from "../../../types/interfaces";
import { createUserItem } from "../aside-content/create-aside";
import { createMessageBlock } from "./create-message-block";
import { ws } from "../../../api/websocket";

class Content {
  private users: IUserIsLogined[] = [];

  private userSearch: HTMLInputElement;

  private inputMessage: HTMLInputElement;

  private userList: HTMLElement;

  private dialogContent: HTMLElement;

  private dialogForm: HTMLFormElement;

  private userHeaderName: HTMLElement;

  private userHeaderStatus: HTMLElement;

  userLogin: string | null | undefined = "";

  constructor(
    userSearch: HTMLInputElement,
    userList: HTMLElement,
    dialogForm: HTMLFormElement,
    inputMessage: HTMLInputElement,
    dialogContent: HTMLElement,
    userHeaderName: HTMLElement,
    userHeaderStatus: HTMLElement,
  ) {
    this.userSearch = userSearch;
    this.userList = userList;
    this.dialogForm = dialogForm;
    this.inputMessage = inputMessage;
    this.dialogContent = dialogContent;
    this.userHeaderName = userHeaderName;
    this.userHeaderStatus = userHeaderStatus;
    this.submitMessage();
  }

  searchUser(): void {
    this.createAllUsers();
    this.userSearch.addEventListener("input", () => {
      this.userList.innerHTML = "";
      const searchQuery: string = this.userSearch.value;
      for (const user of this.getUniqueUsers()) {
        const userName: string = user.login.toLowerCase();
        if (userName.includes(searchQuery.toLowerCase())) {
          this.userList.append(createUserItem(user, 1));
        }
      }
    });
  }

  getUniqueUsers(): IUserIsLogined[] {
    const uniqueUsers: IUserIsLogined[] = [];
    state.getAllUsers().forEach((user) => {
      if (!uniqueUsers.some((u) => u.login === user.login)) {
        if (user.login !== state.getUser().login) uniqueUsers.push(user);
      }
    });
    return uniqueUsers;
  }

  createAllUsers(): void {
    const userListItems = this.getUniqueUsers().map((user) =>
      createUserItem(user, 1),
    );
    this.userList.innerHTML = "";
    this.userList.append(...userListItems);
    this.userList.addEventListener("click", (e) => this.onClickUserList(e));
  }

  submitMessage(): void {
    this.dialogForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const text = this.inputMessage.value;
      if (this.userLogin) {
        ws.sendMessage(this.userLogin, text);
        this.dialogContent.scrollTop =
          this.dialogContent.scrollHeight - this.dialogContent.clientHeight;
      }
    });
  }

  onClickUserList = (e: Event) => {
    const elem = e.target as HTMLElement;
    this.userLogin = elem.closest(".aside-user__name")?.textContent;
    this.updateMessageBlock();
    this.updateHeaderUserStatus();
  };

  getUserLogin() {
    return this.userLogin;
  }

  updateHeaderUserStatus(): void {
    if (this.userLogin) {
      this.userHeaderName.textContent = this.userLogin;
    }
    const user = state
      .getAllUsers()
      .find((user) => user.login === this.userLogin);
    if (user?.isLogined) {
      this.userHeaderStatus.textContent = "online";
      this.userHeaderStatus.classList.remove("off");
    } else {
      this.userHeaderStatus.textContent = "offline";
      this.userHeaderStatus.classList.add("off");
    }
    this.dialogContent.scrollTop =
      this.dialogContent.scrollHeight - this.dialogContent.clientHeight;
  }

  updateMessageBlock() {
    this.dialogContent.innerHTML = "";

    const uniqueMessages = [];
    const map = new Map();

    for (const message of state.getMessages()) {
      const key = JSON.stringify(message);
      if (!map.has(key)) {
        map.set(key, true);
        uniqueMessages.push(message);
      }
    }
    const messages = uniqueMessages
      .filter(
        (message) =>
          message.from === this.userLogin || message.to === this.userLogin,
      )
      .map((message) => createMessageBlock(message));

    this.dialogContent.append(...messages);
  }
}

export default Content;
