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
}

export default Button;
