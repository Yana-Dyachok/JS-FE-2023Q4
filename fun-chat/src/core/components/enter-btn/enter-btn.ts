import Button from "../button/button";
import { loginData } from "../get-login-data";

class EnterButton extends Button {
  constructor() {
    super("enter__btn", "btn", "Enter", "submit");
    this.setDisabled(true);
    this.onClick(() => {
      loginData.submitForm();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !this.getRootElement().disabled) {
        loginData.submitForm();
      }
    });
  }
}

export default EnterButton;
