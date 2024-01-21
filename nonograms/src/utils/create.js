// create header-----------------------------------------------------------------------------------------------------------------------------------------------------------------
document.body.setAttribute("class", "body change");
const wrapperBlock = document.createElement("div");
wrapperBlock.setAttribute("class", "wrapper");
document.body.append(wrapperBlock);
const header = document.createElement("header");
header.setAttribute("class", "header");
const scoreboard= document.createElement("div");
scoreboard.setAttribute("class", "header__scoreboard scoreboard");
//first row  - level of game-----------------------------------------------------------------------------------------------------------------------------------------
const firstRow=document.createElement("div");
firstRow.setAttribute("class", "scoreboard__first-row");
//level----------------------------------------------------------------------------------------------------------------------------------------------------
const levelBlock= document.createElement("div");
levelBlock.setAttribute("class", "level-block");
const levelText= document.createElement("div");
levelText.setAttribute("class", "menu-title");
levelText.textContent ="Level: ";
levelBlock.append(levelText);
export const level= document.createElement("select");
level.setAttribute("class", "level");
const option1 = document.createElement("option");
option1.value = "value1";
option1.textContent = "easy";

const option2 = document.createElement("option");
option2.value = "value2";
option2.textContent = "medium";

const option3 = document.createElement("option");
option3.value = "value3";
option3.textContent = "hard";

level.appendChild(option1);
level.appendChild(option2);
level.appendChild(option3);
levelBlock.append(level);
firstRow.append(levelBlock);

//second row - theme toggle, mike-------------------------------------------------------------------------------------------------------------
const secondRow=document.createElement("div");
secondRow.setAttribute("class", "scoreboard__second-row");
//theme toggle
export const themeToggle= document.createElement("div");
themeToggle.setAttribute("class", "scoreboard__theme-toggle change");
secondRow.append(themeToggle);

// audio------------------------------------------------------------------------------------------------------------
export const mike= document.createElement("div");
mike.setAttribute("class", "scoreboard__mike change");
export const audioLose = document.createElement("scoreboard__audio");
audioLose.setAttribute("class", "scoreboard__audio--lose");
audioLose.src ="./src/assets/audio/lose.mp3"
mike.append(audioLose);
export const audioWin = document.createElement("scoreboard__audio");
audioWin.setAttribute("class", "scoreboard__audio--win");
audioWin.src ="./src/assets/audio/win.mp3"
mike.append(audioWin);
export const audiMark = document.createElement("scoreboard__audio");
audiMark.setAttribute("class", "scoreboard__audio--mark");
audiMark.src ="./src/assets/audio/point-cell.mp3"
mike.append(audiMark);
export const audioFlag= document.createElement("scoreboard__audio");
audioFlag.setAttribute("class", "scoreboard__audio--flag");
audioFlag.src ="./src/assets/audio/flag.mp3"
mike.append(audioFlag);
secondRow.append(mike);

//third row - time-----------------------------------------------------------------------------------------------------
const thirdRow=document.createElement("div");
thirdRow.setAttribute("class", "scoreboard__third-row");
// time of game-----------------------------------------------------------------------------------------------------------------
const timeOfGame= document.createElement("div");
timeOfGame.setAttribute("class", "scoreboard__time");
const timeText= document.createElement("div");
timeText.setAttribute("class", "scoreboard__time__title");
timeOfGame.append(timeText);
timeText.textContent ="Time: ";
export const date= document.createElement("div");
date.setAttribute("class", "scoreboard__time__date change");
date.textContent = "00:00";
timeOfGame.append(date);
thirdRow.append(timeOfGame);

scoreboard.append(firstRow);
scoreboard.append(secondRow);
scoreboard.append(thirdRow);
header.append(scoreboard);
wrapperBlock.append(header);

//create main----------------------------------------------------------------------------------------------------------------------------
const main= document.createElement("main");
main.setAttribute("class", "main");
export const gameBlock= document.createElement("div");
gameBlock.setAttribute("class", "game__block");
const gameInner= document.createElement("div");
gameInner.setAttribute("class", "game__inner");
export const gameTable= document.createElement("table");
gameTable.setAttribute("id", "game");
gameInner.append(gameTable);
main.append(gameBlock);
main.append(gameInner);
wrapperBlock.append(main);

//create footer-----------------------------------------------------------------------------------------------------------------------------------------------------
const footer= document.createElement("footer");
footer.setAttribute("class", "footer");
wrapperBlock.append(footer);
export default wrapperBlock;

export const overlay= document.createElement("div");
 overlay.setAttribute("class", "overlay");
document.body.append(overlay);