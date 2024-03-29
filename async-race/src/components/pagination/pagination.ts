import { ICarsResponse, IWinnersResponse } from "../../types/interfaces";
import GetPageCount from "./count-page";
import Button from "../button/button";
import "./pagination.scss";

class Pagination {
  prevBtn: Button;

  nextBtn: Button;

  private getPageCount: GetPageCount;

  private pagination: HTMLDivElement;

  constructor() {
    this.prevBtn = new Button("prev__btn", "pagin__btn", "Prev");
    this.nextBtn = new Button("next__btn", "pagin__btn", "Next");
    this.getPageCount = new GetPageCount();
    this.pagination = document.createElement("div");
  }

  createPagination(
    page: string,
    value: ICarsResponse | IWinnersResponse,
  ): HTMLDivElement {
    this.pagination.classList.add(`${page.toLocaleLowerCase()}__pagination`);
    this.prevBtn
      .getRootElement()
      .setAttribute("data-prev-btn", `${page.toLocaleLowerCase()}`);
    this.nextBtn
      .getRootElement()
      .setAttribute("data-next-btn", `${page.toLocaleLowerCase()}`);
    this.pagination.append(
      this.prevBtn.getRootElement(),
      this.getPageCount.generatePageCount(page, value),
      this.nextBtn.getRootElement(),
    );
    return this.pagination;
  }

  toggleDisablePaginBtn(
    page: string,
    value: ICarsResponse | IWinnersResponse,
  ): void {
    const currentPage = this.getPageCount.getCurrentPage(page);
    const lastPage = this.getPageCount.getLastPage(page, value);
    if (currentPage >= lastPage) {
      this.nextBtn.setDisabled(true);
    } else {
      this.nextBtn.setDisabled(false);
    }
    if (currentPage <= 1) {
      this.prevBtn.setDisabled(true);
    } else {
      this.prevBtn.setDisabled(false);
    }
  }
}

export default Pagination;
