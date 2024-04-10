import "./input_field.scss";

const createInput = (type: string, id: string): HTMLInputElement => {
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.classList.add("login__input");
  input.required = true;
  return input;
};

const createLabel = (forLabel: string, text: string): HTMLLabelElement => {
  const label = document.createElement("label");
  label.htmlFor = forLabel;
  label.textContent = text;
  return label;
};

const createErrorElements = (classError: string): HTMLDivElement =>
  Object.assign(document.createElement("div"), {
    className: `login__error ${classError}`,
  });

export const createInputField = (): HTMLFormElement => {
  const form = document.createElement("form");
  form.classList.add("login__form");
  form.append(
    createLabel("user-name", "Name:"),
    createInput("text", "user-name"),
    createErrorElements("user-name__error"),
    createLabel("password", "Password:"),
    createInput("password", "password"),
    createErrorElements("password__error"),
  );
  return form;
};
