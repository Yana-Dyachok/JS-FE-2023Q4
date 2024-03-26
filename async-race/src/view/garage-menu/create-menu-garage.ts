import CreateButtonsMenu from "./create-btns-menu";
import CreateInputGarage from "./create-input-garage";
import "./garage-menu.scss";

class CreateMenuGarage {
  private menu: HTMLDivElement;

  private menuBtns: CreateButtonsMenu;

  private createInputs: CreateInputGarage;

  constructor() {
    this.createInputs = new CreateInputGarage();
    this.menuBtns = new CreateButtonsMenu();
    this.menu = document.createElement("div");
    this.menu.classList.add("garage__menu");
  }

  createMenu(): HTMLElement {
    const createCar: HTMLDivElement = document.createElement("div");
    createCar.classList.add("menu__create-car");
    createCar.append(
      this.createInputs.createInputText(),
      this.createInputs.createInputColor(),
      this.menuBtns.createBtn.getRootElement(),
    );
    const updateCar: HTMLDivElement = document.createElement("div");
    updateCar.classList.add("menu__update-car");
    updateCar.append(
      this.createInputs.createInputUpdateText(),
      this.createInputs.createInputUpdateColor(),
      this.menuBtns.updateBtn.getRootElement(),
    );

    this.menu.append(createCar, updateCar, this.menuBtns.createButtons());
    return this.menu;
  }

  getRootElement(): HTMLDivElement {
    return this.menu;
  }
}

export default CreateMenuGarage;
