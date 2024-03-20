import ContinueButton from './continue-button/continue_btn';
import './buttons_play_field.scss';

class ButtonsPlayField {
    private buttonsPlayField: HTMLDivElement;
    continueBtn: ContinueButton;

    constructor() {
        this.buttonsPlayField = document.createElement('div');
        this.buttonsPlayField.classList.add('play-field_buttons');
        this.continueBtn= new ContinueButton();
    }

    private createBtnPlayField() {
        this.buttonsPlayField.append(this.continueBtn.getRootElement())  
    }

    getRootElement(): HTMLDivElement {
        this.createBtnPlayField();
        return this.buttonsPlayField;
    }
}

export default ButtonsPlayField;