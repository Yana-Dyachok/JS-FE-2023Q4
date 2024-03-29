import CreateMenuGarage from "../../components/garage-menu/create-menu-garage";
import CreateAllTrack from "../../components/garage-tracks/create-all-tracks";
import PageName from "../../utils/create-page-number";
import { ICarsResponse } from "../../types/interfaces";
import Pagination from "../../components/pagination/pagination";

class GaragePage {
  garagePage: HTMLDivElement;

  garageBody: HTMLDivElement;

  private menu: CreateMenuGarage;

  private trackBlock: CreateAllTrack;

  private pageName: PageName;

  private pagination: Pagination;

  constructor() {
    this.garagePage = document.createElement("div");
    this.garagePage.classList.add("garage__page");
    this.garageBody = document.createElement("div");
    this.garageBody.classList.add("garage__body");
    this.menu = new CreateMenuGarage();
    this.trackBlock = new CreateAllTrack();
    this.pageName = new PageName();
    this.pagination = new Pagination();
  }

  drawGaragePage(page: string, carResponse: ICarsResponse): HTMLDivElement {
    this.garagePage.append(
      this.menu.createMenu(),
      this.drawGarageBody(page, carResponse),
    );
    return this.garagePage;
  }

  drawGarageBody(page: string, carResponse: ICarsResponse): HTMLDivElement {
    const pageOrder: HTMLSpanElement | null = document.createElement("span");
    pageOrder.classList.add(`${page.toLocaleLowerCase()}__page-order`);
    pageOrder.textContent = "Page #1";
    this.garageBody.append(
      this.pageName.createPageName(page, carResponse),
      pageOrder,
      this.trackBlock.createAllTrackBlock(carResponse),
      this.pagination.createPagination(page, carResponse),
    );
    return this.garageBody;
  }
}

export default GaragePage;
