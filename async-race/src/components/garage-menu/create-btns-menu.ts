import Button from "../button/button";

class CreateButtonsMenu {
  updateBtn: Button;

  createBtn: Button;

  resetBtn: Button;

  raceBtn: Button;

  generateCarsBtn: Button;

  constructor() {
    this.createBtn = new Button("create__btn", "btn", "Create");
    this.updateBtn = new Button("update__btn", "btn", "Update");
    this.raceBtn = new Button("race__btn", "btn", "Race");
    this.resetBtn = new Button("reset__btn", "btn", "Reset");
    this.generateCarsBtn = new Button(
      "generate-car__btn",
      "btn",
      "Generate Car",
    );
  }

  createButtons(): HTMLDivElement {
    const menuBtns: HTMLDivElement = document.createElement("div");
    menuBtns.classList.add("menu__buttons");
    menuBtns.append(
      this.raceBtn.getRootElement(),
      this.resetBtn.getRootElement(),
      this.generateCarsBtn.getRootElement(),
    );
    return menuBtns;
  }
}

export default CreateButtonsMenu;
