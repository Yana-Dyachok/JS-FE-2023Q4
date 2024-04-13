export interface IRequest {
  id: string;
  type: string;
  payload: {
    user: {
      login: string;
      password: string;
    };
  };
}

export interface IResponseLogin {
  id: string;
  type: string;
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}
