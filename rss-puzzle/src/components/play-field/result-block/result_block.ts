import { ILevelData } from '../../../interfaces/interfaces';
import ContinueButton from '../buttons-play-field/continue-button/continue_btn';
import './result_block.scss';

class ResultBlock {
    private roundElement: HTMLDivElement;
    constructor(
        private levelData: ILevelData, public continueBtn: ContinueButton, public round: number ) {
        this.levelData = levelData;
        this.continueBtn = continueBtn;
        this.round = round;
        this.roundElement = document.createElement('div');
        this.roundElement.classList.add('play-field_result-round');
        this.roundElement.setAttribute('data-result-round', `${this.round}`);
        if (this.roundElement) {
            this.roundElement.addEventListener('click', this.onClickHandler);
        }
    }
    
    private onClickHandler = (event: MouseEvent) => {
        const target: HTMLDivElement | null = event.target as HTMLDivElement;
        if (target?.classList.contains('play-field_result-card')) {
            this.onClick(target);
        }
    };

    private removeClickEvent(): void {
        if (this.roundElement) {
            this.roundElement.removeEventListener('click', this.onClickHandler);
        }
    }

    private onClick(card: HTMLDivElement): void {
        // this.removeClickEvent();
        const sourceCards: HTMLDivElement | null = document.querySelector('.play-field_source');
        const newSourceCard = document.createElement('div');
        newSourceCard.classList.add('play-field_source-card');
        newSourceCard.setAttribute('data-source', card.dataset.result || '');
        newSourceCard.textContent = card.textContent || '';
        sourceCards!.append(newSourceCard);
        Array.from(
            document.querySelectorAll('.play-field_result-card')
        ).forEach((el) => el.classList.remove('correct'));
        card.parentElement!.removeChild(card);
        this.continueBtn.setDisabled(true);
    }

    getRootElement(): HTMLDivElement {
        return this.roundElement;
    }
}

export default ResultBlock;
