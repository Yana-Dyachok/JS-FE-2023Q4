import PageName from "../../utils/create-page-number";
import { IWinnersResponse } from "../../types/interfaces";
import CreateWinnersTable from "../../components/winners-table/create-winners-table";
import Pagination from "../../components/pagination/pagination";
import "./winners-page.scss";

class WinnersPage {
  private winnersPage: HTMLDivElement;

  private pageName: PageName;

  private createWinnersTable: CreateWinnersTable;

  private pagination: Pagination;

  constructor() {
    this.winnersPage = document.createElement("div");
    this.winnersPage.classList.add("winners__page");
    this.pageName = new PageName();
    this.createWinnersTable = new CreateWinnersTable();
    this.pagination = new Pagination();
  }

  drawWinnersPage(
    page: string,
    // winnResponse: IWinnersResponse,
  ): HTMLDivElement {
    const pageOrder: HTMLSpanElement | null = document.createElement("span");
    pageOrder.classList.add(`${page.toLocaleLowerCase()}__page-order`);
    pageOrder.textContent = "Page #1";
    this.winnersPage.append(
      // this.pageName.createPageName(page, winnResponse),
      // this.pageName.createPageName(page),
      pageOrder,
      // this.createWinnersTable.createTable(winnResponse),
      // this.pagination.createPagination(page, winnResponse),
    );
    return this.winnersPage;
  }
}

export default WinnersPage;
