export interface Source {
    id: string;
    name: string;
    category: string;
    country: string;
    description: string;
    language: string;
    url: string;
}

export interface SourcesData {
    sources: Source[];
    status: string;
}

export interface NewsItem {
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

export interface NewsData {
    status: string;
    totalResults: number;
    articles: NewsItem[];
}
