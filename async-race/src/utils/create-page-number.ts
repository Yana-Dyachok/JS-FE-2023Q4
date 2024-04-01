import { ICarsResponse, IWinnersResponse } from "../types/interfaces";

class PageName {
  createPageName(
    page: string,
    response: ICarsResponse | IWinnersResponse,
  ): HTMLSpanElement {
    let pageName: HTMLElement | null = document.querySelector(
      `[data-page-name="${page.toLocaleLowerCase()}"]`,
    );

    if (pageName) {
      pageName.textContent = `${page.toLocaleUpperCase()} (${response.count})`;
    } else {
      pageName = document.createElement("h1");
      pageName.classList.add("page__name");
      pageName.setAttribute("data-page-name", page);
      pageName.textContent = `${page} (${response.count})`;
    }
    return pageName;
  }
}

export default PageName;
