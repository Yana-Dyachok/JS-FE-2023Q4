import { state } from "../../../state/state";
import { IUserIsLogined } from "../../../types/interfaces";
import { createUserItem } from "../aside-content/create-aside";
import {
  createDiv,
  createLabel,
} from "../dialog-content/create-dialog-elements";
import { formatDate } from "../../../utils/format-date";

class Content {
  private users: IUserIsLogined[] = [];

  private userSearch: HTMLInputElement;

  private inputMessage: HTMLInputElement;

  private userList: HTMLElement;

  private dialogContent: HTMLElement;

  private dialogForm: HTMLFormElement;

  constructor(
    userSearch: HTMLInputElement,
    userList: HTMLElement,
    dialogForm: HTMLFormElement,
    inputMessage: HTMLInputElement,
    dialogContent: HTMLElement,
  ) {
    this.userSearch = userSearch;
    this.userList = userList;
    this.dialogForm = dialogForm;
    this.inputMessage = inputMessage;
    this.dialogContent = dialogContent;
  }

  searchUser(): void {
    this.createAllUsers();
    this.userSearch.addEventListener("input", () => {
      this.userList.innerHTML = "";
      const searchQuery: string = this.userSearch.value;
      for (const user of this.users) {
        const userName: string = user.login.toLowerCase();
        if (userName.includes(searchQuery.toLowerCase())) {
          this.userList.append(createUserItem(user, 1));
        }
      }
    });
  }

  createAllUsers(): void {
    this.users.push(...state.getAllUsers());
    for (let i = 0; i < this.users.length; i += 1) {
      this.userList.append(createUserItem(this.users[i], 1));
    }
  }

  submitMessage(): void {
    this.dialogForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const text = this.inputMessage.value;
      if (text.length > 0) {
        const labelToRemove: HTMLElement | null =
          document.querySelector(".dialog__label");
        if (labelToRemove) {
          this.dialogContent.removeChild(labelToRemove);
        }
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
}

export default Content;
