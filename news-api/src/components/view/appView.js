import News from './news/news';
import { NewsItem } from './news/news';
import Sources from './sources/sources';
import { Source } from './sources/sources';

export class AppView {
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;

//export interface NewsData {
    //     articles: NewsItem[];
    // }
    
    // export interface SourcesData {
    //     sources: Source[];
    // }
    
    // export class AppView {
    //     private news: News;
    //     private sources: Sources;
    
    //     constructor() {
    //         this.news = new News();
    //         this.sources = new Sources();
    //     }
    
    //     drawNews(data: NewsData): void {
    //         const values = data.articles || [];
    //         this.news.draw(values);
    //     }
    
    //     drawSources(data: SourcesData): void {
    //         const values = data.sources || [];
    //         this.sources.draw(values);
    //     }
    // }
    
    // export default AppView;
