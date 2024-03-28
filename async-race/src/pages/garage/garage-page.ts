import CreateMenuGarage from "../../components/garage-menu/create-menu-garage";
import CreateAllTrack from "../../components/garage-tracks/create-all-tracks";
import PageName from "../../utils/create-page-number";
import { ICarsResponse } from "../../types/interfaces";

class GaragePage {
  private garagePage: HTMLDivElement;

  private menu: CreateMenuGarage;

  private trackBlock: CreateAllTrack;

  private pageName: PageName;

  constructor() {
    this.garagePage = document.createElement("div");
    this.garagePage.classList.add("garage__page");
    this.menu = new CreateMenuGarage();
    this.trackBlock = new CreateAllTrack();
    this.pageName = new PageName();
  }

  drawGaragePage(page: string, carResponse: ICarsResponse): HTMLDivElement {
    const pageOrder: HTMLSpanElement | null = document.createElement("span");
    pageOrder.textContent = "Page #1";
    this.garagePage.append(
      this.menu.createMenu(),
      this.pageName.createPageName(page, carResponse),
      pageOrder,
      this.trackBlock.createAllTrackBlock(carResponse),
    );
    return this.garagePage;
  }
}

export default GaragePage;
