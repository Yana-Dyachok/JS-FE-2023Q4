import CreateMenuGarage from "../../components/garage-menu/create-menu-garage";
import CreateTrackBlock from "../../view/garage-tracks/create-all-tracks";
import MakeAPICar from "../../api/make-car";

class GaragePage {
  private garagePage: HTMLDivElement;

  private menu: CreateMenuGarage;

  private trackBlock: CreateTrackBlock;

  private makeAPICar: MakeAPICar;

  constructor() {
    this.garagePage = document.createElement("div");
    this.garagePage.classList.add("garage__page");
    this.menu = new CreateMenuGarage();
    this.trackBlock = new CreateTrackBlock();
    this.makeAPICar = new MakeAPICar();
  }

  drawGaragePage(): HTMLDivElement {
    return this.garagePage;
  }
}

export default GaragePage;
