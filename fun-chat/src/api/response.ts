// import { state } from "../state/state";
// import { MessageType } from "../types/enum";
// import {
//   getExternalRequest,
//   getRequest,
//   getRequestSendMessage,
//   getUsersRequest,
// } from "./request";
// import { st } from "../utils/session-storage";
// import { popup } from "../view/popup/popup";
// import { contentView } from "../view/main-view/content-view";
// import { IMessage, IResponseMessage, IErrorLogin } from "../types/interfaces";

// class ResponseMethods {

//     // switch (response.type) {
//     //   case MessageType.logout: {
//     //     const { payload } = response;
//     //     const { user } = payload;
//     //     const { login, isLogined } = user;
//     //     state.setUser(user);
//     //     state.removeAllData();
//     //     if (!isLogined) window.location.hash = "login";
//     //     break;
//     //   }
//     //   case MessageType.login: {
//     //     const { payload } = response;
//     //     const { user } = payload;
//     //     const { login, isLogined } = user;
//     //     state.setUser(user);
//     //     if (isLogined) window.location.hash = "main";
//     //     break;
//     //   }
//     //   case MessageType.external_login: {
//     //     const { payload } = response;
//     //     const { user } = payload;

//     //     state.externalLogin(user);

//     //     contentView.updateUsersList();
//     //     break;
//     //   }
//     //   case MessageType.external_logout: {
//     //     const { payload } = response;
//     //     const { user } = payload;
//     //     // this.externalLogOut(login, isLogined);
//     //     state.externalLogout(user);
//     //     contentView.updateUsersList();
//     //     break;
//     //   }
//     //   case MessageType.inactive_user: {
//     //     const { payload } = response;
//     //     const { users } = payload;
//     //     state.setInactiveUsers(users);

//     //     contentView.updateUsersList();
//     //     break;
//     //   }
//     //   case MessageType.active_user: {
//     //     const { payload } = response;
//     //     const { users } = payload;
//     //     state.setActiveUsers(users);

//     //     contentView.updateUsersList();
//     //     break;
//     //   }
//     //   case MessageType.send_msg: {
//     //     const { payload } = response;
//     //     const { message } = payload;
//     //     state.setMessage(message);

//     //     contentView.contentClass.updateMessageBlock();

//     //     break;
//     //   }
//     //   case MessageType.msg_from_user: {

//     FromMessageResponse(response:IResponseMessage):void {
//         const { payload } = response;
//         const { messages} = payload;

//         messages.forEach((message: IMessage) => {
//           state.setMessage(message);
//           console.log(state.setMessage(message))
//         });
//       }

//     ErrorResponse(response:IErrorLogin):void {
//         const { payload } = response;
//         window.location.hash = "login";
//         popup.createPopupElements(payload.error);
//       }
// }

// export const response = new ResponseMethods();
