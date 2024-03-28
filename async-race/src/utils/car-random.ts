import { ICar, IBody } from "../types/interfaces";
import { CarName } from "../types/types";
import MakeAPICar from "../api/make-car";
import carsNames from "../components/cars-data/cars-names";
import carsModels from "../components/cars-data/cars-models";

class GetRandomCar {
  private makeCarAPI: MakeAPICar;

  constructor() {
    this.makeCarAPI = new MakeAPICar();
  }

  createRandomCarName(): CarName {
    const randomNames = Math.floor(Math.random() * carsNames.length);
    const randomModels = Math.floor(Math.random() * carsModels.length);
    return `${carsNames[randomNames]} ${carsModels[randomModels]}`;
  }

  createRandomColor = (): string =>
    Math.floor(Math.random() * 16777215).toString(16);

  createRandomCar(): IBody {
    return {
      name: this.createRandomCarName(),
      color: `#${this.createRandomColor()}`,
    };
  }

  async generateHundredCars(): Promise<ICar[]> {
    const cars = [];
    for (let i = 0; i < 100; i += 1) {
      cars.push(this.makeCarAPI.makeCar(this.createRandomCar()));
    }
    return Promise.all(cars);
  }
}

export default GetRandomCar;
