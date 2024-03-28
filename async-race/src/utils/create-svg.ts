import { ICar } from "../types/interfaces";
import { CarColor, SizesSVG } from "../types/types";

class CreateSVG {
  createSVG(
    carValue: ICar | string,
    sizes: SizesSVG,
    color?: CarColor,
  ): SVGSVGElement {
    const SVGLink = "http://www.w3.org/2000/svg";
    const XLINK = "http://www.w3.org/1999/xlink";
    const { width, height } = sizes;

    const svgIcon: SVGSVGElement = document.createElementNS(SVGLink, "svg");
    svgIcon.style.width = width;
    svgIcon.style.height = height;

    if (typeof carValue === "string") {
      svgIcon.id = `${carValue}`;
      svgIcon.classList.add(`${carValue}`);
      svgIcon.style.fill = `${color}`;
      svgIcon.style.zIndex = "5";
      const use: SVGUseElement = document.createElementNS(SVGLink, "use");
      use.setAttributeNS(XLINK, "href", `./assets/${carValue}.svg#${carValue}`);
      svgIcon.append(use);
    } else {
      const icon: number = carValue.id % 4;
      svgIcon.id = `car-${carValue.id}`;
      svgIcon.style.fill = `${carValue.color}`;
      svgIcon.style.zIndex = "1";
      const use: SVGUseElement = document.createElementNS(SVGLink, "use");
      use.setAttributeNS(XLINK, "href", `./assets/svg/sprite.svg#car-${icon}`);
      svgIcon.append(use);
    }

    return svgIcon;
  }
}

export default CreateSVG;
