import Button from "../button/button";
import { ws } from "../../../api/websocket";

class EditButton extends Button {
  constructor() {
    super("message__edit-btn", "message__edit", "", "button");
  }

  editMessage(dataset:string):void {
    this.onClick(() => {
      if (dataset) {
        const messageText = document.querySelector(`[data-message-text="${dataset}"]`);
        if (messageText) {
        
        }
      }
  })
}

}

export default EditButton;