import ControlTrackButtons from "./control-buttons";
import { ICar } from "../../types/interfaces";

import "./create-controls-garage.scss";

class CreateTrackControls {
  private buttons: ControlTrackButtons;

  private controlsBlock: HTMLDivElement;

  constructor() {
    this.buttons = new ControlTrackButtons();
    this.controlsBlock = document.createElement("div");
    this.controlsBlock.classList.add("garage__controls");
  }

  createCarName(carName: ICar): HTMLSpanElement {
    const controlCarName: HTMLElement = document.createElement("span");
    controlCarName.classList.add("control__car-name");
    controlCarName.textContent = `${carName.name}`;
    return controlCarName;
  }

  createTrackControls(car: ICar): HTMLDivElement {
    this.buttons.getValueControlBtns(car);
    const controlHang: HTMLDivElement = document.createElement("div");
    controlHang.classList.add("control-hang");
    controlHang.append(
      this.buttons.selectBtn.getRootElement(),
      this.buttons.removeBtn.getRootElement(),
    );
    const controlMotion: HTMLDivElement = document.createElement("div");
    controlMotion.classList.add("control-motion");
    controlMotion.append(
      this.buttons.startBtn.getRootElement(),
      this.buttons.stopBtn.getRootElement(),
    );

    this.controlsBlock.append(
      controlHang,
      controlMotion,
      this.createCarName(car),
    );
    return this.controlsBlock;
  }
}

export default CreateTrackControls;
