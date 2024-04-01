import UpdateGaragePages from "./update-garage-page";

class EventBtns {
  private updateGaragePages: UpdateGaragePages;

  constructor() {
    this.updateGaragePages = new UpdateGaragePages();
  }

  getBtnsEvents(): void {
    this.updateGaragePages.createCar();
    this.updateGaragePages.generateAllCars();
    this.updateGaragePages.selectCar();
    this.updateGaragePages.removeCar();
  }
}

export default EventBtns;
