import GetCarsAPI from "../../api/get-cars-api";
import { ICarsResponse, ICar } from "../../types/interfaces";
import CreateTrack from "../garage-tracks/create-track";
import PageName from "../../utils/create-page-number";
import GetPageCount from "../pagination/count-page";
import Pagination from "../pagination/pagination";

class PaginationBtnsEvents {
  private getCars: GetCarsAPI;

  private createTrack: CreateTrack;

  private pageName: PageName;

  private getPageCount: GetPageCount;

  private pagination: Pagination;

  constructor() {
    this.getCars = new GetCarsAPI();
    this.pagination = new Pagination();
    this.createTrack = new CreateTrack();
    this.pageName = new PageName();
    this.getPageCount = new GetPageCount();
  }

  nextPaginBtn() {
    const nextBtn: HTMLButtonElement | null = document.querySelector(
      `[data-next-btn="garage"]`,
    );
    const pageCount: HTMLButtonElement | null = document.querySelector(
      `[data-page-count="garage"]`,
    );
    if (nextBtn)
      nextBtn.addEventListener("click", async () => {
        const currentPage: number = this.getPageCount.setСountPagination(
          "Garage",
          "+",
        );
        const carResponse: ICarsResponse =
          await this.getCars.getAllCars(currentPage);
        if (pageCount)
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
        this.pageName.createPageName("Garage", carResponse);
      });
  }

  prevPaginBtn() {
    const prevBtn: HTMLButtonElement | null = document.querySelector(
      `[data-prev-btn="garage"]`,
    );
    const pageCount: HTMLButtonElement | null = document.querySelector(
      `[data-page-count="garage"]`,
    );
    if (prevBtn)
      prevBtn.addEventListener("click", async () => {
        const currentPage: number = this.getPageCount.setСountPagination(
          "Garage",
          "-",
        );
        const carResponse: ICarsResponse =
          await this.getCars.getAllCars(currentPage);
        this.pagination.toggleDisablePaginBtn("Garage", carResponse);
        if (pageCount)
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
        this.pageName.createPageName("Garage", carResponse);
      });
  }
}

export default PaginationBtnsEvents;
