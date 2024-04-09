import Page from "../page";
import { createFooterElements } from "../../footer/footer";
import Header from "../../header/header";
class MainPage extends Page {
  static TextObject = {
    MainTitle: 'Main Page',
  };
  private header: Header;

  constructor(id: string) {
    super(id);
    this.header= new Header()
  }

  render() {
    this.container.append(this.header.getRootElement(), createFooterElements());
    return this.container;
  }
}

export default MainPage;