import { IWinnerCars, IWinnersResponse } from "../../types/interfaces";
import createCarSVG from "../../utils/create-svg";
import GetPageCount from "../pagination/count-page";
import "./winners-table.scss";

class CreateWinnersTable {
  private getPageCount: GetPageCount;

  private table: HTMLTableElement;

  constructor() {
    this.getPageCount = new GetPageCount();
    this.table = document.createElement("table");
    this.table.classList.add("winners-table");
  }

  createTBody(): HTMLTableSectionElement {
    const tbody: HTMLTableSectionElement = document.createElement("tbody");
    tbody.classList.add("t-body");
    return tbody;
  }

  createTR(value: string): HTMLTableRowElement {
    const tr: HTMLTableRowElement = document.createElement("tr");
    tr.classList.add("tr");
    tr.id = value;
    return tr;
  }

  createTH(value: string, cssClass?: string): HTMLTableCellElement {
    const th: HTMLTableCellElement = document.createElement("th");
    th.classList.add("th");

    if (cssClass !== undefined) {
      th.classList.add(cssClass);
      th.id = cssClass;
    }

    th.textContent = value;
    return th;
  }

  createTD(value: string): HTMLTableCellElement {
    const td: HTMLTableCellElement = document.createElement("td");
    td.classList.add("td");
    td.textContent = value;
    return td;
  }

  createTableHead(): HTMLTableRowElement {
    const number: HTMLTableCellElement = this.createTH("Number");
    const car: HTMLTableCellElement = this.createTH("Car");
    const name: HTMLTableCellElement = this.createTH("Name");
    const wins: HTMLTableCellElement = this.createTH("Wins", "wins");
    const lessTime: HTMLTableCellElement = this.createTH("Time (s)", "time");
    const tr: HTMLTableRowElement = this.createTR("table-head");

    tr.append(number, car, name, wins, lessTime);

    return tr;
  }

  createTableRow(value: IWinnerCars, position: number): HTMLTableRowElement {
    const number: HTMLTableCellElement = this.createTD(`${position}`);
    const garageContent: HTMLDivElement | null = document.createElement("div");
    garageContent.classList.add("winners__content");
    garageContent.innerHTML = createCarSVG(value.car, {
      width: "60px",
      height: "30px",
    });
    const car: HTMLTableCellElement = this.createTD("");
    car.append(garageContent);
    const name: HTMLTableCellElement = this.createTD(`${value.car.name}`);
    const wins: HTMLTableCellElement = this.createTD(`${value.wins}`);
    const bestTime: HTMLTableCellElement = this.createTD(`${value.time}`);
    const tr: HTMLTableRowElement = this.createTR(`table-row-${value.id}`);

    tr.append(number, car, name, wins, bestTime);

    return tr;
  }

  createTable(value: IWinnersResponse): HTMLTableElement {
    const position: (_: number) => number = (_: number): number =>
      (this.getPageCount.getCurrentPage("Winners") - 1) * 10 + _ + 1;
    const tbody: HTMLTableSectionElement = this.createTBody();
    const tableHead: HTMLTableRowElement = this.createTableHead();

    this.table.append(tbody);
    tbody.appendChild(tableHead);

    value.items.forEach((item: IWinnerCars, index: number): void =>
      tbody.append(this.createTableRow(item, position(index))),
    );

    return this.table;
  }
}

export default CreateWinnersTable;
