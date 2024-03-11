import CreateInputField from '../../components/input-field/input_field';
import LoginButton from '../../components/login-button/login_button';
import FormValidation from '../../components/form-validation/form_validation';
import SaveToLocalStorage from '../../components/local-storage/local_storage';
import StartScreenPage from '../start-screen/start-screen_page';
import './login-form_page.scss';

class LoginFormPage {
    private inputField: CreateInputField;
    private loginButton: LoginButton;
    private formValidation: FormValidation;
    private container: HTMLDivElement;
    private saveToLocalStorage: SaveToLocalStorage;
    private startScreen: StartScreenPage;

    constructor() {
        this.inputField = new CreateInputField();
        this.loginButton = new LoginButton();
        this.formValidation = new FormValidation(this.loginButton);
        this.saveToLocalStorage = new SaveToLocalStorage();
        this.startScreen = new StartScreenPage();
        this.container = document.createElement('div');
        this.container.classList.add('login_container');
        document.body.append(this.container);
    }

    drawLoginForm = (): void => {
        const { inputField, loginButton, formValidation, saveToLocalStorage, container } = this;
        container.append(inputField.getRootElement(), loginButton.getRootElement());
        formValidation.setupValidation();
        loginButton.onClick(() => {
            const { firstName, surname } = formValidation;
            saveToLocalStorage.setValue('firstName', firstName);
            saveToLocalStorage.setValue('surname', surname);
            this.startScreen.drawStartSreenPage()
        });
    }
}

export default LoginFormPage;