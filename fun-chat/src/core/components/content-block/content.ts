import SendButton from "./send-btn/send-btn";
import { createUserAside } from "../aside-content/create-aside";
import "./content.scss";

class Content {
  private content: HTMLElement;

  private sendButton: SendButton;

  constructor() {
    this.content = document.createElement("main");
    this.content.classList.add("main");
    this.sendButton = new SendButton();
  }

  private createContentElements(): void {
    this.content.append(createUserAside());
  }

  getRootElement(): HTMLElement {
    this.createContentElements();
    return this.content;
  }
}

export default Content;
