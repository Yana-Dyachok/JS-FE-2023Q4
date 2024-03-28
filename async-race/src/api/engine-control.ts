import { IEngineResponse } from "../types/interfaces";

class EngineControl {
  async engineControlAPI(id: number, status: string): Promise<IEngineResponse> {
    const response: Response = await fetch(
      `https://async-race.adaptable.app/engine?id=${id}&status=${status}`,
      {
        method: "PATCH",
      },
    );
    return response.json();
  }
}

export default EngineControl;
