import './login_button.scss';
class LoginButton {
    private button: HTMLButtonElement;

    constructor() {
        this.button = document.createElement('button');
        this.button.classList.add('login_btn');
        this.button.textContent = 'Login';
        this.button.setAttribute('disabled', 'disabled')
    }

    getRootElement(): HTMLButtonElement {
        return this.button;
    }
}

export default LoginButton;
