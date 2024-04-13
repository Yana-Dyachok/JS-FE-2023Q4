import FormValidation from "./form-validation/form-validation";
import { socketUrl } from "../../api/websocket-url";
import { IRequest, IResponseLogin } from "../../types/interfaces";
import { MessageType } from "../../types/enum";

class LoginData extends FormValidation {
  static isLogin: boolean;

  enterEvent(): void {
    socketUrl.addEventListener("message", (event) => {
      const response: IResponseLogin = JSON.parse(event.data);
      if (response.type === MessageType.login) {
        const { payload } = response;
        const { user } = payload;
        const { login, isLogined } = user;
        LoginData.isLogin = isLogined;
      } else if (response.type === MessageType.error) {
        LoginData.isLogin = false;
        this.createWarningMessage();
      }
      if (LoginData.isLogin) window.location.hash = "main";
    });
  }

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
    const loginForm = document.querySelector(".login__form");
    if (loginForm) {
      loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const login = FormValidation.userName;
        const { password } = FormValidation;
        const request: IRequest = {
          id: Date.now().toString(),
          type: MessageType.login,
          payload: {
            user: {
              login,
              password,
            },
          },
        };
        socketUrl.send(JSON.stringify(request));
      });
    }
  }
}

export const loginData = new LoginData();
