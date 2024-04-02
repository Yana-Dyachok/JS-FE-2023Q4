import { IWinner } from "../types/interfaces";
import { WINNERS__LINK } from "../types/const-var";

class MakeAPIWinner {
  async makeWinner(body: IWinner): Promise<IWinner> {
    try {
      const response: Response = await fetch(WINNERS__LINK, {
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
