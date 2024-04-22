import Button from "../button/button";

class DeleteButton extends Button {
  constructor() {
    super("message__delete-btn", "message__delete", "", "button");
    this.onClick(() => {});
  }
}

export const deleteButton = new DeleteButton();
