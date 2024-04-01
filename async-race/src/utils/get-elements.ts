import { CarName, CarColor } from "../types/types";
import { IBody, IButtonEvents } from "../types/interfaces";

export class GetElements {
  getButton(event: Event): IButtonEvents {
    const target: HTMLButtonElement = event.target as HTMLButtonElement;
    const carId = Number(target.value);
    return { target, carId };
  }

  getElementId(event: Event): string {
    return (event.target as HTMLElement).id;
  }

  getCreateElements(): { name: CarName; color: CarColor } {
    const inputText: HTMLInputElement | null = document.getElementById(
      "input-text",
    ) as HTMLInputElement | null;
    const inputColor: HTMLInputElement | null = document.getElementById(
      "input-color",
    ) as HTMLInputElement | null;
    if (!inputText || !inputColor) {
      throw new Error("Data doesn't exist");
    }
    const name: CarName = inputText.value as CarName;
    const color: CarColor = inputColor.value as CarColor;
    return { name, color };
  }

  getUpdateElements(): IBody {
    const inputText: HTMLInputElement | null = document.getElementById(
      "input-update-text",
    ) as HTMLInputElement | null;
    const inputColor: HTMLInputElement | null = document.getElementById(
      "input-update-color",
    ) as HTMLInputElement | null;
    if (!inputText || !inputColor) {
      throw new Error("Data doesn't exist");
    }
    const name: CarName = inputText.value as CarName;
    const color: CarColor = inputColor.value as CarColor;

    return { name, color };
  }
}
