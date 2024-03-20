import { IWord } from '../../../interfaces/interfaces';
import WordsForSourceBlock from './words_for_source_block';
import ContinueButton from '../buttons-play-field/continue-button/continue_btn';
import './source_block.scss';
class SourceBlock  {
    private wordForSource: WordsForSourceBlock;
    wordCards: string[];
    constructor(public words: IWord[], public round: number, public continueBtn: ContinueButton) {
        this.words = words;
        this.round = round;
        this.wordCards=[];
        this.continueBtn = continueBtn;
        this.wordForSource = new WordsForSourceBlock(this.round, this.continueBtn, this.wordCards.length);
    }

    getRandomWord(): string[] {
        const randomWord = Math.floor(Math.random() * this.words.length);
        const word = this.words[randomWord];
        this.wordCards=word.textExample.split(' ');
        return  this.wordCards;
    }

    getRootElement(): HTMLDivElement {
        this.getRandomWord();
        this.wordForSource = new WordsForSourceBlock(this.round, this.continueBtn, this.wordCards.length);
        return this.wordForSource.createCards(this.wordCards)
    }
}

export default SourceBlock;