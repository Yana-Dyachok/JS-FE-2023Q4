import CreateInputField from '../../components/input-field/input_field';
import LoginButton from '../../components/login-button/login_button';

import './login-form_page.scss';

class LoginFormPage {
    private inputField: CreateInputField;
    private loginButton: LoginButton;
    private container: HTMLDivElement;

    constructor() {
        this.inputField = new CreateInputField();
        this.loginButton = new LoginButton();
        this.container = document.createElement('div');
        this.container.classList.add('login_container');
        document.body.append(this.container);
    }

    drawLoginForm(): void {
        this.container.append(this.inputField.getRootElement());
        this.container.append(this.loginButton.getRootElement());
    }
}

export default LoginFormPage;


