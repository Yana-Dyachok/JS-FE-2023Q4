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

  getValueControlBtns(value: ICar): void {
    this.stopBtn.getRootElement().value = `${value.id}`;
    this.startBtn.getRootElement().value = `${value.id}`;
    this.selectBtn.getRootElement().value = `${value.id}`;
    this.removeBtn.getRootElement().value = `${value.id}`;
  }
}

export default ControlTrackButtons;
