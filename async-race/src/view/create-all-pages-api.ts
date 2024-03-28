import GetCarsAPI from "../api/get-cars-api";
import { ICarsResponse, IWinnersResponse } from "../types/interfaces";
import Header from "./header/header";
import GaragePage from "../pages/garage/garage-page";
import WinnersPage from "../pages/winners/winners-page";

class AllPages {
  private header: Header;

  private garagePage: GaragePage;

  private winnersPage: WinnersPage;

  private getCars: GetCarsAPI;

  constructor() {
    this.header = new Header();
    this.garagePage = new GaragePage();
    this.winnersPage = new WinnersPage();
    this.getCars = new GetCarsAPI();
  }

  async createAllPages(): Promise<HTMLElement> {
    const startPage = 1;
    let carResponse: ICarsResponse;
    let winnersResponse: IWinnersResponse;

    try {
      carResponse = await this.getCars.getAllCars(startPage);
      document.body.append(
        this.header.getRootElement(),
        this.garagePage.drawGaragePage("Garage", carResponse),
        this.winnersPage.drawWinnersPage(),
      );
    } catch (error) {
      throw new Error("error");
    }

    return document.body;
  }
}

export const allPages = new AllPages();
