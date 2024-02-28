import './sources.css';
import { ISource } from '../../types/interfaces';

class Sources {
    draw(data: ISource[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

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

            const sourcesContainer: HTMLElement | null = document.querySelector('.sources');

            if (sourcesContainer) {
                sourcesContainer.append(fragment);
            }
        }
    }
}

export default Sources;
