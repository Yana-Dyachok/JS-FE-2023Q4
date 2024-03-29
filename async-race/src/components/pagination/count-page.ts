import { ICarsResponse, IWinnersResponse } from "../../types/interfaces";

class GetPageCount {
  contGarage: number;

  contWinners: number;

  constructor() {
    this.contGarage = 1;
    this.contWinners = 1;
  }

  getLastPage(page: string, value: ICarsResponse | IWinnersResponse): number {
    return Math.ceil(Number(value.count) / (page === "Garage" ? 7 : 10));
  }

  getCurrentPage(page: string): number {
    return page === "Garage" ? this.contGarage : this.contWinners;
  }

  setСountPagination(page: string, action: string): number {
    let currentCount: number;
    if (action === "+") {
      currentCount =
        page === "Garage" ? (this.contGarage += 1) : (this.contWinners += 1);
    } else {
      currentCount =
        page === "Garage" ? (this.contGarage -= 1) : (this.contWinners -= 1);
    }
    return currentCount;
  }

  generatePageCount(
    page: string,
    value: ICarsResponse | IWinnersResponse,
  ): HTMLSpanElement {
    let count: HTMLSpanElement | null = document.querySelector(
      `[data-page-count=${page.toLocaleLowerCase()}]`,
    );
    const current = this.getCurrentPage(page);
    const last = this.getLastPage(page, value);
    const pageOrder: HTMLSpanElement | null = document.querySelector(
      `.${page.toLocaleLowerCase()}__page-order`,
    );
    if (pageOrder) pageOrder.textContent = `Page #${current}`;
    if (!count) {
      count = document.createElement("span");
      count.classList.add("page-counter");
      count.setAttribute("data-page-count", `${page.toLocaleLowerCase()}`);
      count.textContent = `${current} / ${last}`;
    } else {
      count.textContent = `${current} / ${last}`;
    }

    return count;
  }
}
export default GetPageCount;
