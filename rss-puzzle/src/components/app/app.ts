import LoginFormPage from '../../pages/login-form/login-form_page';
import StartScreenPage from '../../pages/start-screen/start-screen_page';
import SaveToLocalStorage from '../local-storage/local_storage';

class App {
    private root: HTMLElement = document.body;
    private loginForm: LoginFormPage;
    private startScreen: StartScreenPage;
    private localStorage: SaveToLocalStorage;

    constructor() {
        this.localStorage = new SaveToLocalStorage();
        this.loginForm = new LoginFormPage(this.localStorage);
        this.startScreen = new StartScreenPage(this.localStorage);
    }

    start(): void {
        localStorage.length === 0
            ? this.loginForm.drawLoginForm()
            : this.startScreen.drawStartScreenPage();
    }
}

export default App;
