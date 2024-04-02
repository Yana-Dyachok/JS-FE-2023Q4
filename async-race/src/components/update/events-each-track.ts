import GetCarsAPI from "../../api/get-cars-api";
import DeleteAPI from "../../api/delete-api";
import { createButtonsMenu } from "../garage-menu/create-btns-menu";
import PageName from "../../utils/create-page-number";
import UpdateGaragePages from "./update-garage-page";

class EventsEachTracksBtn {
  private getCars: GetCarsAPI;

  private deleteAPI: DeleteAPI;

  private updateGaragePages: UpdateGaragePages;

  private pageName: PageName;

  constructor() {
    this.deleteAPI = new DeleteAPI();
    this.getCars = new GetCarsAPI();
    this.pageName = new PageName();
    this.updateGaragePages = new UpdateGaragePages();
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
        this.updateGaragePages.updateCar(carId);
      });
    });
  }
}

export default EventsEachTracksBtn;
