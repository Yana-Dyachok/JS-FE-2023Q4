import { CarName } from "../../types/types";
import Button from "../button/button";

import "./popup.scss";

class CreatePopup {
  private okBtn: Button;

  constructor() {
    this.okBtn = new Button("popup__btn", "btn", "Ok");
  }

  createPopupElements(text: string): void {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    const popupContent = document.createElement("div");
    popupContent.classList.add("popup__content");
    const popupText = document.createElement("h3");
    popupText.classList.add("popup__text");
    popupText.textContent = text;
    popupContent.append(popupText, this.okBtn.getRootElement());
    const popupBody = document.createElement("div");
    popupBody.classList.add("popup__body");
    popupBody.append(popupContent);
    popup.append(popupBody);
    document.body.append(popup);
    this.closePopup();
  }

  createPopupWinners(duration: number, carName: CarName): void {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    const popupText = document.createElement("h3");
    popupText.classList.add("popup__text-winners");
    popupText.textContent = `The winners is "${carName}" with time-${duration.toFixed(2)}s`;
    popup.append(popupText);
    document.body.append(popup);
    setTimeout(() => document.body.removeChild(popup), 1000);
  }

  closePopup(): void {
    this.okBtn.onClick(() => {
      const popup: HTMLDivElement | null = document.querySelector(".popup");
      if (popup) {
        document.body.removeChild(popup);
      }
    });
  }
}

export default CreatePopup;
