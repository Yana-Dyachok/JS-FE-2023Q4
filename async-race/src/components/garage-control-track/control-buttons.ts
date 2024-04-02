import Button from "../button/button";
import { ICar } from "../../types/interfaces";

class ControlTrackButtons {
  stopBtn: Button;

  startBtn: Button;

  selectBtn: Button;

  removeBtn: Button;

  constructor() {
    this.stopBtn = new Button("stop__btn", "btn", "Stop");
    this.startBtn = new Button("start__btn", "btn", "Start");
    this.selectBtn = new Button("select__btn", "btn", "Select");
    this.removeBtn = new Button("remove__btn", "btn", "Remove");
  }

  getValueControlBtns(car: ICar): void {
    this.stopBtn.getRootElement().setAttribute("data-stop-btn", `${car.id}`);
    this.stopBtn.setDisabled(true);
    this.startBtn.getRootElement().setAttribute("data-start-btn", `${car.id}`);
    this.selectBtn
      .getRootElement()
      .setAttribute("data-select-btn", `${car.id}`);
    this.removeBtn
      .getRootElement()
      .setAttribute("data-remove-btn", `${car.id}`);
  }
}

export default ControlTrackButtons;
