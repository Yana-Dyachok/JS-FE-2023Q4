import { CarName, CarColor } from "./types";

export interface ICar {
  name: CarName;
  color: CarColor;
  id: number;
}
export interface IBody {
  name: CarName;
  color: CarColor;
}

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}
