class CreateInputGarage {
  createInputText(): HTMLInputElement {
    const inputText: HTMLInputElement = document.createElement("input");
    inputText.classList.add("input__text");
    inputText.type = "text";
    inputText.id = "input-text";
    return inputText;
  }

  createInputUpdateText(): HTMLInputElement {
    const inputUpdateText: HTMLInputElement = document.createElement("input");
    inputUpdateText.classList.add("input__update-text");
    inputUpdateText.type = "text";
    inputUpdateText.id = "input-update-text";
    return inputUpdateText;
  }

  createInputColor(): HTMLInputElement {
    const inputColor: HTMLInputElement = document.createElement("input");
    inputColor.classList.add("input__color");
    inputColor.type = "color";
    inputColor.id = "input-color";
    inputColor.name = "create-color";
    inputColor.value = "#ffffff";
    return inputColor;
  }

  createInputUpdateColor(): HTMLInputElement {
    const inputUpdateColor: HTMLInputElement = document.createElement("input");
    inputUpdateColor.classList.add("input__update-color");
    inputUpdateColor.type = "color";
    inputUpdateColor.id = "input-update-color";
    inputUpdateColor.name = "update-color";
    inputUpdateColor.value = "#ffffff";
    return inputUpdateColor;
  }
}

export default CreateInputGarage;
