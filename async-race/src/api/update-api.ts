import { ICar, IBody, IWinner } from "../types/interfaces";
import { GARAGE__LINK, WINNERS__LINK } from "../types/const-var";

class UpdateAPI {
  async updateCarAPI(id: number, body: IBody): Promise<ICar> {
    const response: Response = await fetch(`${GARAGE__LINK}/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }

  async updateWinnerAPI(body: IWinner): Promise<IWinner> {
    const response: Response = await fetch(`${WINNERS__LINK}/${body.id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }
}

export default UpdateAPI;
