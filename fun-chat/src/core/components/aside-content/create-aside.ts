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

export const createUserSearch = (): HTMLInputElement => {
  const userSearch = document.createElement("input");
  userSearch.classList.add("aside-user__search");
  userSearch.placeholder = "Search";
  return userSearch;
};

export const createUserAside = (): HTMLElement => {
  const userAside = document.createElement("aside");
  userAside.classList.add("aside-user");
  const userList = document.createElement("ul");
  userList.classList.add("aside-user__list");
  userAside.append(createUserSearch(), userList);
  return userAside;
};
