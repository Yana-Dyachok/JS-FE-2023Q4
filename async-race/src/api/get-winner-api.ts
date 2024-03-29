import { IWinner } from "../types/interfaces";

class GetWinnerAPI {
  async getWinnerFromAPI(id: number): Promise<IWinner> {
    const response = await fetch(
      `https://async-race.adaptable.app/winners/${id}`,
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch winner with id ${id}`);
    }
    return response.json();
  }
}

export default GetWinnerAPI;
