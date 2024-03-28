import carsNames from "../components/cars-data/cars-names";
import carsModels from "../components/cars-data/cars-models";

export type CarName =
  `${(typeof carsNames)[number]} ${(typeof carsModels)[number]}`;
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type CarColor = RGB | RGBA | HEX;

export type SizesSVG = { width: `${number}px`; height: `${number}px` };
