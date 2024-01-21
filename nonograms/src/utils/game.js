import { createPopUp } from './popup.js';
import {
    gameTable,
    level,
    mike,
    audiMark,
    audioWin,
    audioLose,
    audioFlag,
    randomBtn,
    themeToggle,
    resetGameBtn,
    continueBtn,
    solutionBtn,
} from './create.js';
let row = 5;
let column = 5;
let selectedOption = localStorage.getItem('level') || 'easy';
let themeFlag = false;
let mikeFlag = true;
let solutionOn = false;
let solutionShown = false;

//change level ---------------------------------------------------------------------------
function changeSize(n) {
    row = n;
    column = n;
}

function getLevel(selectedOption) {
    if (selectedOption === 'easy') changeSize(5);
    if (selectedOption === 'medium') changeSize(10);
    if (selectedOption === 'hard') changeSize(15);
}

function getSelectedOption(selectedOption) {
    const childrenArray = Array.from(level.children);
    childrenArray.forEach((el) => {
        if (el.textContent === selectedOption) el.selected = true;
    });
}

level.addEventListener('change', function () {
    let option = level.options[level.selectedIndex];
    selectedOption = option.textContent;
    setLocalStorage();
    getLevel(selectedOption);
    startGame();
});

// randomBtn.addEventListener('click',);

// mike.addEventListener('click',);
// resetGameBtn.addEventListener('click',);
// continueBtn.addEventListener('click',);
// solutionBtn.addEventListener('click',);
//sound/mute-------------------------------------------------------------------------------------------------------------------------
function audioPlay(elem) {
    if (!mike.classList.contains('off')) {
        elem.play();
    } else {
        elem.pause();
    }
}

function toggleMute() {
    if (mike.classList.contains('off')) {
        audiMark.pause();
        audioLose.pause();
        audioFlag.pause();
        audioWin.pause();
    }
    //  else {
    //   if ()audioLose.play();
    //   if () audioWin.play();
    // }
}

mike.addEventListener('click', () => {
    mike.classList.toggle('off');
    toggleMute();
    mikeFlag = !mike.classList.contains('off') ? true : false;
    setLocalStorage();
});

// theme toggle-----------------------------------------------------------------------------------------------------------------------------
function getThemeToggle() {
    themeToggle.addEventListener('click', () => {
        const themeToggleElements = document.querySelectorAll('.change');
        themeToggleElements.forEach((btn) => btn.classList.toggle('dark'));
        themeFlag = themeToggle.classList.contains('dark') ? true : false;
        setLocalStorage();
    });
}

getThemeToggle();

//save in localStorage-----------------------------------------------------------------------------------------------------------------
let tenGameDuration = [];
function setLocalStorage() {
    localStorage.setItem('mike', mikeFlag);
    localStorage.setItem('theme', themeFlag);
    localStorage.setItem('level', selectedOption);
    localStorage.setItem('gameDuration', gameDuration);
    localStorage.setItem('duration', JSON.stringify(tenGameDuration));
}

function getLocalStorage() {
    if (localStorage.getItem('gameDuration')) {
        gameDuration = localStorage.getItem('gameDuration');
        tenGameDuration.push(gameDuration);
        console.log(tenGameDuration);
        localStorage.setItem('duration', JSON.stringify(tenGameDuration));
    }

    //   if (localStorage.getItem("mike")) {
    //     mikeFlag = localStorage.getItem("mike");
    //     if (mikeFlag === "false") {
    //       mike.classList.add("off");
    //     } else {
    //       mike.classList.remove("off");
    //     }
    //     toggleMute();
    //   }

    if (localStorage.getItem('theme')) {
        themeFlag = localStorage.getItem('theme');
        const themeToggleElements = document.querySelectorAll('.change');
        if (themeFlag === 'true') {
            themeToggleElements.forEach((btn) => btn.classList.add('dark'));
        } else {
            themeToggleElements.forEach((btn) => btn.classList.remove('dark'));
        }
    }

    if (localStorage.getItem('level')) {
        let selected = localStorage.getItem('level');
        getLevel(selected);
        getSelectedOption(selectedOption);
        // startGame();
    }

    if (localStorage.getItem('duration')) {
        const durationJSON = localStorage.getItem('duration');
        tenGameDuration = JSON.parse(durationJSON);
    }
}

// function getGameDuration(data) {
//   tenGameDuration.push(data);
//   localStorage.setItem("duration", JSON.stringify(tenGameDuration));
//   console.log(tenGameDuration );
// }

window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);
