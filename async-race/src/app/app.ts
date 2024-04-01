import { allPages } from "../view/create-all-pages-api";
import EventBtns from "../components/update/event-btns";

class App {
  private eventBtns: EventBtns;

  constructor() {
    this.eventBtns = new EventBtns();
  }

  async start(): Promise<void> {
    await allPages.createAllPages();
    await new Promise((resolve) => setTimeout(resolve, 100));
    this.eventBtns.getBtnsEvents();
  }
}

export default App;
