import ContinueButton from './continue-button/continue_btn';
import CheckButton from './check-button/check_button';
import './buttons_play_field.scss';

class ButtonsPlayField {
    private buttonsPlayField: HTMLDivElement;
    continueBtn: ContinueButton;
    checkBtn: CheckButton;

    constructor() {
        this.buttonsPlayField = document.createElement('div');
        this.buttonsPlayField.classList.add('play-field_buttons');
        this.continueBtn= new ContinueButton();
        this.checkBtn= new CheckButton();
    }

    private createBtnPlayField() {
        this.buttonsPlayField.append( this.checkBtn.getRootElement(), this.continueBtn.getRootElement())  
    }

    getRootElement(): HTMLDivElement {
        this.createBtnPlayField();
        return this.buttonsPlayField;
    }
}

export default ButtonsPlayField;