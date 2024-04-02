import CreateTrackControls from "../garage-control-track/create-control-tracks";
import createCarSVG from "../../utils/create-svg";
import { ICar } from "../../types/interfaces";
import "./garage-track.scss";

class CreateTrack {
  private createTrackControls: CreateTrackControls;

  constructor() {
    this.createTrackControls = new CreateTrackControls();
  }

  private createFlag(data: ICar): HTMLDivElement {
    const flag: HTMLDivElement | null = document.createElement("div");
    flag.classList.add("garage__flag");
    flag.setAttribute("data-flag", `${data.id}`);
    return flag;
  }

  createTrack(car: ICar): HTMLDivElement {
    this.createTrackControls = new CreateTrackControls();
    const track = document.createElement("div");
    track.classList.add("garage__track");
    track.setAttribute("data-track", `${car.id}`);
    const garageContent: HTMLDivElement | null = document.createElement("div");
    garageContent.classList.add("garage__content");
    const garageImg: HTMLDivElement | null = document.createElement("div");
    garageImg.classList.add("garage__car-img");
    garageImg.setAttribute("data-track-img", `${car.id}`);
    garageImg.innerHTML = createCarSVG(car, {
      width: "120px",
      height: "50px",
    });
    garageContent.append(garageImg, this.createFlag(car));
    track.append(
      this.createTrackControls.createTrackControls(car),
      garageContent,
    );
    return track;
  }

  updateTrack(car: ICar): void {
    const garageImg: HTMLElement | null = document.querySelector(
      `[data-track-img="${car.id}"]`,
    );
    const carName: HTMLSpanElement | null = document.querySelector(
      `[data-name="${car.id}"]`,
    );
    if (garageImg)
      garageImg.innerHTML = createCarSVG(car, {
        width: "120px",
        height: "50px",
      });
    if (carName) carName.textContent = car.name;
  }
}

export default CreateTrack;
