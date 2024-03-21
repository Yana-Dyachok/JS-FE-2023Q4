import GetData from '../../get-data/get_data';
import CreatePlayFieldElements from './create_play_fields_elements';
import ResultBlock from './result-block/result_block';
import SourceBlock from './source-block/source-block';
import { ILevelData } from '../../interfaces/interfaces';
import ContinueButton from './buttons-play-field/continue-button/continue_btn';
import CheckButton from './buttons-play-field/check-button/check_button';
import AutoCompleteButton from './buttons-play-field/auto-complete-button/auto_comp_button';
class PlayField {
    private playField: HTMLDivElement;
    private playFieldElements: CreatePlayFieldElements;
    private getData: GetData;
    private resultBlock: ResultBlock;
    private sourceBlock: SourceBlock;
    static level:number;
    static round:number;
    constructor(public continueBtn: ContinueButton, public checkBtn: CheckButton, public autoComplBtn: AutoCompleteButton) {
        PlayField.level=1;
        PlayField.round=1;
        this.playFieldElements= new CreatePlayFieldElements();
        this.playField = this.playFieldElements.getRootElement();
        this.continueBtn = continueBtn;
        this.checkBtn = checkBtn;
        this.getData = new GetData(PlayField.level);
        this.resultBlock = new ResultBlock({} as ILevelData, this.continueBtn, this.checkBtn, PlayField.round);
        this.sourceBlock = new SourceBlock([], PlayField.round, this.continueBtn, this.checkBtn, this.playFieldElements.translationHint);        
        this.getData.getData().then((data) => {
            if (data) {
                this.resultBlock = new ResultBlock(data.rounds[PlayField.round].levelData, this.continueBtn, this.checkBtn, PlayField.round);
                this.sourceBlock = new SourceBlock(data.rounds[PlayField.round].words, PlayField.round, this.continueBtn, this.checkBtn, this.playFieldElements.translationHint);
                this.playField.append(this.sourceBlock.getRootElement());
                this.playFieldElements.resultBlock.append(this.resultBlock.getRootElement());
            }
        });

        this.continueBtn.onClick(()=>this.getNextData());
        this.autoComplBtn.onClick(()=> this.clickAutoComplete());
    }
   
    getNextData(): void {
        this.resultBlock.toggleResultClasses();
        PlayField.round += 1;
        if( PlayField.round > 10) {
            PlayField.level += 1; 
            PlayField.round = 1;
            this.playField.children[1].innerHTML='';
        }
        if (this.playField.children[2]) this.playField.children[2].remove();
        this.getData = new GetData(PlayField.level);
        this.getData.getData().then((data) => {
            if (data) {
              this.resultBlock = new ResultBlock(data.rounds[PlayField.round].levelData, this.continueBtn, this.checkBtn, PlayField.round);
              this.sourceBlock = new SourceBlock(data.rounds[PlayField.round].words, PlayField.round, this.continueBtn, this.checkBtn, this.playFieldElements.translationHint);
              this.playField.append(this.sourceBlock.getRootElement());
              this.playFieldElements.resultBlock.append(this.resultBlock.getRootElement());
            }
            this.toggleCheckContinue(false, true);
        }); 
    }

    private toggleCheckContinue(first:boolean, second:boolean) {
        this.continueBtn.setDisabled(second); 
        this.checkBtn.setDisabled(second); 
        this.continueBtn.showBtn(first);
        this.checkBtn.showBtn(second);    
    }

    clickAutoComplete() {
        this.sourceBlock.createCorrectCards();
        this.toggleCheckContinue(true, false); 
    }

    getRootElement(): HTMLDivElement {
        return this.playField;
    }
}

export default PlayField;
