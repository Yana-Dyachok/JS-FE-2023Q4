import {
    level,
    picture,
    mike,
    date,
    audioMark,
    audioWin,
    audioLose,
    audioFlag,
    randomBtn,
    themeToggle,
    pictureOptions,
} from './create.js';
import {
    geometricData,
    lettersData,
    foodData,
    objectsData,
} from './pictures-data.js';
import {
    fieldState,
    startGame,
    startDate,
    flags,
    fillArrayRandom,
    fillArrayPictures,
} from './game.js';

export let row = 5;
export let column = 5;
let selectedLevel = localStorage.getItem('level') || 'easy';
export let selectedPicture = localStorage.getItem('picture') || 'random cells';
let gameDuration = 0;

//change level ---------------------------------------------------------------------------
function changeSize(n) {
    row = n;
    column = n;
}

function getLevel(selectedLevel) {
    if (selectedLevel === 'easy') changeSize(5);
    if (selectedLevel === 'medium') changeSize(10);
    if (selectedLevel === 'hard') changeSize(15);
}

level.addEventListener('change', function () {
    let option = level.options[level.selectedIndex];
    selectedLevel = option.textContent;
    setLocalStorage();
    getLevel(selectedLevel);
    startGame();
});

//change picture ---------------------------------------------------------------------------
export function getPicture(selectedPicture, array) {
    switch (selectedPicture) {
        case 'random cells':
            fillArrayRandom(array);
            break;
        case 'letters':
            fillArrayPictures(array, lettersData);
            break;
        case 'geometric shapes':
            fillArrayPictures(array, geometricData);
            break;
        case 'objects':
            fillArrayPictures(array, objectsData);
            break;
        case 'food':
            fillArrayPictures(array, foodData);
            break;
        default:
            console.error('Invalid selectedLevel:', selectedPicture);
            break;
    }
}

function getSelectedValue(selectedValue, select) {
    const childrenArray = Array.from(select.children);
    childrenArray.forEach((el) => {
        if (el.textContent === selectedValue) el.selected = true;
    });
   setLocalStorage();
}

picture.addEventListener('change', function () {
    let option = picture.options[picture.selectedIndex];
    selectedPicture = option.textContent;
    startGame();
    //setLocalStorage();
});

//random game ----------------------------------------------------------------------------------------------------------------------
randomBtn.addEventListener('click', getRandomGame);

function getRandomLevel() {
    const levels = ['easy', 'medium', 'hard'];
    const randomIndex = Math.floor(Math.random() * levels.length);
    selectedLevel = levels[randomIndex];
    setLocalStorage();
    getSelectedValue(selectedLevel, level);
    getLevel(selectedLevel);
}

function getRandomPicture() {
    const pictures = pictureOptions.map((option) => option.text);
    const randomIndex = Math.floor(Math.random() * pictures.length);
    selectedPicture = pictures[randomIndex];
    setLocalStorage();
    getSelectedValue(selectedPicture, picture);
}

function getRandomGame() {
    getRandomLevel();
    getRandomPicture();
    startGame();
}

//sound/mute-------------------------------------------------------------------------------------------------------------------------
export function audioPlay(elem) {
    if (!mike.classList.contains('off')) {
        elem.play();
    } else {
        elem.pause();
    }
}

function toggleMute() {
    if (mike.classList.contains('off')) {
        audioMark.pause();
        audioLose.pause();
        audioFlag.pause();
        audioWin.pause();
    }
}

mike.addEventListener('click', () => {
    mike.classList.toggle('off');
    toggleMute();
    flags.mikeFlag = !mike.classList.contains('off') ? true : false;
    setLocalStorage();
});

//time----------------------------------------------------------------------------------------------------------------
export function updateGameDuration() {
    if (flags.gameOver) {
        gameDuration = date.textContent;
        date.textContent = '00:00';
        //tenGameDuration.push(gameDuration);
        setLocalStorage();
        return;
    }
    if (!flags.gameOver) {
        let currentDate = new Date();
        let timeDiff = Math.floor((currentDate - startDate) / 1000);
        let minutes = Math.floor(timeDiff / 60);
        let seconds = timeDiff % 60;
        date.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`;
    }
}

// // theme toggle-----------------------------------------------------------------------------------------------------------------------------
function getThemeToggle() {
    themeToggle.addEventListener('click', () => {
        const themeToggleElements = document.querySelectorAll('.change');
        themeToggleElements.forEach((btn) => btn.classList.toggle('dark'));
        flags.themeFlag = themeToggle.classList.contains('dark') ? true : false;
        setLocalStorage();
    });
}

getThemeToggle();

// continue game--------------------------------------------------------------------------------------
export function getValueFromLocalStorage(row) {
    selectedLevel = row === 5 ? 'easy' : row === 10 ? 'medium' : 'hard';
    getLevel(selectedLevel);
    getSelectedValue(selectedLevel, level);
    selectedPicture = localStorage.getItem('picture');
    getSelectedValue(selectedPicture, picture);
}

//save in localStorage-----------------------------------------------------------------------------------------------------------------
let tenGameDuration = [];
export function setLocalStorage() {
    localStorage.setItem('mike', flags.mikeFlag);
    localStorage.setItem('theme', flags.themeFlag);
    localStorage.setItem('level', selectedLevel);
    localStorage.setItem('picture', selectedPicture);
    localStorage.setItem('gameDuration', gameDuration);
    localStorage.setItem('duration', JSON.stringify(tenGameDuration));
}

export function getLocalStorage() {
    if (localStorage.getItem('gameDuration')) {
        gameDuration = localStorage.getItem('gameDuration');
        tenGameDuration.push(gameDuration);

        localStorage.setItem('duration', JSON.stringify(tenGameDuration));
    }

    if (localStorage.getItem('mike')) {
        flags.mikeFlag = localStorage.getItem('mike');
        if (flags.mikeFlag === 'false') {
            mike.classList.add('off');
        } else {
            mike.classList.remove('off');
        }
        toggleMute();
    }

    if (localStorage.getItem('theme')) {
        flags.themeFlag = localStorage.getItem('theme');
        const themeToggleElements = document.querySelectorAll('.change');
        if (flags.themeFlag === 'true') {
            themeToggleElements.forEach((btn) => btn.classList.add('dark'));
        } else {
            themeToggleElements.forEach((btn) => btn.classList.remove('dark'));
        }
    }

    if (localStorage.getItem('level')) {
        let selected = localStorage.getItem('level');
        getLevel(selected);
        getSelectedValue(selectedLevel, level);
        startGame();
    }

    if (localStorage.getItem('picture')) {
        let selected = localStorage.getItem('picture');
        getSelectedValue(selected, picture);
        startGame();
    }

    if (localStorage.getItem('duration')) {
        const durationJSON = localStorage.getItem('duration');
        tenGameDuration = JSON.parse(durationJSON);
    }
}

function getGameDuration(data) {
    tenGameDuration.push(data);
    localStorage.setItem('duration', JSON.stringify(tenGameDuration));
    console.log(tenGameDuration);
}

window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);
