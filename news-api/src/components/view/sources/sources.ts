import './sources.css';
import {Source} from '../../types/interfaces';

class Sources {
    draw(data: Source[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        if (sourceItemTemp) {
            data.forEach((item) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
                const sourceItemName = sourceClone.querySelector('.source__item-name');

                if (sourceItemName) {
                    sourceItemName.textContent = item.name;
                }

                const sourceItem = sourceClone.querySelector('.source__item');

                if (sourceItem) {
                    sourceItem.setAttribute('data-source-id', item.id);
                }

                fragment.append(sourceClone);
            });

            const sourcesContainer = document.querySelector<HTMLElement>('.sources');

            if (sourcesContainer) {
                sourcesContainer.append(fragment);
            }
        }
    }
}

export default Sources;

// js code-------------------------------------------------------------------------------------------
// class Sources {
//     draw(data) {
//         const fragment = document.createDocumentFragment();
//         const sourceItemTemp = document.querySelector('#sourceItemTemp');

//         data.forEach((item) => {
//             const sourceClone = sourceItemTemp.content.cloneNode(true);

//             sourceClone.querySelector('.source__item-name').textContent = item.name;
//             sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

//             fragment.append(sourceClone);
//         });

//         document.querySelector('.sources').append(fragment);
//     }
// }
