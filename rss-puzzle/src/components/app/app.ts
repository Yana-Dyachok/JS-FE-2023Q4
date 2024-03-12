import LoginFormPage from '../../pages/login-form/login-form_page';
import StartScreenPage from '../../pages/start-screen/start-screen_page';

class App {
    private root: HTMLElement = document.body;
    private loginForm: LoginFormPage;
    private startScreen: StartScreenPage;

    constructor() {
        this.loginForm = new LoginFormPage();
        this.startScreen = new StartScreenPage();
    }

    start(): void {
        localStorage.length === 0
            ? this.loginForm.drawLoginForm()
            : this.startScreen.drawStartSreenPage();
    }
}

export default App;
