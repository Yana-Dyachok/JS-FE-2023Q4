import { ICar, ICarsResponse } from "../types/interfaces";
import { GARAGE__LINK } from "../types/const-var";

class GetCarsAPI {
  async getCarById(id: number): Promise<ICar> {
    try {
      const response: Response = await fetch(`${GARAGE__LINK}/${id}`);
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
        `${GARAGE__LINK}?_page=${pageNumber}&_limit=7`,
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
