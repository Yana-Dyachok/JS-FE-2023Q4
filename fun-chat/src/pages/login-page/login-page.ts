import Page from "../../core/components/page/page";
import InfoButton from "../../core/components/info-btn/info-btn";
import EnterButton from "../../core/components/enter-btn/enter-btn";
import { createInputField } from "../../core/components/create-login-input/input-field-create";

class LoginPage extends Page {
  static TextObject = {
    LoginTitle: "Login Page",
  };

  private infoBtn: InfoButton;

  private enterBtn: EnterButton;

  constructor(id: string) {
    super(id);
    this.infoBtn = new InfoButton();
    this.enterBtn = new EnterButton();
  }

  render() {
    const buttons: HTMLDivElement = document.createElement("div");
    buttons.classList.add("login__buttons");
    buttons.append(
      this.enterBtn.getRootElement(),
      this.infoBtn.getRootElement(),
    );
    this.container.append(createInputField(), buttons);
    return this.container;
  }
}

export default LoginPage;
