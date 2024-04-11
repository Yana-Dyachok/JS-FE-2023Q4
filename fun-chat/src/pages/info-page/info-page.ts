import Page from "../../utils/page/page";
import Button from "../../core/components/button/button";
import "./info-page.scss";

class InfoPage extends Page {
  static TextObject = {
    InfoTitle: "Info Page",
  };

  private button: Button;

  constructor(id: string) {
    super(id);
    this.button = new Button("back__btn", "btn", "Back");
    this.button.onClick(() => {
      window.location.hash = "main";
    });
  }

  createInfoElements(): HTMLDivElement {
    const infoBlock = document.createElement("div");
    infoBlock.classList.add("info__block");

    const title = document.createElement("h1");
    title.classList.add("info__title");
    title.textContent = "Fun chat";

    const info = document.createElement("h2");
    info.classList.add("info__text");
    info.textContent =
      "Introducing our chat platform—a space designed for seamless communication among friends. Picture this: engaging conversations, quick exchanges, and shared moments—all within the confines of our chat environment.";
    const githubLink = document.createElement("a");
    githubLink.classList.add("info__link");
    githubLink.setAttribute("href", "https://github.com/Yana-Dyachok");
    githubLink.setAttribute("target", "_blank");
    githubLink.textContent = "Created by Yana Dyachok";
    infoBlock.append(title, info, githubLink);
    return infoBlock;
  }

  render() {
    const wrapper: HTMLDivElement = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.append(this.createInfoElements(), this.button.getRootElement());
    this.container.append(wrapper);
    return this.container;
  }
}

export default InfoPage;
