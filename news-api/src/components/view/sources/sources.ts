import './sources.css';

export interface Source {
    id: string;
    name: string;
}

class Sources {

    draw(data: Source | Source[]): void {
        const dataArray = Array.isArray(data) ? data : [data];
        for (const source of dataArray) {
            const fragment = document.createDocumentFragment();
            const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
            
            if (!sourceItemTemp) {
                return;
            }

            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const sourceName = sourceClone.querySelector('.source__item-name');
            if (sourceName) {
                sourceName.textContent = source.name;
            }

            const sourceItem = sourceClone.querySelector('.source__item');
            if (sourceItem) {
                sourceItem.setAttribute('data-source-id', source.id);
            }

            fragment.append(sourceClone);

            const sourcesContainer = document.querySelector<HTMLElement>('.sources');
            if (!sourcesContainer) {
                return;
            }

            sourcesContainer.append(fragment);
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