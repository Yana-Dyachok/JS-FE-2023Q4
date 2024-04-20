import { state } from "../../../state/state";
import { IUserIsLogined } from "../../../types/interfaces";
import { createUserItem } from "../aside-content/create-aside";
import {
  createDiv,
  createLabel,
} from "../dialog-content/create-dialog-elements";
import { formatDate } from "../../../utils/format-date";
import { st } from "../../../utils/session-storage";
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
  }

  submitMessage(): void {
    this.dialogForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const text = this.inputMessage.value;
      if (text.length > 0 && this.userHeaderName.textContent !== "") {
        const labelToRemove: HTMLElement | null =
          document.querySelector(".dialog__label");
        if (labelToRemove) {
          this.dialogContent.removeChild(labelToRemove);
        }
        ws.sendMessage(this.userHeaderName.textContent!, text);
        this.dialogContent.append(this.createMessageBlock());
      }
    });
  }

  createMessageBlock(): HTMLDivElement {
    const messageBlock: HTMLDivElement = createDiv("message__block");
    const messageContainer: HTMLDivElement = createDiv("message__container");
    const messageHeader: HTMLDivElement = createDiv("message__header");
    const messageUser: HTMLElement = createLabel("message__user");
    const messageDate: HTMLElement = createLabel("message__date");
    messageUser.textContent = "you";
    messageDate.textContent = formatDate();
    messageHeader.append(messageUser, messageDate);
    const messageText: HTMLDivElement = createDiv("message__text");
    const messageFooter: HTMLDivElement = createDiv("message__footer");
    const footerLabel: HTMLElement = createLabel("message__footer-label");
    const messageStatus: HTMLElement = createLabel("message__status");
    messageFooter.append(footerLabel, messageStatus);
    messageContainer.append(messageHeader, messageText, messageFooter);
    messageBlock.append(messageContainer);
    messageText.textContent = this.inputMessage.value;
    return messageBlock;
  }

  chooseUserToSend(): void {
    const liElements = this.userList.querySelectorAll("li");
    if (liElements) {
      liElements.forEach((li: HTMLLIElement) => {
        li.addEventListener("click", () => {
          this.userHeaderName.textContent = li.children[1].textContent;
          if (li.children[0].classList.contains("active")) {
            this.userHeaderStatus.textContent = "online";
            this.userHeaderStatus.classList.remove("off");
          } else {
            this.userHeaderStatus.textContent = "offline";
            this.userHeaderStatus.classList.add("off");
          }
        });
      });
    }
  }
}

export default Content;
