import { IBody, ICar } from "../../types/interfaces";
import GetCarsAPI from "../../api/get-cars-api";
import DriveOrStopCars from "../drive-cars/get-drive-stop-car";
import CreatePopup from "../popup/create-popup";
import { driveAPI } from "../../api/drive-api";

class BtnMethods {
  private driveOrStop: DriveOrStopCars;

  private popup: CreatePopup;

  private getCar: GetCarsAPI;

  constructor() {
    this.driveOrStop = new DriveOrStopCars();
    this.popup = new CreatePopup();
    this.getCar = new GetCarsAPI();
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
  // async startOneCar(id: number, duration: number) {
  //   const carImg: HTMLButtonElement | null = document.querySelector(
  //    `[data-track-img="${id}"]`,
  //   );
  //   if (carImg){
  //     carImg.style.animation = `carsAnimation ${duration}s ease-out forwards`;

  //     const {success} = await driveAPI(id);
  //     if (!success) carImg.style.animationPlayState = 'paused';
  //   }
  // }

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
    const allPromises: Promise<number>[] = [];

    for (const carImg of carImgs) {
      if (!flag) {
        carImg.style.animation = "none";
      } else {
        const carId = +Object.values(carImg.dataset);
        const promise = this.driveOrStop.makeDrive(carImg, carId);
        allPromises.push(promise);
      }
    }
    const allDurations = await Promise.all(allPromises);
    const minTime: number = Math.min(...allDurations);
    let winnerId: number = 0;
    for (let i = 0; i < carImgs.length; i++) {
      const carImg = carImgs[i];
      const duration = allDurations[i];
      const carId = +Object.values(carImg.dataset);
      if (allDurations[i] === minTime) winnerId = carId;
      this.startOneCar(carId, duration);
    }

    const winner: HTMLElement | null = document.querySelector(
      `[data-name="${winnerId}"]`,
    );
    if (winner) {
      setTimeout(
        () => this.popup.createPopupWinners(minTime, winner.innerText),
        2000 + minTime,
      );
    }
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
