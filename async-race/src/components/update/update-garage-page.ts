import GetCarsAPI from "../../api/get-cars-api";
import DeleteAPI from "../../api/delete-api";
import { ICarsResponse, ICar, IBody } from "../../types/interfaces";
import { createButtonsMenu } from "../garage-menu/create-btns-menu";
import CreateAllTrack from "../garage-tracks/create-all-tracks";
import GetRandomCar from "../../utils/car-random";
import { GetElements } from "../../utils/get-elements";
import CreateTrack from "../garage-tracks/create-track";

class UpdateGaragePages {
  private getCars: GetCarsAPI;

  private getRandomCar: GetRandomCar;

  private createAllTrack: CreateAllTrack;

  private getElements: GetElements;

  private createTrack: CreateTrack;

  private deleteAPI: DeleteAPI;

  constructor() {
    this.createAllTrack = new CreateAllTrack();
    this.deleteAPI = new DeleteAPI();
    this.getRandomCar = new GetRandomCar();
    this.getCars = new GetCarsAPI();
    this.getElements = new GetElements();
    this.createTrack = new CreateTrack();
  }

  generateAllCars(): void {
    createButtonsMenu.generateCarsBtn.onClick(async () => {
      this.getRandomCar.generateHundredCars();
      const carResponse: ICarsResponse = await this.getCars.getAllCars(1);
      this.createAllTrack.createGeneratedCars(carResponse);
      this.changePageName(carResponse);
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
      this.changePageName(await this.getCars.getAllCars(1));
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
        this.changePageName(await this.getCars.getAllCars(1));
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

  private changePageName(response: ICarsResponse): void {
    const pageName: HTMLElement | null = document.querySelector(
      `[data-page-name="Garage"]`,
    );
    const { count } = response;
    if (pageName) pageName.textContent = `Garage (${count})`;
  }
}

export default UpdateGaragePages;
