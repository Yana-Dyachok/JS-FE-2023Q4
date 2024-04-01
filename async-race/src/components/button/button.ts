import "./button.scss";

class Button {
  private button: HTMLButtonElement;

  constructor(className: string, commonClassName: string, text: string) {
    this.button = document.createElement("button");
    this.button.classList.add(className);
    this.button.classList.add(commonClassName);
    this.button.textContent = text;
  }

  getRootElement(): HTMLButtonElement {
    return this.button;
  }

  setDisabled(disabled: boolean): void {
    if (disabled) {
      this.button.setAttribute("disabled", "disabled");
    } else {
      this.button.removeAttribute("disabled");
    }
  }

  onClick(callback: () => void): void {
    this.button.addEventListener("click", callback);
  }

  handleUpdateButtonClick(callback: () => void): void {
    this.button.addEventListener("click", callback);
  }

  removeEventListener(eventType: string, callback: () => void): void {
    this.button.removeEventListener(eventType, callback);
  }

  togglePages(page: string): void {
    const garagePage = document.querySelector(".garage__page") as HTMLElement;
    const winnersPage = document.querySelector(".winners__page") as HTMLElement;
    if (page === "winners") {
      winnersPage.style.display = "block";
      garagePage.style.display = "none";
    } else {
      winnersPage.style.display = "none";
      garagePage.style.display = "block";
    }
  }
}

export default Button;
