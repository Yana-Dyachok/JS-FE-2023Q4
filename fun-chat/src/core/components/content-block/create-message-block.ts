import {
  createDiv,
  createLabel,
} from "../dialog-content/create-dialog-elements";
import { formatDate } from "../../../utils/format-date";
import { IMessage } from "../../../types/interfaces";
import { state } from "../../../state/state";
import { ws } from "../../../api/websocket";
import "./message-block.scss";

export const createMessageBlock = (message: IMessage): HTMLDivElement => {
  const { id, from, to, text, datetime, status } = message;
  const messageBlock: HTMLDivElement = createDiv("message__block");
  const messageContainer: HTMLDivElement = createDiv("message__container");
  const messageHeader: HTMLDivElement = createDiv("message__header");
  const messageUser: HTMLElement = createLabel("message__user");
  const messageDate: HTMLElement = createLabel("message__date");
  messageDate.textContent = formatDate(datetime);
  messageHeader.append(messageUser, messageDate);
  const messageText: HTMLDivElement = createDiv("message__text");
  const messageFooter: HTMLDivElement = createDiv("message__footer");
  const messageEditStatus: HTMLElement = createLabel("message__edit-status");
  messageEditStatus.textContent = `${status.isEdited ? "edit" : ""}`;
  const messageStatus: HTMLElement = createLabel("message__status");
  const messageEdit: HTMLDivElement = createDiv("message__edit");
  const messageDelete: HTMLDivElement = createDiv("message__delete");
  if (state.getUser().login === from) {
    messageUser.textContent = "you";
    messageContainer.classList.remove("users-message");
    messageStatus.textContent = `${status.isReaded ? "readed" : status.isDelivered ? "delivered" : "sent"}`;
    messageFooter.append(messageDelete, messageEdit);
  } else {
    // ws.getReadMessage(id);
    messageUser.textContent = from;
    messageContainer.classList.add("users-message");
  }
  messageFooter.append(messageEditStatus, messageStatus);
  messageContainer.append(messageHeader, messageText, messageFooter);
  messageBlock.append(messageContainer);
  messageText.textContent = text;
  return messageBlock;
};
