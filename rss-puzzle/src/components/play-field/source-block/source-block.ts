import { IWord } from '../../../interfaces/interfaces';
import WordsForSourceBlock from './words_for_source_block';

import './source_block.scss';
class SourceBlock {
    private sourceBlock: HTMLDivElement;
    private wordForSource: WordsForSourceBlock;
    wordCards: string[];
    constructor(public words: IWord[], public level: number) {
        this.words = words;
        this.level = level;
        this.wordCards=[];
        this.sourceBlock = document.createElement('div');
        this.sourceBlock.classList.add('play-field_source');
        this.wordForSource = new WordsForSourceBlock(this.level);
    }

    getRandomWord(): string[] {
        const randomWord = Math.floor(Math.random() * this.words.length);
        const word = this.words[randomWord];
        this.wordCards=word.textExample.split(' ');
        return  this.wordCards;
    }

    getObjectWords(): { [key: number]: string } {
        return this.wordCards.reduce(
            (obj: { [key: number]: string }, word: string, index: number) => {
                obj[index] = word;
                return obj;
            },
            {}
        );
    }

    getRootElement(): HTMLDivElement {
        this.getRandomWord();
        const objWord: { [key: number]: string } = this.getObjectWords();
        return this.wordForSource.createCards(this.wordCards, objWord, this.level);
    }
}

export default SourceBlock;