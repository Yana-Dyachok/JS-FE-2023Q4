import FormValidation from "./form-validation/form-validation";
import { ws } from "../../api/websocket";

class LoginData extends FormValidation {
  submitForm(): void {
    const loginForm: HTMLFormElement | null =
      document.querySelector(".login__form");
    if (loginForm) {
      loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const login = FormValidation.userName;
        const { password } = FormValidation;

        ws.logIn(login, password);
      });
    }
  }
}

export const loginData = new LoginData();
