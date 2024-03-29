import GetCarsAPI from "../api/get-cars-api";
import { ICarsResponse } from "../types/interfaces";
import { createButtonsMenu } from "../components/garage-menu/create-btns-menu";
import GaragePage from "../pages/garage/garage-page";
import GetRandomCar from "../utils/car-random";

class UpdateGaragePages {
  private getCars: GetCarsAPI;

  private getRandomCar: GetRandomCar;

  private garagePage: GaragePage;

  constructor() {
    this.garagePage = new GaragePage();
    this.getRandomCar = new GetRandomCar();
    this.getCars = new GetCarsAPI();
    this.generateAllCars();
  }

  generateAllCars() {
    createButtonsMenu.generateCarsBtn.onClick(async () => {
      this.getRandomCar.generateHundredCars();
      let carResponse: ICarsResponse;
      carResponse = await this.getCars.getAllCars(1);
      this.garagePage.garagePage.append(
        this.garagePage.drawGarageBody("Garage", carResponse),
      );
    });
  }
}

export default UpdateGaragePages;
