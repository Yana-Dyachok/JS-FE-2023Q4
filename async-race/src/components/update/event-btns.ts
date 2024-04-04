import UpdateGaragePages from "./update-garage-page";
import EventsEachTracksBtn from "./events-each-track";
import PaginationBtnsEvents from "./pagin-btn-events";

class EventBtns {
  private updateGaragePages: UpdateGaragePages;

  private eventsEachTracksBtn: EventsEachTracksBtn;

  private paginationBtnsEvents: PaginationBtnsEvents;

  constructor() {
    this.updateGaragePages = new UpdateGaragePages();
    this.eventsEachTracksBtn = new EventsEachTracksBtn();
    this.paginationBtnsEvents = new PaginationBtnsEvents();
    const observer = new MutationObserver(() => {
      this.updateButtons();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  getBtnsEvents(): void {
    this.updateGaragePages.createCar();
    this.updateGaragePages.generateAllCars();
    this.eventsEachTracksBtn.selectCar();
    this.eventsEachTracksBtn.removeCar();
    this.updateGaragePages.raceCars();
    this.updateGaragePages.resetCars();
    this.eventsEachTracksBtn.stopCar();
    this.eventsEachTracksBtn.startCar();
    this.paginationBtnsEvents.nextPaginBtn("Garage");
    this.paginationBtnsEvents.prevPaginBtn("Garage");
  }

   updateButtons = () => {
    this.eventsEachTracksBtn.selectCar();
    this.eventsEachTracksBtn.stopCar();
    this.eventsEachTracksBtn.startCar();
    this.eventsEachTracksBtn.removeCar();
  }
}

export default EventBtns;