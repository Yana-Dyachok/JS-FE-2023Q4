import { IEngineResponse } from "../types/interfaces";
import { ENGINE__LINK } from "../types/const-var";

class EngineControl {
  async engineControlAPI(id: number, status: string): Promise<IEngineResponse> {
    const response: Response = await fetch(
      `${ENGINE__LINK}?id=${id}&status=${status}`,
      {
        method: "PATCH",
      },
    );
    return response.json();
  }
}

export default EngineControl;
