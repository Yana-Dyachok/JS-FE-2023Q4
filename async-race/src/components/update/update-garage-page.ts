import GetCarsAPI from "../../api/get-cars-api";
import { ICarsResponse, ICar, IBody } from "../../types/interfaces";
import { createButtonsMenu } from "../garage-menu/create-btns-menu";
import GetRandomCar from "../../utils/car-random";
import { GetElements } from "../../utils/get-elements";
import CreateTrack from "../garage-tracks/create-track";
import PageName from "../../utils/create-page-number";

class UpdateGaragePages {
  private getCars: GetCarsAPI;

  private getRandomCar: GetRandomCar;

  private getElements: GetElements;

  private createTrack: CreateTrack;

  private pageName: PageName;

  constructor() {
    this.getRandomCar = new GetRandomCar();
    this.getCars = new GetCarsAPI();
    this.getElements = new GetElements();
    this.createTrack = new CreateTrack();
    this.pageName = new PageName();
  }

  generateAllCars(): void {
    createButtonsMenu.generateCarsBtn.onClick(async () => {
      this.getRandomCar.generateHundredCars();
      const carResponse: ICarsResponse = await this.getCars.getAllCars(1);
      const trackBlock: HTMLElement | null = document.querySelector(
        ".garage__track-block",
      );
      if (trackBlock) {
        carResponse.items.forEach((item: ICar): void => {
          this.createTrack = new CreateTrack();
          trackBlock?.append(this.createTrack.createTrack(item));
        });
      }
      this.pageName.createPageName("Garage", carResponse);
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
      if (trackBlock && createdCar.name.length !== 0) {
        trackBlock?.append(this.createTrack.createTrack(createdCar));
      }
      this.pageName.createPageName("Garage", await this.getCars.getAllCars(1));
    });
  }

  updateCar(id: number): void {
    const handleUpdateButtonClick = async () => {
      const updateData: IBody = this.getElements.getUpdateElements();
      if (updateData.name.length !== 0) {
        const updatedCar: ICar = await this.getRandomCar.generateUpdatedCar(
          id,
          updateData,
        );
        this.createTrack.updateTrack(updatedCar);
        createButtonsMenu.updateBtn.setDisabled(true);
        createButtonsMenu.updateBtn.removeEventListener(
          "click",
          handleUpdateButtonClick,
        );
      }
    };

    createButtonsMenu.updateBtn.handleUpdateButtonClick(
      handleUpdateButtonClick,
    );
  }

  raceCars(): void {
    createButtonsMenu.raceBtn.onClick(async () => {
      this.toggleDriveAllCars(true);
      createButtonsMenu.resetBtn.setDisabled(false);
    });
  }

  resetCars(): void {
    createButtonsMenu.resetBtn.onClick(async () => {
      this.toggleDriveAllCars(false);
      createButtonsMenu.resetBtn.setDisabled(true);
    });
  }

  toggleDriveAllCars(flag: boolean): void {
    const carImgs = document.querySelectorAll(".garage__car-img");

    carImgs.forEach((carImg) => {
      if (carImg instanceof HTMLElement) {
        carImg.style.animation = flag
          ? "carsAnimation 4s ease-out forwards"
          : "none";
      }
    });
  }
}

export default UpdateGaragePages;
