import GetData from '../get-data/get_data';
import CreatePlayFieldElements from './create_play_fields_elements';
import ResultBlock from './result-block/result_block';
import SourceBlock from './source-block/source-block';
import { ILevelData } from '../../interfaces/interfaces';
import ContinueButton from './buttons-play-field/continue-button/continue_btn';
class PlayField {
    private playField: HTMLDivElement;
    private playFieldElements: CreatePlayFieldElements;
    private getData: GetData;
    private resultBlock: ResultBlock;
    private sourceBlock: SourceBlock;
   static level:number;
   static round:number;
    constructor(public continueBtn: ContinueButton) {
        PlayField.level=1;
        PlayField.round=1;
        this.playFieldElements= new CreatePlayFieldElements();
        this.playField = this.playFieldElements.getRootElement();
        this.continueBtn=continueBtn;
        this.getData = new GetData(PlayField.level);
        this.resultBlock = new ResultBlock({} as ILevelData, this.continueBtn, PlayField.round);
        this.sourceBlock = new SourceBlock([], PlayField.round, this.continueBtn);        
        this.getData.getData().then((data) => {
            if (data) {
                this.resultBlock = new ResultBlock(data.rounds[PlayField.round].levelData, this.continueBtn, PlayField.round);
                this.sourceBlock = new SourceBlock(data.rounds[PlayField.round].words, 1, this.continueBtn);
                this.playField.append(this.sourceBlock.getRootElement());
                this.playFieldElements.resultBlock.append(this.resultBlock.getRootElement());
            }
        });

        this.continueBtn.onClick(()=>this.getNextData());
    }
   
    getNextData(): void {
        PlayField.round += 1;
        if( PlayField.round > 3) {
            PlayField.level += 1; 
            PlayField.round = 1;
            this.playField.children[0].innerHTML='';
        }
        if (this.playField.children[1]) this.playField.children[1].remove();
        this.getData = new GetData(PlayField.level);
        this.getData.getData().then((data) => {
            if (data) {
              this.resultBlock = new ResultBlock(data.rounds[PlayField.round].levelData, this.continueBtn, PlayField.round);
              this.sourceBlock = new SourceBlock(data.rounds[PlayField.round].words, PlayField.round, this.continueBtn);
              this.playField.append(this.sourceBlock.getRootElement());
              this.playFieldElements.resultBlock.append(this.resultBlock.getRootElement());
            }
        });
        this.continueBtn.setDisabled(true);      
    }

    getRootElement(): HTMLDivElement {
        return this.playField;
    }
}

export default PlayField;
