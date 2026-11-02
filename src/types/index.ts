export enum Endpoint {
    Sources = 'sources',
    Everything = 'everything',
}

export type HttpMethod = 'GET' | 'POST';

export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface Article {
    source: Pick<Source, 'id' | 'name'>;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface SourcesResponse {
    status: string;
    sources: Source[];
}

export interface ArticlesResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface UrlOptions {
    apiKey: string;
    sources: string;
}

export interface RequestParams {
    endpoint: Endpoint;
    options?: Partial<UrlOptions>;
}

export type Callback<T> = (data: T) => void;

export interface Drawable<T> {
    draw(data: T): void;
}
