import {
  IRequest,
  IRequestExternal,
  IRequestActiveUsers,
  ISendMessage,
  IHistoryMessage,
  IReadMessage,
} from "../types/interfaces";

export const getRequest = (
  id: string,
  login: string,
  password: string,
  messageType: string,
): IRequest => ({
  id,
  type: messageType,
  payload: {
    user: {
      login,
      password,
    },
  },
});

export const getExternalRequest = (
  login: string,
  isLogined: boolean,
  messageType: string,
): IRequestExternal => ({
  id: null,
  type: messageType,
  payload: {
    user: {
      login,
      isLogined,
    },
  },
});

export const getUsersRequest = (
  id: string,
  messageType: string,
): IRequestActiveUsers => ({
  id,
  type: messageType,
  payload: null,
});

export const getRequestSendMessage = (
  id: string,
  messageType: string,
  toUser: string,
  text: string,
): ISendMessage => ({
  id,
  type: messageType,
  payload: {
    message: {
      to: toUser,
      text,
    },
  },
});

export const getRequestHistoryMessage = (
  id: string,
  messageType: string,
  login: string,
): IHistoryMessage => ({
  id,
  type: messageType,
  payload: {
    user: {
      login,
    },
  },
});

export const getRequestReadMessage = (
  id: string,
  messageType: string,
  idMs: string,
): IReadMessage => ({
  id,
  type: messageType,
  payload: {
    message: {
      id: idMs,
    },
  },
});

// export const getDeleteMessage = (
//   id: string,
//   messageType: string,
// ): ISendMessage => ({
//   id,
//   type: messageType,
//   payload: {
//     message: {
//       id,
//     }
//   }
// })
