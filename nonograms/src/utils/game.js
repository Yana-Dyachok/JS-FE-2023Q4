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
} from './settings.js';

export let flags = {
    solutionOn: 'false',
    solutionShown: 'false',
    isFirstClickDone: 'false',
    gameOver: 'false',
    themeFlag: 'false',
    mikeFlag: 'true',
    isDragging: 'false',
};

export let startDate;
const cellStates = ['none', 'off', 'on'];
let fieldState = {
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
    if (!flags.isFirstClickDone) {
        startDate = new Date();
        gameDurationInterval = setInterval(updateGameDuration, 1000);
        flags.isFirstClickDone = true;
    }

    if (flags.solutionOn) return;

    audioPlay(audioMark);
    const clickedTd = event.target;
    if (clickedTd.classList.contains('off')) clickedTd.classList.remove('off');
    clickedTd.classList.toggle('on');
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

            el.dataset.x = j;
            el.dataset.y = i;
            el.addEventListener('click', onCellMouseClick);

            el.addEventListener('contextmenu', (event) => {
                audioPlay(audioFlag);
                const clickedTd = event.target;
                if (clickedTd.classList.contains('on'))
                    clickedTd.classList.remove('on');
                clickedTd.classList.toggle('off');
            });

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

function setTableField(field) {
    for (let i = 0; i < column; i++) {
        for (let j = 0; j < row; j++) {
            let state = cellStates[field[i][j]];
            markCell(j, i, state);
        }
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
    redraw();
    clearInterval(gameDurationInterval);
    date.textContent = '00:00';
    flags.gameOver = false;
    flags.isFirstClickDone = false;
}

function redraw() {
    setTableHeaders(fieldState.keys);
    // if (flags.solutionOn) {
    //     setTableField(fieldState.solution);
    // } else {
    //     setTableField(fieldState.field);
    // }
}

function showSolution() {
    flags.solutionShown = true;
    flags.solutionOn = !flags.solutionOn;
    redraw();
}

function areArraysEqual() {
    for (let i = 0; i < column; i++) {
        for (let j = 0; j < row; j++) {
            if (
                fieldState.solution[i][j] !== 2 &&
                fieldState.solution[i][j] !== 2
            ) {
                //console.log('Solution:', fieldState.solution[i][j]);
                //console.log('Field:', fieldState.solution[i][j]);
                //console.log('Solution-all:', fieldState.solution[i][j]);
                //console.log('Field-all:', fieldState.field[i][j]);
                return false;
            }
        }
    }
    return true;
}

function checkVictory() {
    if (flags.solutionOn) return false;

    const result = areArraysEqual();

    // console.log('Solution:', fieldState.solution);
    // console.log('Field:', fieldState.field);
    console.log('Result:', result);

    if (result) {
        audioPlay(audioWin);
        flags.gameOver = true;
        createPopUp(true, date.textContent);
    } else {
        return false;
    }
}

startGame();

resetGameBtn.addEventListener('click', startGame);
// continueBtn.addEventListener('click',);
solutionBtn.addEventListener('click', showSolution);

document.getElementById('game').addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

//the idea and some code were taken from https://codepen.io/McXinuS/pen/KQMdmM
