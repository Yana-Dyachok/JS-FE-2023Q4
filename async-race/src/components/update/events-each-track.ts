import GetCarsAPI from "../../api/get-cars-api";
import DeleteAPI from "../../api/delete-api";
import { createButtonsMenu } from "../garage-menu/create-btns-menu";
import PageName from "../../utils/create-page-number";
import UpdateGaragePages from "./update-garage-page";
import BtnMethods from "./btn-methods";
import { ICar } from "../../types/interfaces";
import DriveOrStopCars from "../drive-cars/get-drive-stop-car";

class EventsEachTracksBtn {
  private getCars: GetCarsAPI;

  private deleteAPI: DeleteAPI;

  private updateGaragePages: UpdateGaragePages;

  private pageName: PageName;

  private btnMethods: BtnMethods;

  private driveOrStop: DriveOrStopCars;

  constructor() {
    this.deleteAPI = new DeleteAPI();
    this.getCars = new GetCarsAPI();
    this.pageName = new PageName();
    this.updateGaragePages = new UpdateGaragePages();
    this.btnMethods = new BtnMethods();
    this.driveOrStop = new DriveOrStopCars();
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
        this.pageName.createPageName(
          "Garage",
          await this.getCars.getAllCars(1),
        );
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
        const car: ICar = await this.getCars.getCarById(carId);
        this.btnMethods.setSelectedElements({
          name: car.name,
          color: car.color,
        });
        this.updateGaragePages.updateCar(carId);
        window.scrollTo(0, 0);
      });
    });
  }

  stopCar(): void {
    const selectBtns: NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(".stop__btn");
    selectBtns.forEach((element: HTMLButtonElement) => {
      element.addEventListener("click", async () => {
        const carId = +Object.values(element.dataset);
        this.btnMethods.stopOneCar(carId);
        this.btnMethods.toggleDisabledOneBtn(true, element);
        this.btnMethods.removeDisabledOneBtn(carId, "start");
      });
    });
  }

  startCar(): void {
    const selectBtns: NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(".start__btn");
    selectBtns.forEach((element: HTMLButtonElement) => {
      element.addEventListener("click", async () => {
        const carId = +Object.values(element.dataset);
        const duration: number = await this.driveOrStop.makeDrive(
          element,
          carId,
        );
        this.btnMethods.startOneCar(carId, duration);
        this.btnMethods.toggleDisabledOneBtn(true, element);
        this.btnMethods.removeDisabledOneBtn(carId, "stop");
      });
    });
  }
}

export default EventsEachTracksBtn;
