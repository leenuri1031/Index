import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import {
  root,
  mobileWidth,
  tabletWidth,
  desktopWidth,
  contactText,
} from "../basic/const.js";
import { bookcoverMaker } from "../bookcover_page/bookcover_page_mobile.js";
import { somedayPageMaker } from "../someday_page/someday_page_mobile.js";
import { tabletVerContactPage } from "./contact_page_tablet.js";
import { endPageMaker } from "../end_page/end_page_mobile.js";
import innerHTMLContact from "../basic/contact_function.js";

export function contactPageMaker() {
  if (
    mobileWidth.matches === true &&
    tabletWidth.matches === false &&
    desktopWidth.matches === false
  ) {
    functionObj.bgiStyle(
      root,
      "./portfolio_page/module/image/main_background.png",
      "center",
      "cover",
      1
    );

    functionObj.createElement("div", root);
    const container = root.children[0];
    functionObj.container(container, "95%", "95%");
    container.innerHTML = innerHTMLContact(
      contactText,
      "./portfolio_page/module/image/mail.png"
    );

    functionObj.container(container.children[0], "100%", "100%");

    const sections = container.children[0].children;
    functionObj.container(sections[0], "100%", "45%");
    functionObj.container(sections[1], "100%", "30%");
    functionObj.container(sections[2], "100%", "20%");

    const subTitles = document.getElementsByTagName("h4");
    for (let i = 0; i < subTitles.length; i++) {
      subTitles[i].classList.add("sub-title-txt");
      subTitles[i].style.paddingLeft = "1.5vh";
    }

    const textContent = document.getElementsByTagName("p");
    for (let i = 0; i < textContent.length; i++) {
      textContent[i].classList.add("content-txt");
      functionObj.size(textContent[i], "90%", "60%");
    }

    for (let i = 1; i < 3; i++) {
      functionObj.size(sections[1].children[i], "85%", "10%");
      functionObj.font(sections[1].children[i], "0.9rem", 580);
      sections[1].children[i].style.color = colorArr[5];
      sections[1].children[i].style.marginLeft = "2vh";
    }

    const imgArr = document.getElementsByTagName("img");
    functionObj.size(imgArr[0], "55%", "58%");
    functionObj.position(imgArr[0], "relative", "18%", "-50%");
    imgArr[0].style.opacity = 0.9;

    functionObj.size(sections[1].children[2], "85%", "30%");
    functionObj.font(sections[1].children[2], "0.9rem", 580);
    sections[1].children[2].style.color = colorArr[5];
    sections[1].children[2].style.marginLeft = "2vh";

    functionObj.size(sections[1].children[2].children[1], "95px", "95px");
    functionObj.position(
      sections[1].children[2].children[1],
      "relative",
      "5%",
      "15%"
    );

    functionObj.bgiStyle(
      sections[1].children[2].children[1],
      "./portfolio_page/module/image/contact_img.png",
      "center",
      "contain",
      0.9
    );

    // console.log(sections[2].children[1]);
    sections[2].children[1].classList.add("round-border");
    functionObj.position(sections[2].children[1], "relative", "-25%");
    sections[2].children[1].style.cursor = "pointer";

    const pageBox = document.getElementById("page-box7");
    functionObj.container(pageBox, "25%", "5%", "row");
    functionObj.position(pageBox, "absolute", "35%", "95%");
    pageBox.style.color = colorArr[5];

    for (let i = 0; i < pageBox.children.length; i++) {
      functionObj.font(pageBox.children[i], "1rem", 600);
      pageBox.children[i].style.cursor = "pointer";
    }

    let leftBtn = pageBox.children[0];
    let pageTxt = pageBox.children[1];
    let rightBtn = pageBox.children[2];

    pageTxt.addEventListener("click", () => {
      root.removeChild(root.children[0]);
      bookcoverMaker();
    });

    leftBtn.addEventListener("click", () => {
      root.removeChild(root.children[0]);
      somedayPageMaker();
    });

    rightBtn.addEventListener("click", () => {
      root.removeChild(root.children[0]);
      endPageMaker();
    });
  }
  tabletVerContactPage();
}
