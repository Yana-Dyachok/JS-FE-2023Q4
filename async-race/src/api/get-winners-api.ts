import { IWinner, IWinnersResponse, IWinnerCars } from "../types/interfaces";
import GetCarsAPI from "./get-cars-api";
import { WINNERS__LINK } from "../types/const-var";

class GetWinnersAPI {
  private getCar: GetCarsAPI;

  constructor() {
    this.getCar = new GetCarsAPI();
  }

  async getWinnersAPI(pageNumber: number): Promise<IWinnersResponse> {
    const response: Response = await fetch(
      `${WINNERS__LINK}?_page=${pageNumber}&_limit=${10}`,
    );
    const items: IWinner[] = await response.json();
    const count: string | null = response.headers.get("X-Total-Count");

    if (!count) {
      throw new Error("X-Total-Count is null");
    }

    const winnersAndCars: IWinnerCars[] = await Promise.all(
      items.map(
        async (winner: IWinner): Promise<IWinnerCars> => ({
          ...winner,
          car: await this.getCar.getCarById(winner.id),
        }),
      ),
    );

    return {
      items: winnersAndCars,
      count,
    };
  }
}

export default GetWinnersAPI;
