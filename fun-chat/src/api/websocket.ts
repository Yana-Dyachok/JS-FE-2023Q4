import { state } from "../state/state";
import { SOCKET_URL } from "./const";
import { MessageType } from "../types/enum";
import {
  getExternalRequest,
  getRequest,
  getRequestSendMessage,
  getUsersRequest,
} from "./request";
import { st } from "../utils/session-storage";
import { popup } from "../view/popup/popup";
import { contentView } from "../view/main-view/content-view";

class Websocket {
  private socket: WebSocket;

  constructor() {
    this.socket = SOCKET_URL;

    this.initListeners();
  }

  private initListeners(): void {
    this.socket.addEventListener("message", this.onMessage);

    this.socket.addEventListener("close", (error: Event) => {
      console.log(` ${error}`);
    });
  }

  private onMessage = (e: MessageEvent): void => {
    const response = JSON.parse(e.data);

    switch (response.type) {
      case MessageType.logout: {
        const { payload } = response;
        const { user } = payload;
        const { login, isLogined } = user;
        state.setUser(user);
        if (!isLogined) window.location.hash = "login";
        break;
      }
      case MessageType.login: {
        const { payload } = response;
        const { user } = payload;
        const { login, isLogined } = user;
        state.setUser(user);
        if (isLogined) window.location.hash = "main";
        break;
      }
      case MessageType.external_login: {
        const { payload } = response;
        const { user } = payload;

        state.externalLogin(user);

        contentView.updateUsersList();
        break;
      }
      case MessageType.external_logout: {
        const { payload } = response;
        const { user } = payload;
        // this.externalLogOut(login, isLogined);
        state.externalLogout(user);
        contentView.updateUsersList();
        break;
      }
      case MessageType.inactive_user: {
        const { payload } = response;
        const { users } = payload;
        state.setInactiveUsers(users);

        contentView.updateUsersList();
        break;
      }
      case MessageType.active_user: {
        const { payload } = response;
        const { users } = payload;
        state.setActiveUsers(users);

        contentView.updateUsersList();
        break;
      }
      case MessageType.send_msg: {
        const { payload } = response;
        const { message } = payload;
        const { id, from, to, text, datetime, status } = message;
        break;
      }
      case MessageType.error: {
        const { payload } = response;
        if (
          payload.error === "incorrect password" ||
          payload.error === "a user with this login is already authorized"
        ) {
          popup.createPopupElements(payload.error);
          window.location.hash = "login";
        }
        break;
      }
      default:
        break;
    }
  };

  logIn(login: string, password: string): void {
    const id = Date.now().toString();
    st.saveUser({ id, login, password });
    this.socket.send(
      JSON.stringify(getRequest(id, login, password, MessageType.login)),
    );
  }

  logOut(): void {
    const userCurrent = st.getUser();

    const request = {
      id: userCurrent?.id,
      type: MessageType.logout,
      payload: {
        user: {
          login: userCurrent?.login,
          password: userCurrent?.password,
        },
      },
    };

    this.socket.send(JSON.stringify(request));
    st.removeUser();
  }

  externalLogin(login: string, isLogined: boolean): void {
    this.socket.send(
      JSON.stringify(
        getExternalRequest(login, isLogined, MessageType.external_login),
      ),
    );
  }

  getActiveUsers(): void {
    const id = Date.now().toString();
    this.socket.send(
      JSON.stringify(getUsersRequest(id, MessageType.active_user)),
    );
  }

  getInActiveUsers(): void {
    const id = Date.now().toString();
    this.socket.send(
      JSON.stringify(getUsersRequest(id, MessageType.inactive_user)),
    );
  }

  sendMessage(toUser: string, text: string): void {
    const id = Date.now().toString();
    this.socket.send(
      JSON.stringify(
        getRequestSendMessage(id, MessageType.send_msg, toUser, text),
      ),
    );
  }
}

export const ws = new Websocket();
