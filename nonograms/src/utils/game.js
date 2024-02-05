import { createPopUp } from './popup.js';
import {
    gameTable,
    date,
    audioMark,
    audioWin,
    audioLose,
    audioFlag,
    resetGameBtn,
    continueBtn,
    solutionBtn,
} from './create.js';
import {
    row,
    column,
    updateGameDuration,
    audioPlay,
    selectedPicture,
    getPicture,
    getValueFromLocalStorage,
} from './settings.js';

export let flags = {
    solutionOn: 'false',
    solutionShown: 'false',
    isFirstClickDone: 'false',
    gameOver: 'false',
    themeFlag: 'false',
    mikeFlag: 'true',
    isDragging: 'false',
    isContinue: 'false',
};

export let startDate;
export let fieldState = {
    field: [],
    solution: [],
    keys: {
        h: [],
        v: [],
    },
};

let gameDurationInterval;

function getRandomBinary() {
    return Math.round(Math.random());
}

let cells = [];
let headers = {
    h: [],
    v: [],
};

export function fillArrayRandom(array) {
    for (let i = 0; i < column; i++) {
        array[i] = [];
        for (let j = 0; j < row; j++) {
            array[i][j] = getRandomBinary();
        }
    }
}

export function fillArrayPictures(array, data) {
    const randomIndex = row / 5 - 1;
    const selectedFigure = data[randomIndex];
    for (let i = 0; i < column; i++) {
        array[i] = [];
        for (let j = 0; j < row; j++) {
            array[i][j] = selectedFigure[i][j];
        }
    }
}

function fillArrayZero(array) {
    for (let i = 0; i < column; i++) {
        array[i] = [];
        for (let j = 0; j < row; j++) {
            array[i][j] = 0;
        }
    }
}

function getKeyHeaderV(array, key) {
    let temp = [];
    let res = [];
    for (let i = 0; i < column; i++) {
        temp.push(array[i].join('').replace(/0/g, ',').split(','));
        res = temp[i].filter((el) => el.length > 0);
        key[i] = res.map((el) => el.length);
    }
}

function getKeyHeaderH(primArray, key) {
    let temp = [];
    let res = [];
    let array = primArray[0].map((col, i) => primArray.map((row) => row[i]));

    for (let i = 0; i < column; i++) {
        temp.push(array[i].join('').replace(/0/g, ',').split(','));
        res = temp[i].filter((el) => el.length > 0);
        key[i] = res.map((el) => el.length);
    }
}

function generateField() {
    let temporaryState = {
        field: [],
        solution: [],
        keys: {
            h: [],
            v: [],
        },
    };
    getPicture(selectedPicture, temporaryState.solution);
    fillArrayZero(temporaryState.field);
    getKeyHeaderV(temporaryState.solution, temporaryState.keys.v);
    getKeyHeaderH(temporaryState.solution, temporaryState.keys.h);

    return temporaryState;
}

function onCellMouseClick(event) {
    let x = event.target.dataset.x;
    let y = event.target.dataset.y;
    if (!flags.isFirstClickDone && !flags.solutionOn) {
        startDate = new Date();
        gameDurationInterval = setInterval(updateGameDuration, 1000);
        flags.isFirstClickDone = true;
    }

    if (flags.solutionOn) return;

    audioPlay(audioMark);
    const clickedTd = event.target;
    if (clickedTd.classList.contains('off')) clickedTd.classList.remove('off');
    clickedTd.classList.toggle('on');
    fieldState.field[x][y] = clickedTd.classList.contains('on') ? 1 : 0;
    setLocalStorage();
    checkVictory();
}

function onCellRighClick(event) {
    let x = event.target.dataset.x;
    let y = event.target.dataset.y;
    if (flags.solutionOn) return false;
    audioPlay(audioFlag);
    const clickedTd = event.target;
    if (clickedTd.classList.contains('on')) {
        fieldState.field[x][y] = 0;
        clickedTd.classList.remove('on');
    }
    clickedTd.classList.toggle('off');
    checkVictory();
}

