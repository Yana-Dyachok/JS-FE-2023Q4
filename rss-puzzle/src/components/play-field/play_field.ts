import GetData from '../get-data/get_data';
import ResultBlock from './result-block/result_block';
import SourceBlock from './source-block/source-block';
import { ILevelData } from '../../interfaces/interfaces';

class PlayField {
    private playField: HTMLDivElement;
    private getData: GetData;
    private resultBlock: ResultBlock;
    private sourceBlock: SourceBlock;
    private level:number;
    constructor() {
        this.playField = document.createElement('div');
        this.playField.classList.add('play-field_block');
        this.level=1;
        this.getData = new GetData(this.level);
        this.resultBlock = new ResultBlock({} as ILevelData);
        this.sourceBlock = new SourceBlock([], this.level);        
        this.getData.getRandomRound().then((rounds) => {
            if (rounds) {
                this.resultBlock = new ResultBlock(rounds.levelData);
                this.sourceBlock = new SourceBlock(rounds.words, 1);
                this.playField.append(this.resultBlock.getRootElement());
                this.playField.append(this.sourceBlock.getRootElement());
            }
        });
    }

    getRootElement(): HTMLDivElement {
        return this.playField;
    }
}

export default PlayField;
