import { IBody } from "../../types/interfaces";
import { CarName } from "../../types/types";
import DriveOrStopCars from "../drive-cars/get-drive-stop-car";
import CreatePopup from "../popup/create-popup";

class BtnMethods {
  private driveOrStop: DriveOrStopCars;

  private popup: CreatePopup;

  constructor() {
    this.driveOrStop = new DriveOrStopCars();
    this.popup = new CreatePopup();
  }

  stopOneCar(id: number): void {
    const carImg: HTMLButtonElement | null = document.querySelector(
      `[data-track-img="${id}"]`,
    );
    if (carImg) carImg.style.animation = "none";
  }

  startOneCar(id: number, duration: number): void {
    const carImg: HTMLButtonElement | null = document.querySelector(
      `[data-track-img="${id}"]`,
    );
    if (carImg)
      carImg.style.animation = `carsAnimation ${duration}s ease-out forwards`;
  }

  toggleDisabledAllBtn(stop: boolean, start: boolean): void {
    const stopBtns: NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(".stop__btn");
    const startBtns: NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(".start__btn");
    stopBtns.forEach((stopBtn: HTMLButtonElement) => {
      this.toggleDisabledOneBtn(stop, stopBtn);
    });
    startBtns.forEach((startBtn: HTMLButtonElement) => {
      this.toggleDisabledOneBtn(start, startBtn);
    });
  }

  toggleDisabledOneBtn(flag: boolean, element: HTMLButtonElement): void {
    if (element instanceof HTMLElement) {
      flag
        ? element.setAttribute("disabled", "disabled")
        : element.removeAttribute("disabled");
    }
  }

  removeDisabledOneBtn(id: number, dataset: string) {
    const btn: HTMLElement | null = document.querySelector(
      `[data-${dataset}-btn="${id}"]`,
    );
    if (btn instanceof HTMLElement) btn.removeAttribute("disabled");
  }

  async toggleDriveAllCars(flag: boolean): Promise<void> {
    const carImgs: NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(".garage__car-img");
    const allDurations: number[] = [];

    for (const carImg of carImgs) {
      if (!flag) {
        carImg.style.animation = "none";
      } else {
        const carId = +Object.values(carImg.dataset);
        const duration = await this.driveOrStop.makeDrive(carImg, carId);
        allDurations.push(duration);
        this.startOneCar(carId, duration);
      }
    }
    // setTimeout(()=>this.popup.createPopupWinners(duration, name), Math.min(...allDurations));
    // console.log(allDurations);
  }

  setSelectedElements(body: IBody): void {
    const inputText: HTMLInputElement | null = document.getElementById(
      "input-update-text",
    ) as HTMLInputElement | null;
    const inputColor: HTMLInputElement | null = document.getElementById(
      "input-update-color",
    ) as HTMLInputElement | null;
    if (inputText) inputText.value = body.name;
    if (inputColor) inputColor.value = body.color;
  }
}
export default BtnMethods;
