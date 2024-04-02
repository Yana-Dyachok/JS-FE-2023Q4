import { IBody } from "../../types/interfaces";

class BtnMethods {
  stopOneCar(id: number): void {
    const carImg: HTMLButtonElement | null = document.querySelector(
      `[data-track-img="${id}"]`,
    );
    if (carImg) carImg.style.animation = "none";
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

  toggleDriveAllCars(flag: boolean): void {
    const carImgs: NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(".garage__car-img");

    carImgs.forEach((carImg: HTMLButtonElement) => {
      if (carImg instanceof HTMLElement) {
        carImg.style.animation = flag
          ? "carsAnimation 4s ease-out forwards"
          : "none";
      }
    });
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
