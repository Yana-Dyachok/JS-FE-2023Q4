import Button from "../button/button";

class GarageButton extends Button {
  constructor() {
    super("garage__btn", "btn", "to garage");
    this.onClick(() => this.togglePages("garage"));
  }
}

export default GarageButton;
