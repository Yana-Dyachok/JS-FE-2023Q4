import CreateMenuGarage from "../../components/garage-menu/create-menu-garage";
import CreateAllTrack from "../../view/garage-tracks/create-all-tracks";
import MakeAPICar from "../../api/make-car";

class GaragePage {
  private garagePage: HTMLDivElement;

  private menu: CreateMenuGarage;

  private trackBlock: CreateAllTrack;

  private makeAPICar: MakeAPICar;

  constructor() {
    this.garagePage = document.createElement("div");
    this.garagePage.classList.add("garage__page");
    this.menu = new CreateMenuGarage();
    this.trackBlock = new CreateAllTrack();
    this.makeAPICar = new MakeAPICar();
  }

  drawGaragePage(): HTMLDivElement {
    this.garagePage.append(this.menu.createMenu());
    return this.garagePage;
  }
}

export default GaragePage;
