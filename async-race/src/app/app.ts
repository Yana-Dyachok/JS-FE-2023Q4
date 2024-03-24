import Header from "../view/header/header";
class App {
    private header: Header;
  constructor() {
    this.header= new Header();
  }

  start(): void {
    document.body.append(
        this.header.getRootElement()
    )
  }
}

export default App;
