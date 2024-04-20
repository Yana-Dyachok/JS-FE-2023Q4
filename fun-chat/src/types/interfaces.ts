import { MessageType } from "./enum";

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

export interface IRequestExternal {
  id: null;
  type: string;
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}

export interface IRequestActiveUsers {
  id: string;
  type: string;
  payload: null;
}

export interface IRequestInactiveUsers {
  id: string;
  type: string;
  payload: null;
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

export interface IResponseActiveUser {
  id: string;
  type: string;
  payload: {
    users: [];
  };
}

export interface IResponseInactiveUser {
  id: string;
  type: string;
  payload: {
    users: [];
  };
}

export interface IErrorLogin {
  id: string;
  type: MessageType.error;
  payload: {
    error: string;
  };
}

export interface IUser {
  id: string;
  login: string;
  password: string;
}

export interface IUserIsLogined {
  login: string;
  isLogined: boolean;
}

export interface ISendMessage {
  id: string;
  type: string;
  payload: {
    message: {
      to: string;
      text: string;
    };
  };
}

export interface IResponseSendMessage {
  id: string;
  type: string;
  payload: {
    message: {
      id: string;
      from: string;
      to: string;
      text: string;
      datetime: number;
      status: {
        isDelivered: boolean;
        isReaded: boolean;
        isEdited: boolean;
      };
    };
  };
}

export interface IEditMessage {
  id: string;
  type: string;
  payload: {
    message: {
      id: string;
      text: string;
    };
  };
}

export interface IResponseEditMessage {
  id: string;
  type: string;
  payload: {
    message: {
      id: string;
      text: string;
      status: {
        isEdited: boolean;
      };
    };
  };
}

export interface IEditUserMessage {
  id: null;
  type: string;
  payload: {
    message: {
      id: string;
      text: string;
      status: {
        isEdited: boolean;
      };
    };
  };
}

export interface IDeleteMessage {
  id: string;
  type: string;
  payload: {
    message: {
      id: string;
    };
  };
}

export interface IResponseDeleteMessage {
  id: string;
  type: string;
  payload: {
    message: {
      id: string;
      status: {
        isDeleted: boolean;
      };
    };
  };
}

export interface IHistoryMessage {
  id: string;
  type: string;
  payload: {
    user: {
      login: string;
    };
  };
}

export interface IResponseHistoryMessage {
  id: string;
  type: string;
  payload: {
    messages: [];
  };
}

export interface IDeliverMessage {
  id: null;
  type: string;
  payload: {
    message: {
      id: string;
      status: {
        isDelivered: boolean;
      };
    };
  };
}

export interface IReadMessage {
  id: string;
  type: string;
  payload: {
    message: {
      id: string;
    };
  };
}

export interface IResponseReadMessage {
  id: string;
  type: string;
  payload: {
    message: {
      id: string;
      status: {
        isReaded: boolean;
      };
    };
  };
}
