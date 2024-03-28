import Header from "../view/header/header";
import GaragePage from "../pages/garage/garage-page";
import WinnersPage from "../pages/winners/winners-page";

class App {
  private header: Header;

  private garagePage: GaragePage;

  private winnersPage: WinnersPage;

  constructor() {
    this.header = new Header();
    this.garagePage = new GaragePage();
    this.winnersPage = new WinnersPage();
  }

  start(): void {
    document.body.append(
      this.header.getRootElement(),
      this.garagePage.drawGaragePage(),
      this.winnersPage.drawWinnersPage(),
    );
  }
}

export default App;
