import UpdateGaragePages from "./update-garage-page";
import EventsEachTracksBtn from "./events-each-track";

class EventBtns {
  private updateGaragePages: UpdateGaragePages;

  private eventsEachTracksBtn: EventsEachTracksBtn;

  constructor() {
    this.updateGaragePages = new UpdateGaragePages();
    this.eventsEachTracksBtn = new EventsEachTracksBtn();
  }

  getBtnsEvents(): void {
    this.updateGaragePages.createCar();
    this.updateGaragePages.generateAllCars();
    this.eventsEachTracksBtn.selectCar();
    this.eventsEachTracksBtn.removeCar();
    this.updateGaragePages.raceCars();
    this.updateGaragePages.resetCars();
  }
}

export default EventBtns;
