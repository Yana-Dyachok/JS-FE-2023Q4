import './news.css';

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

class News {
    draw(data: NewsItem[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');
        if (newsItemTemp) {
            news.forEach((item, idx) => {
                const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;
                if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

                const metaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
                if (metaPhoto) {
                    metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                }

                const metaAuthor = newsClone.querySelector('.news__meta-author');
                if (metaAuthor) {
                    metaAuthor.textContent = item.author || item.source.name;
                }

                const metaDate = newsClone.querySelector('.news__meta-date');
                if (metaDate) {
                    metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                }

                const descriptionTitle = newsClone.querySelector('.news__description-title');
                if (descriptionTitle) {
                    descriptionTitle.textContent = item.title;
                }

                const descriptionSource = newsClone.querySelector('.news__description-source');
                if (descriptionSource) {
                    descriptionSource.textContent = item.source.name;
                }

                const descriptionContent = newsClone.querySelector('.news__description-content');
                if (descriptionContent) {
                    descriptionContent.textContent = item.description;
                }

                const readMoreLink = newsClone.querySelector('.news__read-more a');
                if (readMoreLink) {
                    readMoreLink.setAttribute('href', item.url);
                }

                fragment.append(newsClone);
            });
        } else {
            console.error("Element with id 'newsItemTemp' not found.");
        }

        const newsContainer = document.querySelector<HTMLElement>('.news');
        if (newsContainer) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        } else {
            console.error("Element with class 'news' not found.");
        }
    }
}

export default News;

// js code
//     draw(data) {
//         const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

//         const fragment = document.createDocumentFragment();
//         const newsItemTemp = document.querySelector('#newsItemTemp');

//         news.forEach((item, idx) => {
//             const newsClone = newsItemTemp.content.cloneNode(true);

//             if (idx % 2) newsClone.querySelector('.news__item').classList.add('alt');

//             newsClone.querySelector('.news__meta-photo').style.backgroundImage = `url(${
//                 item.urlToImage || 'img/news_placeholder.jpg'
//             })`;
//             newsClone.querySelector('.news__meta-author').textContent = item.author || item.source.name;
//             newsClone.querySelector('.news__meta-date').textContent = item.publishedAt
//                 .slice(0, 10)
//                 .split('-')
//                 .reverse()
//                 .join('-');

//             newsClone.querySelector('.news__description-title').textContent = item.title;
//             newsClone.querySelector('.news__description-source').textContent = item.source.name;
//             newsClone.querySelector('.news__description-content').textContent = item.description;
//             newsClone.querySelector('.news__read-more a').setAttribute('href', item.url);

//             fragment.append(newsClone);
//         });

//         document.querySelector('.news').innerHTML = '';
//         document.querySelector('.news').appendChild(fragment);
//     }
