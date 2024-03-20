import ContinueButton from '../buttons-play-field/continue-button/continue_btn';
import CorrectWord from './correct_word';
import './source_block.scss';

class WordsForSourceBlock {
    private correctWord: CorrectWord;
    public sourceBlock: HTMLDivElement;
    constructor( public round: number, public continueBtn: ContinueButton, public wordsLength: number) {
        this.round = round;
        this.wordsLength = wordsLength;
        this.continueBtn = continueBtn;
        this.sourceBlock = document.createElement('div');
        this.sourceBlock.classList.add('play-field_source');
        this.correctWord = new CorrectWord(this.round, this.wordsLength, this.continueBtn, this.sourceBlock);
        if (this.sourceBlock) {
            this.sourceBlock.addEventListener('click', (event) => {
                const target: HTMLDivElement | null =
                    event.target as HTMLDivElement;
                if (target.classList.contains('play-field_source-card')) {
                    this.correctWord.onClick(target, this.round);
                }
            });
        }
    }

    createCards(wordCards: string[]): HTMLDivElement {
        const words: string[] = [...wordCards];
        console.log( words)
        const shuffleCards: string[] = wordCards.sort(() => Math.random() - 0.5);
        let indexArray: string[] = [];
        for (let i = 0; i < shuffleCards.length; i++) {
            const card = document.createElement('div');
            card.textContent = shuffleCards[i];
            card.classList.add('play-field_source-card');
            let dataIndex: number = 0;
            for (let j = 0; j < words.length; j++) {
                if (words[j] === shuffleCards[i]) {
                    if (!indexArray.includes(words[j])) {
                        dataIndex = j;
                        indexArray.push(words[j]);
                        break;
                    } else {
                        if (indexArray.includes(words[j])) dataIndex = j;
                    }
                }
            }
            dataIndex === shuffleCards.length - 1
                ? card.setAttribute('data-source', 'last')
                : card.setAttribute('data-source', dataIndex.toString());
            this.sourceBlock!.append(card);
        }
        return this.sourceBlock!;
    }
}

export default WordsForSourceBlock;