function createGameTable() {
    while (gameTable.firstChild) {
        gameTable.removeChild(gameTable.firstChild);
    }

    cells = [];
    headers = { h: [], v: [] };

    for (let i = 0; i < row; i++) {
        let el = document.createElement('th');
        headers.h.push(el);
    }

    for (let i = 0; i < column; i++) {
        let el = document.createElement('th');
        headers.v.push(el);
    }

    for (let i = 0; i < column; i++) {
        cells[i] = [];

        for (let j = 0; j < row; j++) {
            let el = document.createElement('td');

            el.dataset.x = i;
            el.dataset.y = j;
            el.addEventListener('click', onCellMouseClick);
            el.addEventListener('contextmenu', onCellRighClick);
            cells[i].push(el);
        }
    }

    let headerTr = document.createElement('tr');
    let emptyHeader = document.createElement('th');
    headerTr.append(emptyHeader);

    for (let i = 0; i < row; i++) {
        headerTr.append(headers.h[i]);
    }
    gameTable.append(headerTr);

    for (let i = 0; i < column; i++) {
        let tr = document.createElement('tr');
        tr.append(headers.v[i]);
        for (let j = 0; j < row; j++) {
            tr.append(cells[i][j]);
        }
        gameTable.append(tr);
    }
}

function setTableHeaders(keys) {
    for (let i = 0; i < column; i++) {
        let str = keys.v[i].join(' ');
        headers.v[i].innerText = str;
    }

    for (let i = 0; i < row; i++) {
        let str = keys.h[i].join('\n');
        headers.h[i].innerText = str;
    }
}

export function startGame() {
    flags.solutionOn = false;
    flags.solutionShown = false;
    fieldState = generateField();
    createGameTable();
    setTableHeaders(fieldState.keys);
    clearInterval(gameDurationInterval);
    flags.gameOver = false;
    flags.isFirstClickDone = false;
    flags.isContinue = false;
    date.textContent = '00:00';
}

function drawSolution() {
    const el = document.querySelectorAll('td');
    for (let i = 0; i < column; i++) {
        for (let j = 0; j < row; j++) {
            if (flags.solutionOn) {
                el[i * row + j].classList.add(
                    fieldState.solution[i][j] === 1
                        ? 'on-solution'
                        : 'off-solution'
                );
            } else {
                el[i * row + j].classList.remove(
                    fieldState.solution[i][j] === 1
                        ? 'on-solution'
                        : 'off-solution'
                );
            }
        }
    }
}

function showSolution() {
    flags.solutionShown = true;
    flags.solutionOn = !flags.solutionOn;
    flags.solutionOn
        ? solutionBtn.classList.add('active')
        : solutionBtn.classList.remove('active');
    drawSolution();
}

function areArraysEqual() {
    for (let i = 0; i < column; i++) {
        for (let j = 0; j < row; j++) {
            if (fieldState.solution[i][j] !== fieldState.field[i][j]) {
                return false;
            }
        }
    }
    return true;
}

function checkVictory() {
    if (flags.solutionOn) return false;
    const result = areArraysEqual();
    if (result) {
        audioPlay(audioWin);
        flags.gameOver = true;
        const timeResult = date.textContent;
        setTimeout(() => createPopUp(true, timeResult), 1000);
    } else {
        return false;
    }
}

startGame();

function continueGame() {
    flags.isContinue = true;
    fieldState = JSON.parse(localStorage.getItem('playField'));
    getValueFromLocalStorage();
    createGameTable();
    setTableHeaders(fieldState.keys);
    drawContinue();
    clearInterval(gameDurationInterval);
    flags.gameOver = false;
    flags.isFirstClickDone = false;
    flags.isContinue = false;
    date.textContent = '00:00';
}

function drawContinue() {
    const el = document.querySelectorAll('td');
    for (let i = 0; i < column; i++) {
        for (let j = 0; j < row; j++) {
            if (flags.isContinue && fieldState.field[i][j] === 1) {
                el[i * row + j].classList.add('on');
            }
        }
    }
}

resetGameBtn.addEventListener('click', startGame);
continueBtn.addEventListener('click', continueGame);
solutionBtn.addEventListener('click', showSolution);

document.getElementById('game').addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

function setLocalStorage() {
    localStorage.setItem('playField', JSON.stringify(fieldState));
}

function getLocalStorage() {
    const playField = JSON.parse(localStorage.getItem('playField') || '{}');
    return playField;
}

window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);
//the idea and some code were taken from https://codepen.io/McXinuS/pen/KQMdmM
