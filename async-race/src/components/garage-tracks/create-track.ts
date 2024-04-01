import CreateTrackControls from "../garage-control-track/create-control-tracks";
import createCarSVG from "../../utils/create-svg";
import { ICar } from "../../types/interfaces";
import "./garage-track.scss";

class CreateTrack {
  private createTrackControls: CreateTrackControls;

  private track: HTMLDivElement;

  constructor() {
    this.createTrackControls = new CreateTrackControls();
    this.track = document.createElement("div");
    this.track.classList.add("garage__track");
  }

  private createFlag(data: ICar): HTMLDivElement {
    const flag: HTMLDivElement | null = document.createElement("div");
    flag.classList.add("garage__flag");
    flag.setAttribute("data-flag", `${data.id}`);
    return flag;
  }

  createTrack(car: ICar): HTMLDivElement {
    this.track.setAttribute("data-track", `${car.id}`);
    const garageContent: HTMLDivElement | null = document.createElement("div");
    garageContent.classList.add("garage__content");
    garageContent.setAttribute("data-track-img", `${car.id}`);
    garageContent.innerHTML = createCarSVG(car, {
      width: "120px",
      height: "50px",
    });
    garageContent.append(this.createFlag(car));
    this.track.append(
      this.createTrackControls.createTrackControls(car),
      garageContent,
    );
    return this.track;
  }

  updateTrack(car: ICar): void {
    const garageContent: HTMLElement | null = document.querySelector(
      `[data-track-img="${car.id}"]`,
    );
    const carName: HTMLSpanElement | null = document.querySelector(
      `[data-name="${car.id}"]`,
    );
    if (garageContent)
      garageContent.innerHTML = createCarSVG(car, {
        width: "120px",
        height: "50px",
      });
    if (carName) carName.textContent = car.name;
  }
}

export default CreateTrack;
