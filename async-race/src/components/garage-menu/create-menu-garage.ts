import { createButtonsMenu } from "./create-btns-menu";
import CreateInputGarage from "./create-input-garage";
import "./garage-menu.scss";

class CreateMenuGarage {
  private menu: HTMLDivElement;

  private createInputs: CreateInputGarage;

  constructor() {
    this.createInputs = new CreateInputGarage();
    this.menu = document.createElement("div");
    this.menu.classList.add("garage__menu");
  }

  createMenu(): HTMLDivElement {
    const createCar: HTMLDivElement = document.createElement("div");
    createCar.classList.add("menu__create-car");
    createCar.append(
      this.createInputs.createInputText(),
      this.createInputs.createInputColor(),
      createButtonsMenu.createBtn.getRootElement(),
    );
    const updateCar: HTMLDivElement = document.createElement("div");
    updateCar.classList.add("menu__update-car");
    updateCar.append(
      this.createInputs.createInputUpdateText(),
      this.createInputs.createInputUpdateColor(),
      createButtonsMenu.updateBtn.getRootElement(),
    );

    this.menu.append(createCar, updateCar, createButtonsMenu.createButtons());
    return this.menu;
  }
}

export default CreateMenuGarage;
