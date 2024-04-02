import { IWinner } from "../types/interfaces";
import { WINNERS__LINK } from "../types/const-var";

class GetWinnerAPI {
  async getWinnerFromAPI(id: number): Promise<IWinner> {
    const response = await fetch(`${WINNERS__LINK}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch winner with id ${id}`);
    }
    return response.json();
  }
}

export default GetWinnerAPI;
