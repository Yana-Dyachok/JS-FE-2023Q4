import './button.scss';

class Button {
    private button: HTMLButtonElement;

    constructor(className: string, text:string ) {
        this.button = document.createElement('button');
        this.button.classList.add(className);
        this.button.textContent = text;
    }

    getRootElement(): HTMLButtonElement {
        return this.button;
    }

    setDisabled(disabled: boolean): void {
        disabled
            ? this.button.setAttribute('disabled', 'disabled')
            : this.button.removeAttribute('disabled');
    }

    onClick(callback: () => void): void {
        this.button.addEventListener('click', callback);
    }
}

export default Button;