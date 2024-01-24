import { startGame, flags  } from './game.js';

export function createPopUp(flag, time) {
    time = convertToSeconds(time);

    const popup = document.createElement('div');
    popup.setAttribute('class', 'popup');

    const popupBody = document.createElement('div');
    popupBody.setAttribute('class', 'popup__body');

    const popupContent = document.createElement('div');
    popupContent.setAttribute('class', `popup__content ${flags.themeFlag === 'true' ? 'dark' : ''}`);

    const popupText = document.createElement('h3');
    popupText.setAttribute('class', 'popup__text');
    popupText.innerHTML = flag
        ? `Great! You have solved the nonogram in <span class="popup__span-word">'${time}'</span> seconds!`
        : 'Unfortunately, you lost!';

    const closeButton = document.createElement('button');
    closeButton.setAttribute('class', `popup__close-btn btn ${flags.themeFlag === 'true' ? 'dark' : ''}`);
    closeButton.textContent = 'New Game';
    closeButton.addEventListener('click', () => {
        popup.classList.toggle('target');
        startGame();
    });

    popupContent.append(popupText);
    popupContent.append(closeButton);

    popupBody.append(popupContent);

    popup.append(popupBody);
    document.body.append(popup);
}

function convertToSeconds(timeString) {
    const [minutes, secundes] = timeString.split(':').map(Number);
    const totalSeconds = minutes * 60 + secundes;
    return totalSeconds;
}
