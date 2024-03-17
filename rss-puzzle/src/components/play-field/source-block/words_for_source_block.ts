import './source_block.scss';

class WordsForSourceBlock {
    private sourceBlock: HTMLDivElement;
    constructor(public level: number) {
        this.level = level;
        this.sourceBlock = document.createElement('div');
        this.sourceBlock.classList.add('play-field_source');
        this.sourceBlock.addEventListener('click', (event) => {
            const target = event.target as HTMLDivElement;
            if (target.classList.contains('play-field_source-card')) {
                this.onClick(target, this.level);
            }
        });
    }

    private onClick(card: HTMLDivElement, level:number): void {
        const resultLevel: NodeListOf<HTMLDivElement> = document.querySelectorAll('.play-field_result-level');
        const resultCards = Array.from(resultLevel);
        const newResultCard = document.createElement('div');
        newResultCard.classList.add('play-field_result-card');
        newResultCard.setAttribute('data-result', card.dataset.source || '');
        newResultCard.textContent = card.textContent || '';
        resultCards[level]!.append(newResultCard);
        this.sourceBlock.removeChild(card);
    }

    createCards( wordCards: string[], objectWords: { [key: number]: string }, level: number): HTMLDivElement {
        const shuffleCards: string[] = wordCards.sort(
            () => Math.random() - 0.5
        );

        for (let i = 0; i < shuffleCards.length; i++) {
            const card = document.createElement('div');
            card.textContent = shuffleCards[i];
            card.classList.add('play-field_source-card');
            const dataIndex: number = Object.keys(objectWords).findIndex(
                (key) => objectWords[parseInt(key)] === shuffleCards[i]
            );
               if (dataIndex !== -1) {
                dataIndex === shuffleCards.length - 1
                    ? card.setAttribute('data-source', 'last')
                    : card.setAttribute('data-source', dataIndex.toString());
            }
            this.sourceBlock.append(card);
        }
           return this.sourceBlock;
    }
}

export default WordsForSourceBlock;
