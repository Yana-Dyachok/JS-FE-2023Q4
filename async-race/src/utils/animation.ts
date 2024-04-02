import { IEngineResponse } from "../types/interfaces";

export function getAnimationDuration(
  id: number,
  engineResponse: IEngineResponse,
): number {
  if (engineResponse.velocity === 0) {
    throw new Error("velocity can't be zero");
  }
  console.log(engineResponse.distance / engineResponse.velocity / 1000);
  return engineResponse.distance / engineResponse.velocity / 1000;
}
