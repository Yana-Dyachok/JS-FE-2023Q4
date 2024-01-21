export function createPopUp(flag) {
    const popup = document.createElement("div");
    popup.classList.add("popup");
  
    const popupBody = document.createElement("div");
    popupBody.classList.add("popup__body");
  
    const popupContent = document.createElement("div");
    popupContent.classList.add("popup__content");
  
    const popupText = document.createElement("h3");
    popupText.classList.add("popup__text");
    popupText.textContent = flag
      ? "Сongratulations! You won!"
      : "Unfortunately, you lost!";
  
    const closeButton = document.createElement("button");
    closeButton.classList.add("popup__close-btn");
    closeButton.textContent = "New Game";
  
    closeButton.addEventListener("click", () => {
      popup.classList.toggle("target");
      newGame();
    });
  
    showWord.append(spanWord);
    popupContent.append(popupText);
    popupContent.append(showWord);
    popupContent.append(closeButton);
  
    popupBody.append(popupContent);
  
    popup.append(popupBody);
    document.body.append(popup);
  }