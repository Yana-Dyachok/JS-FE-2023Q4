import { ICar, IBody } from "../types/interfaces";

class MakeAPICar {
  async makeCar(body: IBody): Promise<ICar> {
    try {
      const response: Response = await fetch(
        "https://async-race.adaptable.app/garage",
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to make a car.");
      }

      return response.json();
    } catch (error) {
      throw new Error(`Failed to make a car: ${error}`);
    }
  }
}

export default MakeAPICar;
