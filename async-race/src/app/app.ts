import Header from "../view/header/header";
import GaragePage from "../pages/garage/garage-page";

class App {
  private header: Header;

  private garagePage: GaragePage;

  constructor() {
    this.header = new Header();
    this.garagePage = new GaragePage();
  }

  start(): void {
    document.body.append(
      this.header.getRootElement(),
      this.garagePage.drawGaragePage(),
    );
  }
}

export default App;
