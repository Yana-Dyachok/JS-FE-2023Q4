import AppController from '../controller/controller';

import { AppView} from '../view/appView';
import { NewsData, SourcesData} from '../types/interfaces';

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
                this.controller.getNews(e, (data: NewsData) => {
                    this.view.drawNews(data);
                });
            });
        }

        this.controller.getSources((data: SourcesData) => {
            this.view.drawSources(data);
        });
    }
}

export default App;

// class App {
//     constructor() {
//         this.controller = new AppController();
//         this.view = new AppView();
//     }

//     start() {
//         document
//             .querySelector('.sources')
//             .addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
//         this.controller.getSources((data) => this.view.drawSources(data));
//     }
// }

// export default App;
