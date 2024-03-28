import { ICar, ICarsResponse } from "../types/interfaces";

class GetCarsAPI {
  async getCarAPi(id: number): Promise<ICar> {
    const response = await fetch(
      `https://async-race.adaptable.app/garage/${id}`,
    );
    return response.json();
  }

  async getAllCarsAPi(pageNumber: number): Promise<ICarsResponse> {
    const response: Response = await fetch(
      `https://async-race.adaptable.app/garage?_page=${pageNumber}&_limit=7`,
    );
    const count: string | null = response.headers.get("X-Total-Count");

    if (!count) {
      throw new Error("X-Total-Count is null");
    }
    return {
      items: await response.json(),
      count,
    };
  }
}

export default GetCarsAPI;
