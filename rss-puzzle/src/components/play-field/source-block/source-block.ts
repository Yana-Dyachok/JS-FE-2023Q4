import { IWord } from '../../../interfaces/interfaces';
import WordsForSourceBlock from './words_for_source_block';
import ContinueButton from '../buttons-play-field/continue-button/continue_btn';
import CheckButton from '../buttons-play-field/check-button/check_button';
import './source_block.scss';
class SourceBlock  {
    private wordForSource: WordsForSourceBlock;
    wordCards: string[];
    constructor(public words: IWord[], public round: number, public continueBtn: ContinueButton, public checkBtn: CheckButton) {
        this.words = words;
        this.round = round;
        this.wordCards=[];
        this.continueBtn = continueBtn;
        this.checkBtn=checkBtn;
        this.wordForSource = new WordsForSourceBlock(this.round, this.continueBtn, this.wordCards, this.checkBtn);
    }

    getRandomWord(): string[] {
        const randomWord = Math.floor(Math.random() * this.words.length);
        const word = this.words[randomWord];
        this.wordCards=word.textExample.split(' ');
        return  this.wordCards;
    }

    getRootElement(): HTMLDivElement {
        this.getRandomWord();
        this.wordForSource = new WordsForSourceBlock(this.round, this.continueBtn, this.wordCards, this.checkBtn);
        return this.wordForSource.createCards()
    }
}

export default SourceBlock;