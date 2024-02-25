import AppController from '../controller/controller';

import { AppView, NewsData, SourcesData } from '../view/appView';
import { NewsItem } from '../view/news/news';
import { Source } from '../view/sources/sources';

class App {
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')
            .addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;


// class App {
//     private controller: AppController;
//     private view: AppView;

//     constructor() {
//         this.controller = new AppController();
//         this.view = new AppView();
//     }

//     start(): void {
//         const sourcesElement = document.querySelector('.sources');
//         if (sourcesElement) {
//             sourcesElement.addEventListener('click', (e: Event) => {
//                 this.controller.getNews(e, (data: NewsItem[]) => {
//                     const newsData: NewsData = { articles: data };
//                     this.view.drawNews(newsData);
//                 });
//             });
//         }

//         this.controller.getSources((data: Source[]) => {
//             const sourcesData: SourcesData = { sources: data };
//             this.view.drawSources(sourcesData);
//         });
//     }
// }

// export default App;
