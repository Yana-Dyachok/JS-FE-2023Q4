export const createUserItem = (name: string, count?: string): HTMLElement => {
  const userItem = document.createElement("li");
  userItem.classList.add("aside-user__item");

  const userStatus = document.createElement("div");
  userStatus.classList.add("aside-user__status");
  const userName = document.createElement("label");
  userName.classList.add("aside-user__name");
  userName.textContent = name;
  const userMessages = document.createElement("label");
  userMessages.classList.add("aside-user__messages");
  userMessages.textContent = count || "";

  userItem.append(userStatus, userName, userMessages);
  return userItem;
};
