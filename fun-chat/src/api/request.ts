import {
  IRequest,
  IRequestExternal,
  IRequestActiveUsers,
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
{
}
export const getUsersRequest = (
  id: string,
  messageType: string,
): IRequestActiveUsers => ({
  id,
  type: messageType,
  payload: null,
});
