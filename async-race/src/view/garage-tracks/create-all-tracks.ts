import CreateTrack from "./create-track";
import { ICar, ICarsResponse } from "../../types/interfaces";
import "./garage-track.scss";

class CreateAllTrack {
  private track: CreateTrack;

  private trackBlock: HTMLDivElement;

  constructor() {
    this.track = new CreateTrack();
    this.trackBlock = document.createElement("div");
    this.trackBlock.classList.add("garage__track-block");
  }

  createAllTrackBlock(carsResponse: ICarsResponse): HTMLDivElement {
    this.track = new CreateTrack();
    const cars: ICarsResponse = carsResponse;
    cars.items.forEach((item: ICar): void => {
      this.trackBlock.append(this.track.createTrack(item));
    });
    return this.trackBlock;
  }
}

export default CreateAllTrack;
