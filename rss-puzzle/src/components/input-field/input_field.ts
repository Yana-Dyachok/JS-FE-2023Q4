import './input_field.scss';
class CreateInputField {
    private form: HTMLFormElement;

    constructor() {
        this.form = document.createElement('form');
        this.createFormElements();
    }

    private createFormElements() {
        this.form.classList.add('login_form');
        const firstNameLabel = this.createLabel('firstname', 'First name:');
        this.form.append(firstNameLabel);
        const firstNameInput = this.createInput('text', 'fname');
        this.form.append(firstNameInput);
        const surnameLabel = this.createLabel('surname', 'Surname:');
        this.form.append(surnameLabel);
        const surnameInput = this.createInput('text', 'sname');
        this.form.append(surnameInput);
    }

    private createInput(type: string, id: string): HTMLInputElement {
        const input = document.createElement('input');
        input.setAttribute('type', type);
        input.setAttribute('id', id);
        input.classList.add('login_input');
        input.required = true;
        return input;
    }

    private createLabel(forLabel: string, text: string): HTMLLabelElement {
        const label = document.createElement('label');
        label.setAttribute('for', forLabel);
        label.textContent = text;
        return label;
    }

    getRootElement(): HTMLFormElement {
        return this.form;
    }
}

export default CreateInputField;
