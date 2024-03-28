// import { IEngineResponse } from "../types/interfaces";

// export class Animation {
//   stoppedAnimationStorage: Map<number, number> = new Map();
//   requestIDStorage: Map<number, number> = new Map();

//   getElemPosition(id: number): {
//     car: HTMLElement;
//     flag: HTMLDivElement;
//   } {
//     return {
//       car: document.getElementById(`car-${id}`) as HTMLElement,
//       flag: document.querySelector(`[data-flag=${id}]`) as HTMLDivElement,
//     };
//   }

//   animateCar(id: number, value: IEngineResponse): void {
//     const { car, flag } = this.getElemPosition(id);
//     const positions = this.calculatePositions(car, flag);
//     this.animateCarWithPosition(positions, id, value);
//   }

//   private calculatePositions(
//     car: HTMLElement,
//     flag: HTMLDivElement
//   ): { startPoint: number; endPoint: number; distance: number } {
//     const startPoint: number =
//       car.getBoundingClientRect().x + car.getBoundingClientRect().width / 2;
//     const endPoint: number =
//       flag.getBoundingClientRect().x +
//       flag.getBoundingClientRect().width / 2 -
//       50;
//     const distance: number = endPoint - startPoint;
//     return { startPoint, endPoint, distance };
//   }

//   private animateCarWithPosition(
//     positions: { startPoint: number; endPoint: number; distance: number },
//     id: number,
//     value: IEngineResponse
//   ): void {
//     const { startPoint, endPoint, distance } = positions;
//     const animationTime: number = value.distance / value.velocity;
//     let startTime: number;
//     let previousTime: number;
//     let done = false;

//     const getStep = (timestamp: number): void => {
//       if (!startTime) {
//         startTime = timestamp;
//       }
//       const elapsed: number = timestamp - startTime;
//       if (previousTime !== timestamp) {
//         const count: number = Math.min(
//           (distance / animationTime) * elapsed,
//           distance,
//         );
//         (car as HTMLElement).style.transform = `translateX(${count}px)`;
//         if (count === distance) done = true;
//       }
//       if (elapsed < animationTime) {
//         previousTime = timestamp;
//         if (!done) {
//           if (!Number.isFinite(animationTime)) {
//             window.cancelAnimationFrame(
//               this.requestIDStorage.get(id) as number,
//             );
//             this.requestIDStorage.set(id, 0);
//             return;
//           }
//           this.requestIDStorage.set(
//             id,
//             window.requestAnimationFrame(getStep),
//           );
//         }
//       }
//     };

//     this.requestIDStorage.set(
//       id,
//       window.requestAnimationFrame(getStep),
//     );
//   }
// }

// // used   https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame
