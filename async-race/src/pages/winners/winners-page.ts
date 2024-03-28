import "./winners-page.scss";

class WinnersPage {
  private winnersPage: HTMLDivElement;

  constructor() {
    this.winnersPage = document.createElement("div");
    this.winnersPage.classList.add("winners__page");
  }

  drawWinnersPage = (): HTMLDivElement => this.winnersPage;
}

export default WinnersPage;
