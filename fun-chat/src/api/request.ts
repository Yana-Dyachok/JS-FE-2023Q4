import { IRequest } from "../types/interfaces";

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
