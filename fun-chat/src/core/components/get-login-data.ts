import FormValidation from "./form-validation/form-validation";
import { ws } from "../../api/websocket";

class LoginData extends FormValidation {
  createWarningMessage(): void {
    const errorPassword: HTMLDivElement | null =
      document.querySelector(".password__error");
    if (errorPassword) {
      errorPassword.append(document.createElement("p"));
      errorPassword.children[0].textContent =
        "A user with such data already exists";
    }
  }

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
