import "./footer.scss";

export const createFooterElements = (): void => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const list = document.createElement("ul");
  list.classList.add("footer__list");

  const githubItem = document.createElement("li");
  githubItem.classList.add("footer__item");
  const githubLink = document.createElement("a");
  githubLink.classList.add("footer__link");
  githubLink.setAttribute("href", "https://github.com/Yana-Dyachok");
  githubLink.setAttribute("target", "_blank");
  const githubLogo = document.createElement("div");
  githubLogo.classList.add("footer__logo-github");
  githubLink.append(githubLogo);
  githubItem.append(githubLink);
  list.append(githubItem);

  const descriptionItem = document.createElement("li");
  descriptionItem.classList.add("footer__item", "footer__description");
  const school = document.createElement("span");
  school.classList.add("footer__span");
  school.textContent = "The Rolling Scopes School";
  descriptionItem.append(school);

  const copyright = document.createElement("span");
  copyright.classList.add("footer__copyright", "footer__span");
  copyright.textContent = "2024";
  descriptionItem.append(copyright);

  const author = document.createElement("span");
  author.classList.add("footer__span");
  author.textContent = "Created by Yana Dyachok";
  descriptionItem.append(author);
  list.append(descriptionItem);

  const rssItem = document.createElement("li");
  rssItem.classList.add("footer__item");
  const rssLink = document.createElement("a");
  rssLink.classList.add("footer__link");
  rssLink.setAttribute("href", "https://rollingscopes.com/");
  rssLink.setAttribute("target", "_blank");
  const rssLogo = document.createElement("div");
  rssLogo.classList.add("footer__logo-rss");
  rssLink.append(rssLogo);
  rssItem.append(rssLink);
  list.append(rssItem);

  footer.append(list);

  document.body.append(footer);
};
