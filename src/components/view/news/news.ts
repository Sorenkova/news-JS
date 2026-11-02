import './news.css';
import { Article, Drawable } from '../../../types';
import { getElement } from '../../../utils/dom';

class News implements Drawable<Article[]> {
    public draw(data: Article[]): void {
        const news = data.slice(0, 10);

        const fragment = document.createDocumentFragment();
        const newsItemTemp = getElement<HTMLTemplateElement>('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = document.importNode(newsItemTemp.content, true);

            if (idx % 2) getElement<HTMLElement>('.news__item', newsClone).classList.add('alt');

            getElement<HTMLElement>('.news__meta-photo', newsClone).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            getElement<HTMLElement>('.news__meta-author', newsClone).textContent = item.author || item.source.name;
            getElement<HTMLElement>('.news__meta-date', newsClone).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            getElement<HTMLElement>('.news__description-title', newsClone).textContent = item.title;
            getElement<HTMLElement>('.news__description-source', newsClone).textContent = item.source.name;
            getElement<HTMLElement>('.news__description-content', newsClone).textContent = item.description;
            getElement<HTMLAnchorElement>('.news__read-more a', newsClone).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer = getElement<HTMLElement>('.news');
        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
