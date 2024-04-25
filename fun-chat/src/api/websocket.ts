import { state } from "../state/state";
import { SOCKET_URL } from "./const";
import { MessageType } from "../types/enum";
import {
  getRequest,
  getRequestSendMessage,
  getUsersRequest,
  getRequestHistoryMessage,
  getRequestOneMessage,
  getRequestServerOneMessage,
  getRequestEditMessage,
} from "./request";
import { st } from "../utils/session-storage";
import { popup } from "../view/popup/popup";
import { contentView } from "../view/main-view/content-view";
import { IMessage } from "../types/interfaces";

class Websocket {
  private socket: WebSocket;

  constructor() {
    this.socket = SOCKET_URL;

    this.initListeners();
  }

  private initListeners(): void {
    this.socket.addEventListener("message", this.onMessage);
    this.socket.addEventListener("open", (error: Event) => {
      popup.deletePopup();
    });
    this.socket.addEventListener("close", (error: Event) => {
      popup.createPopupElements("Сonnection to the server");
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
        state.removeAllData();
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
        state.setMessage(message);
        contentView.contentClass.updateMessageBlock();

        break;
      }
      case MessageType.msg_from_user: {
        const { payload } = response;
        const { messages } = payload;

        messages.forEach((message: IMessage) => {
          state.setMessage(message);
        });
        break;
      }

      case MessageType.msg_read: {
        const { payload } = response;
        const { message } = payload;
        // contentView.contentClass.updateMessageBlock();
        // state.setReadMessage(message);
        break;
      }
      case MessageType.delete_msg: {
        const { payload } = response;
        const { message } = payload;
        state.setDeletedMessage(message.id);
        break;
      }
      case MessageType.msg_deliver: {
        const { payload } = response;
        const { messages } = payload;
        break;
      }
      case MessageType.edit_msg: {
        const { payload } = response;
        const { messages } = payload;
        break;
      }
      case MessageType.error: {
        const { payload } = response;
        window.location.hash = "login";
        popup.createPopupElements(payload.error);
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

  getAllMessages(login: string): void {
    const id = Date.now().toString();
    this.socket.send(
      JSON.stringify(
        getRequestHistoryMessage(id, MessageType.msg_from_user, login),
      ),
    );
  }

  getReadMessage(idMs: string): void {
    const id = Date.now().toString();
    this.socket.send(
      JSON.stringify(getRequestOneMessage(id, MessageType.msg_read, idMs)),
    );
  }

  deleteMessage(idMs: string): void {
    const id = Date.now().toString();
    this.socket.send(
      JSON.stringify(getRequestOneMessage(id, MessageType.delete_msg, idMs)),
    );
  }

  deleteServerMessage(idMs: string): void {
    this.socket.send(
      JSON.stringify(getRequestServerOneMessage(MessageType.delete_msg, idMs)),
    );
  }

  editMessage(idMs: string, text: string): void {
    const id = Date.now().toString();
    this.socket.send(
      JSON.stringify(
        getRequestEditMessage(id, MessageType.edit_msg, idMs, text),
      ),
    );
  }
}

export const ws = new Websocket();
