import { allPages } from "../view/create-all-pages-api";
import UpdateGaragePages from "../view/update-garage-page";

class App {
  private update: UpdateGaragePages;

  constructor() {
    this.update = new UpdateGaragePages();
  }

  async start(): Promise<void> {
    await allPages.createAllPages();
    await new Promise((resolve) => setTimeout(resolve, 100));
    this.update.removeCar();
    this.update.createCar();
    this.update.selectCar();
  }
}

export default App;
