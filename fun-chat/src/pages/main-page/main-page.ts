import Page from "../../utils/page/page";
import Header from "../../core/components/header/header";
import Content from "../../core/components/content-block/content";
import { createFooterElements } from "../../core/components/footer/footer";

class MainPage extends Page {
  static TextObject = {
    MainTitle: "Main Page",
  };

  private header: Header;

  private content: Content;

  constructor(id: string) {
    super(id);
    this.header = new Header();
    this.content = new Content();
  }

  render() {
    this.container.append(
      this.header.getRootElement(),
      this.content.getRootElement(),
      createFooterElements(),
    );
    return this.container;
  }
}

export default MainPage;
