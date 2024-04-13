import Button from "../../button/button";
import { socketUrl } from "../../../../api/websocket-url";
import { IRequest, IResponseLogin } from "../../../../types/interfaces";
import { MessageType } from "../../../../types/enum";

class LogoutButton extends Button {
  constructor() {
    super("logout__btn", "btn", "Log out", "button");

    this.onClick(() => {
      this.getLogOut();
    });
  }

  getLogOut() {
    socketUrl.addEventListener("message", (event) => {
      const response: IResponseLogin = JSON.parse(event.data);
      if (response.type === MessageType.logout) {
        const { payload } = response;
        const { user } = payload;
        const { login, isLogined } = user;
        if (!isLogined) window.location.hash = "login";
      } else if (response.type === MessageType.error) {
      }
    });
  }
}

export default LogoutButton;
