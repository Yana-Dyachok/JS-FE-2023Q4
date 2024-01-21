export function createPopUp(flag, time) {
    const popup = document.createElement('div');
    popup.setAttribute('class', 'popup');

    const popupBody = document.createElement('div');
    popupBody.setAttribute('class', 'popup__body');

    const popupContent = document.createElement('div');
    popupContent.setAttribute('class', 'popup__content');

    const popupText = document.createElement('h3');
    popupText.setAttribute('class', 'popup__text');
    popupText.innerHTML = flag
        ? `Great! You have solved the nonogram in <span class="popup__span-word">'${time}'</span> seconds!`
        : 'Unfortunately, you lost!';

    const closeButton = document.createElement('button');
    closeButton.setAttribute('class', 'popup__close-btn btn');
    closeButton.textContent = 'New Game';

    closeButton.addEventListener('click', () => {
        popup.classList.toggle('target');
        newGame();
    });

    popupContent.append(popupText);
    popupContent.append(closeButton);

    popupBody.append(popupContent);

    popup.append(popupBody);
    document.body.append(popup);
}