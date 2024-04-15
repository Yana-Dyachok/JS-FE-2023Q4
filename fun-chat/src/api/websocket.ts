import { state } from "../state/state";
import { SOCKET_URL } from "./const";
import { MessageType } from "../types/enum";
import { IRequest } from "../types/interfaces";
import { st } from "../utils/session-storage";

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

    if (response.type === MessageType.logout) {
      const { payload } = response;
      const { user } = payload;
      const { login, isLogined } = user;
      state.setUser(user);
      if (!isLogined) window.location.hash = "login";
    }

    if (response.type === MessageType.login) {
      const { payload } = response;
      const { user } = payload;
      const { login, isLogined } = user;
      state.setUser(user);

      if (isLogined) window.location.hash = "main";
    }
  };

  logIn(login: string, password: string): void {
    const id = Date.now().toString();
    st.saveUser({ id, login, password });
    this.socket.send(
      JSON.stringify(this.request(id, login, password, MessageType.login)),
    );
  }

  request(
    id: string,
    login: string,
    password: string,
    messageType: string,
  ): IRequest {
    return {
      id,
      type: messageType,
      payload: {
        user: {
          login,
          password,
        },
      },
    };
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
  }
}

export const ws = new Websocket();
