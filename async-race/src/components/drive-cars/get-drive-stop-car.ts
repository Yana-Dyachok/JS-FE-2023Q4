import { driveAPI } from "../../api/drive-api";
import EngineControl from "../../api/engine-control";
import { IEngineResponse } from "../../types/interfaces";
import { Status } from "../../types/types";
import { getAnimationDuration } from "../../utils/animation";

class DriveOrStopCars {
  private engineControl: EngineControl;

  constructor() {
    this.engineControl = new EngineControl();
  }

  async getControlEngine(
    target: HTMLButtonElement,
    carId: number,
  ): Promise<{ responseEngine: IEngineResponse; status: Status }> {
    const status: Status = "started";
    const responseEngine: IEngineResponse =
      await this.engineControl.engineControlAPI(carId, status);
    return { responseEngine, status };
  }

  async makeDrive(target: HTMLButtonElement, carId: number): Promise<number> {
    const { responseEngine, status } = await this.getControlEngine(
      target,
      carId,
    );
    let duration: number = 0;
    if (status === "started") {
      duration = getAnimationDuration(carId, responseEngine);
      const result = await driveAPI(carId);
    }
    return duration;
  }
}
export default DriveOrStopCars;
