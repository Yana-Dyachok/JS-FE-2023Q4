import LoginFormPage from '../../pages/login-form/login-form_page';
class App {
    private loginForm: LoginFormPage;
    private root: HTMLElement = document.body;

    constructor() {
        this.loginForm = new LoginFormPage();
    }

    start(): void {
        this.loginForm.drawLoginForm();
    }
}

export default App;
