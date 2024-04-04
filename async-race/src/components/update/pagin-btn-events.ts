import GetCarsAPI from "../../api/get-cars-api";
import { ICarsResponse, ICar } from "../../types/interfaces";
import CreateTrack from "../garage-tracks/create-track";
import PageName from "../../utils/create-page-number";
import GetPageCount from "../pagination/count-page";

class PaginationBtnsEvents {
  private getCars: GetCarsAPI;

  private createTrack: CreateTrack;

  private pageName: PageName;

  private getPageCount: GetPageCount;

  constructor() {
    this.getCars = new GetCarsAPI();
    this.createTrack = new CreateTrack();
    this.pageName = new PageName();
    this.getPageCount = new GetPageCount();
  }

  nextPaginBtn(page: string) {
    const nextBtn: HTMLButtonElement | null = document.querySelector(
      `[data-next-btn="${page.toLocaleLowerCase()}"]`,
    );
    const pageCount: HTMLButtonElement | null = document.querySelector(
      `[data-page-count="${page.toLocaleLowerCase()}"]`,
    );
    const pageOrder: HTMLSpanElement | null = document.querySelector(
      `.${page.toLocaleLowerCase()}__page-order`
    );
    if (nextBtn)
      nextBtn.addEventListener("click", async () => {
        const currentPage: number = this.getPageCount.setСountPagination(
          page,
          "+",
        );
        if(pageOrder) pageOrder.textContent=`Page#${currentPage}`;
        const carResponse: ICarsResponse =
          await this.getCars.getAllCars(currentPage);
          if (pageCount&&page==="Garage") {
          pageCount.textContent = `${currentPage}/${Math.ceil(+carResponse.count / 7)}`;
        const trackBlock: HTMLElement | null = document.querySelector(
          ".garage__track-block",
        );
        if (trackBlock) {
          trackBlock.innerHTML = "";
          carResponse.items.forEach((item: ICar): void => {
            this.createTrack = new CreateTrack();
            trackBlock?.append(this.createTrack.createTrack(item));
          });
        }
        this.pageName.createPageName(page, carResponse);
      }
      });
  }

  prevPaginBtn(page: string) {
    const prevBtn: HTMLButtonElement | null = document.querySelector(
      `[data-prev-btn="${page.toLocaleLowerCase()}"]`,
    );
    const pageCount: HTMLButtonElement | null = document.querySelector(
      `[data-page-count="${page.toLocaleLowerCase()}"]`,
    );
    const pageOrder: HTMLSpanElement | null = document.querySelector(
      `.${page.toLocaleLowerCase()}__page-order`,
    );
    if (prevBtn)
      prevBtn.addEventListener("click", async () => {
        const currentPage: number = this.getPageCount.setСountPagination(
          page,
          "-",
        );
        if(pageOrder) pageOrder.textContent=`Page#${currentPage}`;
        const carResponse: ICarsResponse =
          await this.getCars.getAllCars(currentPage);
        if (pageCount&&page==="Garage") {
          pageCount.textContent = `${currentPage}/${Math.ceil(+carResponse.count / 7)}`;
          const trackBlock: HTMLElement | null = document.querySelector(
            ".garage__track-block",
          );
          if (trackBlock) {
            trackBlock.innerHTML = "";
            carResponse.items.forEach((item: ICar): void => {
              this.createTrack = new CreateTrack();
              trackBlock?.append(this.createTrack.createTrack(item));
            });
          }
          this.pageName.createPageName(page, carResponse);
        }
      });
  }
}

export default PaginationBtnsEvents;
