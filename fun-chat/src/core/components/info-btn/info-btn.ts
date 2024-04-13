import Button from "../button/button";

class InfoButton extends Button {
  constructor() {
    super("info__btn", "btn", "Info", "button");

    this.onClick(() => {
      window.location.hash = "info";
    });
  }
}

export default InfoButton;
