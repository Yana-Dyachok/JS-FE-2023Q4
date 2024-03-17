import { ILevelData } from '../../../interfaces/interfaces';
import './result_block.scss';

class ResultBlock {
    private resultBlock: HTMLDivElement;
    constructor(private levelData: ILevelData) {
        this.levelData = levelData;
        this.resultBlock = document.createElement('div');
        this.resultBlock.classList.add('play-field_result');
    }

    private onClick(card: HTMLDivElement): void {
        const sourceCards: HTMLDivElement | null = document.querySelector('.play-field_source');
        const newSourceCard = document.createElement('div');
        newSourceCard.classList.add('play-field_source-card');
        newSourceCard.setAttribute('data-source', card.dataset.result || '');
        newSourceCard.textContent = card.textContent || '';
        sourceCards!.append(newSourceCard);
        card.parentElement!.removeChild(card);
    }

    createResultBlock(): HTMLDivElement {
        for (let i = 0; i < 10; i++) {
            const level = document.createElement('div');
            level.classList.add('play-field_result-level');
            level.setAttribute('data-result-level', `${i}`);
            level.onclick = (event) => {
                const clickedChild = event.target as HTMLDivElement;
                if (clickedChild instanceof HTMLDivElement) this.onClick(clickedChild);
            };
            this.resultBlock.append(level);
        }

        return this.resultBlock;
    }

    getRootElement(): HTMLDivElement {
        return this.createResultBlock();
    }
}

export default ResultBlock;
