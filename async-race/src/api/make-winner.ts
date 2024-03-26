import { IWinner } from "../types/interfaces";

class MakeAPIWinner {
  async makeWinner(body: IWinner): Promise<IWinner> {
    try {
      const response = await fetch("https://async-race.adaptable.app/winners", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to post winner");
      }

      return response.json();
    } catch (error) {
      throw new Error(`Failed to post winner: ${error}`);
    }
  }
}

export default MakeAPIWinner;
