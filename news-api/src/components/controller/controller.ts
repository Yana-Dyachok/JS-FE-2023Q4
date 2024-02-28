import AppLoader from './appLoader';
import { ISourcesData, INewsData } from '../types/interfaces';
import { Endpoint } from '../types/enum';

class AppController extends AppLoader {
    getSources(callback: (data: ISourcesData) => void): void {
        super.getResp({ endpoint: Endpoint.Sources }, callback);
    }

    getNews(e: Event, callback: (data: INewsData) => void): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: Endpoint.Everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            if (target.parentNode) {
                target = target.parentNode as HTMLElement;
            } else {
                break;
            }
        }
    }
}

export default AppController;

// js code
// class AppController extends AppLoader {
//     getSources(callback) {
//         super.getResp(
//             {
//                 endpoint: 'sources',
//             },
//             callback
//         );
//     }

//     getNews(e, callback) {
//         let target = e.target;
//         const newsContainer = e.currentTarget;

//         while (target !== newsContainer) {
//             if (target.classList.contains('source__item')) {
//                 const sourceId = target.getAttribute('data-source-id');
//                 if (newsContainer.getAttribute('data-source') !== sourceId) {
//                     newsContainer.setAttribute('data-source', sourceId);
//                     super.getResp(
//                         {
//                             endpoint: 'everything',
//                             options: {
//                                 sources: sourceId,
//                             },
//                         },
//                         callback
//                     );
//                 }
//                 return;
//             }
//             target = target.parentNode;
//         }
//     }
// }

// export default AppController;
