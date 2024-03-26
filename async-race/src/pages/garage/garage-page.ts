import CreateMenuGarage from "../../view/garage-menu/create-menu-garage";

class GaragePage {
  private garagePage: HTMLDivElement;

  private menu: CreateMenuGarage;

  constructor() {
    this.garagePage = document.createElement("div");
    this.garagePage.classList.add("garage__page");
    this.menu = new CreateMenuGarage();
  }

  drawGaragePage(): HTMLDivElement {
    this.garagePage.append(this.menu.createMenu());
    return this.garagePage;
  }
}

export default GaragePage;
