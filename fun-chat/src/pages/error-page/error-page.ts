import Page from "../../core/components/page/page";
import "./error.scss"
class ErrorPage extends Page {

  static TextObject: { [prop: string]: string } = {
    '404': 'Error! The page was not found.'
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const error = document.createElement("div");
    error.classList.add("error__block");
    this.container.append(error);
    return this.container;
  }
}

export default ErrorPage;