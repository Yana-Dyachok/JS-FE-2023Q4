import ContinueButton from '../buttons-play-field/continue-button/continue_btn';

class CorrectWord {
    constructor( public round: number, public wordsLength: number, public continueBtn: ContinueButton, private sourceBlock: HTMLDivElement ) {
        this.round = round;
        this.wordsLength = wordsLength;
        this.continueBtn = continueBtn;
        this.sourceBlock = sourceBlock;
    }

    onClick(card: HTMLDivElement, round: number): void {
        const resultRound: NodeListOf<HTMLDivElement> = document.querySelectorAll('.play-field_result-round');
        const resultCards = Array.from(resultRound);
        const newResultCard = document.createElement('div');
        newResultCard.classList.add('play-field_result-card');
        newResultCard.setAttribute('data-result', card.dataset.source || '');
        newResultCard.textContent = card.textContent || '';
        resultCards[round-1].append(newResultCard);
        const resultElements = resultCards[round-1].children;
        if (this.wordsLength === resultElements.length) {
            if (this.checkCorrectAnswer(resultCards[round-1])) {
                this.continueBtn.setDisabled(false);
            } else {
                Array.from(resultElements).forEach((el) =>
                    el.classList.remove('correct')
                );
                this.continueBtn.setDisabled(true);
            }
        } else {
            this.continueBtn.setDisabled(true);
        }
        this.sourceBlock.removeChild(card);
    }

    private checkCorrectAnswer(resultElements: HTMLDivElement): boolean {
        const wordsArray = Array.from( resultElements.children ) as HTMLDivElement[];
        for (let i = 0; i < wordsArray.length; i++) {
            const element = wordsArray[i];
            if (element.dataset.result === i.toString())
                element.classList.add('correct');
            else {
                element.classList.remove('correct');
            }
            wordsArray[wordsArray.length - 1].dataset.result === 'last'
                ? wordsArray[wordsArray.length - 1].classList.add('correct')
                : wordsArray[wordsArray.length - 1].classList.remove('correct');
        }
        return wordsArray.every((el) => {
            return el.classList.contains('correct');
        });
    }
}

export default CorrectWord;
