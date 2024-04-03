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
    this.paginationBtnsEvents.nextPaginBtn();
    this.paginationBtnsEvents.prevPaginBtn();
  }
}

export default EventBtns;

// import UpdateGaragePages from "./update-garage-page";
// import EventsEachTracksBtn from "./events-each-track";
// import PaginationBtnsEvents from "./pagin-btn-events";

// class EventBtns {
//   private updateGaragePages: UpdateGaragePages;
//   private eventsEachTracksBtn: EventsEachTracksBtn;
//   private paginationBtnsEvents: PaginationBtnsEvents;

//   constructor() {
//     this.updateGaragePages = new UpdateGaragePages();
//     this.eventsEachTracksBtn = new EventsEachTracksBtn();
//     this.paginationBtnsEvents = new PaginationBtnsEvents();
//     const observer = new MutationObserver(() => {
//       this.reactToChanges();
//     });
//     observer.observe(document.body, { childList: true, subtree: true });
//   }

//   reactToChanges(): void {
//     this.updateGaragePages.createCar();
//     this.updateGaragePages.generateAllCars();
//     this.eventsEachTracksBtn.selectCar();
//     this.eventsEachTracksBtn.removeCar();
//     this.updateGaragePages.raceCars();
//     this.updateGaragePages.resetCars();
//     this.eventsEachTracksBtn.stopCar();
//     this.eventsEachTracksBtn.startCar();
//     this.paginationBtnsEvents.nextPaginBtn();
//     this.paginationBtnsEvents.prevPaginBtn();
//   }
// }

// export default EventBtns;
