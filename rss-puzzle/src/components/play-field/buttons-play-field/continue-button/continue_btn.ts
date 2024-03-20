import Button from '../../../button/button';

import './continue_button.scss';

class ContinueButton extends Button {
    constructor() {
        super('continue_btn', 'Continue');
        this.setDisabled(true);
    }   
}

export default ContinueButton;
