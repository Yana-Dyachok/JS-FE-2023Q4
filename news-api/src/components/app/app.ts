import AppController from '../controller/controller';

import { AppView} from '../view/appView';
import { INewsData, ISourcesData} from '../types/interfaces';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sourcesElement = document.querySelector('.sources');
        if (sourcesElement) {
            sourcesElement.addEventListener('click', (e: Event) => {
                this.controller.getNews(e, (data: INewsData) => {
                    this.view.drawNews(data);
                });
            });
        }

        this.controller.getSources((data: ISourcesData) => {
            this.view.drawSources(data);
        });
    }
}

export default App;