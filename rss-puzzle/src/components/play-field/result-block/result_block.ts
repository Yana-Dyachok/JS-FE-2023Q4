import { ILevelData } from '../../../interfaces/interfaces';

import './result_block.scss';

class ResultBlock {
    private resultBlock: HTMLDivElement;
    constructor(private levelData: ILevelData) {
        this.levelData = levelData;
        this.resultBlock = document.createElement('div');
        this.resultBlock.classList.add('play-field_result');
    }

    createResultBlock(): HTMLDivElement {
        for (let i = 0; i < 10; i++) {
            const level = document.createElement('div');
            level.classList.add('play-field_result-level');
            level.setAttribute('data-result-level', `${i}`);
            this.resultBlock.append(level);
        }

        return this.resultBlock;
    }

    getRootElement(): HTMLDivElement {
      return this.createResultBlock();
    }
}

export default ResultBlock;
