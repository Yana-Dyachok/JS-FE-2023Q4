import GarageButton from './garage-button/garage-button';
import WinnersButton from './winners-button/winners-button';
import './header.scss';

class Header {
    private header: HTMLElement;
    private garageButton: GarageButton;
    private winnersButton: WinnersButton;

    constructor() {
        this.garageButton = new GarageButton();
        this.winnersButton = new WinnersButton();
        this.header = document.createElement('header');
        this.header.classList.add('header');
        this.header.append(this.garageButton.getRootElement(), this.winnersButton.getRootElement());
    }

    getRootElement(): HTMLElement {
        return this.header;
    }
}

export default Header;
