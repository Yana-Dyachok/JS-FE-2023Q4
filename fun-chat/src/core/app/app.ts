import { createFooterElements } from "../components/footer/footer";
import Page from "../components/page/page";

class App {
  private static container: HTMLElement = document.body;

  static renderNewPage(idPage: string) {}

  private enableRouteChange(): void {
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  run() {
    createFooterElements();
    this.enableRouteChange();
  }
}

export default App;
