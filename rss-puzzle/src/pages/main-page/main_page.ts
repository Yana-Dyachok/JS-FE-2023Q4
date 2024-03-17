import PlayField from "../../components/play-field/play_field";

class MainPage {
    private playField: PlayField;
    constructor() {
        this.playField = new PlayField();
    }

    drawMainPage = (): void => {
        const container: HTMLDivElement | null =
            document.querySelector('.container');
        if (container !== null) {
            container.innerHTML = '';
            container.classList.remove('start-screen_container');
            container.append(this.playField.getRootElement());
        }
    };
}

export default MainPage;
