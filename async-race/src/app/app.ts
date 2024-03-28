import Header from "../view/header/header";
import GaragePage from "../pages/garage/garage-page";
import WinnersPage from "../pages/winners/winners-page";
import { allPages } from "../view/create-all-pages-api";

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
    allPages.createAllPages();
  }
}

export default App;
