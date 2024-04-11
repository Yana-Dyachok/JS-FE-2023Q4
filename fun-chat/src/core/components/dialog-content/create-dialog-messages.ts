export const createMessageBlock = (): HTMLDivElement => {
  const messageBlock = document.createElement("div");
  messageBlock.classList.add("message__block");
  return messageBlock;
};

export const createMessageContainer = (): HTMLDivElement => {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message__block");
  return messageContainer;
};

export const createMessageHeader = (): HTMLDivElement => {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message__header");
  const messagesUser = document.createElement("label");
  // userName.textContent = "you";
  const messagesDate = document.createElement("label");
  messageContainer.append(messagesUser, messagesDate);
  return messageContainer;
};

export const createMessageText = (text: string): HTMLDivElement => {
  const messageText = document.createElement("div");
  messageText.classList.add("message__text");
  messageText.textContent = text;
  return messageText;
};

export const createMessageFooter = (): HTMLDivElement => {
  const messageFooter = document.createElement("div");
  messageFooter.classList.add("message__footer");
  const messages = document.createElement("label");
  const messagesRead = document.createElement("label");
  messageFooter.append(messagesRead, messages);
  return messageFooter;
};
