import Page from "../../core/components/page/page";
import { createFooterElements } from "../../core/components/footer/footer";
import Header from "../../core/components/header/header";

class MainPage extends Page {
  static TextObject = {
    MainTitle: "Main Page",
  };

  private header: Header;

  constructor(id: string) {
    super(id);
    this.header = new Header();
  }

  render() {
    this.container.append(this.header.getRootElement(), createFooterElements());
    return this.container;
  }
}

export default MainPage;
