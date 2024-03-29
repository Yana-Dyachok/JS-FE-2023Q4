import { allPages } from "../view/create-all-pages-api";

class App {
  start(): void {
    allPages.createAllPages();
  }
}

export default App;
