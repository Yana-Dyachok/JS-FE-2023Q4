import Button from "../button/button";

class EnterButton extends Button {
  constructor() {
    super("enter__btn", "btn", "Enter");
    this.setDisabled(true);
    this.onClick(() => {
      window.location.hash = "main";
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !this.getRootElement().disabled) {
        window.location.hash = "main";
      }
    });
  }
}

export default EnterButton;
