import Button from "../../button/button";

class LogoutButton extends Button {
  constructor() {
    super("logout__btn", "btn", "Log out");

    this.onClick(() => {
      window.location.hash = "login";
    });
  }
}

export default LogoutButton;
