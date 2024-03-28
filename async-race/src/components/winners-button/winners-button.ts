import Button from "../button/button";

class WinnersButton extends Button {
  constructor() {
    super("winners__btn", "btn", "to winners");
    this.onClick(() => this.togglePages("winners"));
  }
}

export default WinnersButton;
