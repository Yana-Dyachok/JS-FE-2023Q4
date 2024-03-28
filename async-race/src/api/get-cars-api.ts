import { ICar, ICarsResponse } from "../types/interfaces";

class GetCarsAPI {
  async getCarById(id: number): Promise<ICar> {
    try {
      const response: Response = await fetch(
        `https://async-race.adaptable.app/garage/${id}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch car by ID");
      }
      return response.json();
    } catch (error) {
      throw new Error("Error fetching car by ID");
    }
  }

  async getAllCars(pageNumber: number): Promise<ICarsResponse> {
    try {
      const response: Response = await fetch(
        `https://async-race.adaptable.app/garage?_page=${pageNumber}&_limit=7`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch all cars");
      }
      const count: string | null = response.headers.get("X-Total-Count");
      if (!count) {
        throw new Error("X-Total-Count is null");
      }
      return {
        items: await response.json(),
        count,
      };
    } catch (error) {
      throw new Error("Error fetching all cars");
    }
  }
}

export default GetCarsAPI;
