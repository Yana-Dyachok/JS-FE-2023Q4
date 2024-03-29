import CreateTrack from "./create-track";
import { ICar, ICarsResponse } from "../../types/interfaces";
import GetCarsAPI from "../../api/get-cars-api";
import { createButtonsMenu } from "../garage-menu/create-btns-menu";
import GetRandomCar from "../../utils/car-random";
import "./garage-track.scss";

class CreateAllTrack {
  private track: CreateTrack;

  private trackBlock: HTMLDivElement;

  private getCars: GetCarsAPI;

  private getRandomCar: GetRandomCar;

  constructor() {
    this.track = new CreateTrack();
    this.trackBlock = document.createElement("div");
    this.trackBlock.classList.add("garage__track-block");
    this.getRandomCar = new GetRandomCar();
    this.getCars = new GetCarsAPI();
    this.generateAllCars();
  }

  createAllTrackBlock(carsResponse: ICarsResponse): HTMLDivElement {
    const cars: ICarsResponse = carsResponse;
    cars.items.forEach((item: ICar): void => {
      this.track = new CreateTrack();
      this.trackBlock.append(this.track.createTrack(item));
    });
    return this.trackBlock;
  }

  generateAllCars() {
    createButtonsMenu.generateCarsBtn.onClick(async () => {
      this.getRandomCar.generateHundredCars();
      let carResponse: ICarsResponse;
      carResponse = await this.getCars.getAllCars(1);
    });
  }
}

export default CreateAllTrack;
