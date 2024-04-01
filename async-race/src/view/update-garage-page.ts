import GetCarsAPI from "../api/get-cars-api";
import DeleteAPI from "../api/delete-api";
import { ICarsResponse, ICar, IBody } from "../types/interfaces";
import { createButtonsMenu } from "../components/garage-menu/create-btns-menu";
import GaragePage from "../pages/garage/garage-page";
import GetRandomCar from "../utils/car-random";
import { GetElements } from "../utils/get-elements";
import CreateTrack from "../components/garage-tracks/create-track";

class UpdateGaragePages {
  private getCars: GetCarsAPI;

  private getRandomCar: GetRandomCar;

  private garagePage: GaragePage;

  private getElements: GetElements;

  private createTrack: CreateTrack;

  private deleteAPI: DeleteAPI;

  constructor() {
    this.garagePage = new GaragePage();
    this.deleteAPI = new DeleteAPI();
    this.getRandomCar = new GetRandomCar();
    this.getCars = new GetCarsAPI();
    this.getElements = new GetElements();
    this.createTrack = new CreateTrack();
    this.generateAllCars();
  }

  generateAllCars(): void {
    createButtonsMenu.generateCarsBtn.onClick(async () => {
      this.getRandomCar.generateHundredCars();
      const carResponse: ICarsResponse = await this.getCars.getAllCars(1);
      this.garagePage.garagePage.append(
        this.garagePage.drawGarageBody("Garage", carResponse),
      );
    });
  }

  createCar(): void {
    createButtonsMenu.createBtn.onClick(async () => {
      const createdCar: ICar = await this.getRandomCar.generateOneCar(
        this.getElements.getCreateElements(),
      );
      const trackBlock: HTMLElement | null = document.querySelector(
        ".garage__track-block",
      );
      if (trackBlock) {
        trackBlock?.append(this.createTrack.createTrack(createdCar));
      }
    });
  }

  updateCar(id: number): void {
    createButtonsMenu.updateBtn.onClick(async () => {
      const updateData: IBody = this.getElements.getUpdateElements();
      const updatedCar: ICar = await this.getRandomCar.generateUpdatedCar(
        id,
        updateData,
      );
      this.createTrack.updateTrack(updatedCar);
      createButtonsMenu.updateBtn.setDisabled(true);
    });
  }

  removeCar(): void {
    const removeBtns: NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(".remove__btn");
    removeBtns.forEach((element: HTMLButtonElement) => {
      element.addEventListener("click", async () => {
        const carId = +Object.values(element.dataset);
        await this.deleteAPI.deleteCarAPi(carId);
        const track: HTMLElement | null = document.querySelector(
          `[data-track="${carId}"]`,
        );
        if (track) track.parentNode?.removeChild(track);
      });
    });
  }

  selectCar(): void {
    const selectBtns: NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(".select__btn");
    selectBtns.forEach((element: HTMLButtonElement) => {
      element.addEventListener("click", async () => {
        createButtonsMenu.updateBtn.setDisabled(false);
        const carId = +Object.values(element.dataset);
        this.updateCar(carId);
      });
    });
  }
}

export default UpdateGaragePages;
