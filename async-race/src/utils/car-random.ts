import { ICar, IBody } from "../types/interfaces";
import { CarName } from "../types/types";
import MakeAPICar from "../api/make-car";
import UpdateAPI from "../api/update-api";
import carsNames from "../components/cars-data/cars-names";
import carsModels from "../components/cars-data/cars-models";

class GetRandomCar {
  private makeCarAPI: MakeAPICar;

  private updateAPI: UpdateAPI;

  constructor() {
    this.makeCarAPI = new MakeAPICar();
    this.updateAPI = new UpdateAPI();
  }

  createRandomCarName(): CarName {
    const randomNames = Math.floor(Math.random() * carsNames.length);
    const randomModels = Math.floor(Math.random() * carsModels.length);
    return `${carsNames[randomNames]} ${carsModels[randomModels]}`;
  }

  createRandomColor = (): string =>
    Math.floor(Math.random() * 16777215).toString(16);

  createRandomCarBody(): IBody {
    return {
      name: this.createRandomCarName(),
      color: `#${this.createRandomColor()}`,
    };
  }

  async generateOneCar(body: IBody): Promise<ICar> {
    return this.makeCarAPI.makeCar(body);
  }

  async generateUpdatedCar(id: number, body: IBody): Promise<ICar> {
    return this.updateAPI.updateCarAPI(id, body);
  }

  async generateHundredCars(): Promise<ICar[]> {
    const cars = [];
    for (let i = 0; i < 100; i += 1) {
      cars.push(this.makeCarAPI.makeCar(this.createRandomCarBody()));
    }
    return Promise.all(cars);
  }
}

export default GetRandomCar;
