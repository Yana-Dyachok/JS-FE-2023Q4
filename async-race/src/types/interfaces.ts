import { CarName, CarColor, Sort, Order } from "./types";

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

export interface ICarsResponse {
  items: ICar[];
  count: string;
}

export interface IEngineResponse {
  velocity: number;
  distance: number;
}

export interface IWinnerCars extends IWinner {
  car: ICar;
}

export interface IWinnersResponse {
  items: IWinnerCars[];
  count: string;
}

export interface IWinnerSort {
  pageNumber: number;
  sort: Sort;
  order: Order;
}

export interface IDriveResponse {
  success: true | false;
}

export interface IButtonEvents {
  target: HTMLButtonElement;
  carId: number;
}

export interface IUpdateData {
  inputText: HTMLInputElement;
  inputColor: HTMLInputElement;
  updateBtn: HTMLButtonElement;
  name: CarName;
  color: CarColor;
}
