import { ICar, IBody, IWinner } from "../types/interfaces";

class UpdateAPI {
  async updateCarAPI(id: number, body: IBody): Promise<ICar> {
    const response: Response = await fetch(
      `https://async-race.adaptable.app/garage/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.json();
  }

  async updateWinnerAPI(body: IWinner): Promise<IWinner> {
    const response: Response = await fetch(
      `https://async-race.adaptable.app/winners/${body.id}`,
      {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.json();
  }
}

export default UpdateAPI;
