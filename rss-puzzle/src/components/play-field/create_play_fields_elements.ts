import './result-block/result_block.scss';
import './source-block/source_block.scss';
class CreatePlayFieldElements {
    private playField: HTMLDivElement;
     resultBlock: HTMLDivElement;
    constructor() {
        this.playField = document.createElement('div');
        this.playField.classList.add('play-field_block');
        this.resultBlock = document.createElement('div');
        this.resultBlock.classList.add('play-field_result');
        this.playField.append(this.resultBlock)
    }    
    
    getRootElement(): HTMLDivElement {
        return this.playField;
    }
}

export default CreatePlayFieldElements;
