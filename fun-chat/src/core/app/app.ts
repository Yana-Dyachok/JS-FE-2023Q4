import InfoPage from "../../pages/info-page/info-page";
import MainPage from "../../pages/main-page/main-page";
import Page from "../components/page/page";
import LoginPage from "../../pages/login-page/login-page";

class App {
  private static container: HTMLElement = document.body;

  private static defaultPageId: string = "current-page";

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    if (idPage === "main") {
      page = new MainPage(idPage);
    } else if (idPage === "info") {
      page = new InfoPage(idPage);
    } else if (idPage === "login") {
      page = new LoginPage(idPage);
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

  run() {
    App.renderNewPage("login");
    this.enableRouteChange();
    window.location.hash = "login";
  }
}

export default App;
