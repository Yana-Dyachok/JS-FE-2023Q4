export interface ISource {
    id: string;
    name: string;
    category: string;
    country: string;
    description: string;
    language: string;
    url: string;
}

export interface ISourcesData {
    sources: ISource[];
    status: string;
}

export interface INewsItem {
    author: string;
    title: string;
    description: string;
    urlToImage: string;
    publishedAt: string;
    source: {
        name: string;
    };
    url: string;
}

export interface INewsData {
    status: string;
    totalResults: number;
    articles: INewsItem[];
}
