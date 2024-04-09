import { createFooterElements } from "../components/footer/footer";
import MainPage from "../components/page/main/main-page";
import Page from "../components/page/page";

class App {
  private static container: HTMLElement = document.body;
  private static defaultPageId: string = 'current-page';

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    if (idPage === "main") {
      page = new MainPage(idPage);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML);
    }
  }
  private enableRouteChange(): void {
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }
 constructor() {

 }
  run() {
    App.renderNewPage('main');
    this.enableRouteChange();
    window.location.hash = "main";
  }
}

export default App;
