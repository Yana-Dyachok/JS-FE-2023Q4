class MainPage {    
    constructor() {
 
    }

    drawMainPage = (): void => {
        const container: HTMLDivElement | null =
            document.querySelector('.container');
        if (container !== null) {
            container.innerHTML = '';
            container.classList.remove('start-screen_container');
        }
    };
}

export default MainPage;