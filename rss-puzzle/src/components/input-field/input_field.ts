import './input_field.scss';

class CreateInputField {
    private form: HTMLFormElement;

    constructor() {
        this.form = document.createElement('form');
        this.form.classList.add('login_form');
        this.createFormElements();
    }

    private createFormElements() {
        this.appendElements([
            this.createLabel('firstname', 'First name:'),
            this.createInput('text', 'fname'),
            this.createLabel('surname', 'Surname:'),
            this.createInput('text', 'sname')
        ]);
    }

    private createInput = (type: string, id: string): HTMLInputElement => 
    Object.assign(document.createElement('input'), { type, id, classList: ['login_input'], required: true });

    private createLabel = (forLabel: string, text: string): HTMLLabelElement => 
    Object.assign(document.createElement('label'), { htmlFor: forLabel, textContent: text });

    private appendElements = (elements: HTMLElement[]) => 
    elements.forEach(element => this.form.appendChild(element));

    getRootElement(): HTMLFormElement {
        return this.form;
    }
}

export default CreateInputField;
