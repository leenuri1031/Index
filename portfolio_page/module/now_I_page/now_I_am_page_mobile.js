import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import {
  root,
  mobileWidth,
  tabletWidth,
  desktopWidth,
  nowI1,
  nowI2,
} from "../basic/const.js";
import { tabletVerNowPage } from "./now_I_am_page_tablet.js";
import { bookcoverMaker } from "../bookcover_page/bookcover_page_mobile.js";
import { iAmPageMaker } from "../Iam_page/I_am_page_mobile.js";
import { project1PageMaker } from "../project_page/project1_page_mobile.js";
import innerHTMLNowI from "../basic/now_I_function.js";
import move from "../basic/animate.js";

export function nowIPageMaker() {
  if (
    mobileWidth.matches === true &&
    tabletWidth.matches === false &&
    desktopWidth.matches === false
  ) {
    functionObj.bgiStyle(
      root,
      "./module/image/main_background.png",
      "center",
      "cover",
      1
    );

    functionObj.createElement("div", root);

    const container = root.children[0];
    functionObj.container(container, "95%", "95%");
    container.innerHTML = innerHTMLNowI(nowI1, nowI2);
    // console.log(container.children[0].children);
    functionObj.container(container.children[0], "100%", "100%");

    const sections = container.children[0].children;

    functionObj.container(sections[0], "100%", "60%");
    functionObj.container(sections[1], "100%", "35%");

    // console.log(sections[0].children);
    for (let i = 0; i < 2; i++) {
      functionObj.iAmPageTextBox(sections[0].children[i], "7%");
      sections[0].children[i].style.color = colorArr[5];
    }
    sections[0].children[1].style.paddingLeft = "1.5vh";
    sections[1].style.position = "relative";

    const textContent = Array.from(document.getElementsByTagName("p"));

    for (let i = 0; i < textContent.length; i++) {
      functionObj.iAmPageTextBox(textContent[i], "35%", "97%");
      functionObj.font(textContent[i], "0.8rem", "500");
      textContent[i].style.paddingLeft = "2.5vh";
      textContent[i].style.lineHeight = "200%";
      textContent[i].style.textAlign = "justify";
      textContent[i].style.color = colorArr[4];
    }

    for (let i = 0; i < 2; i++) {
      functionObj.boxStyle(
        sections[1].children[i],
        "35vw",
        "35vw",
        colorArr[0],
        "100%"
      );
    }

    functionObj.position(sections[1].children[0], "absolute", "10%");
    move(sections[1].children[0], "10%", "11%");
    functionObj.bgiStyle(
      sections[1].children[0],
      "./module/image/layout.png",
      "center",
      "cover",
      0.8
    );

    functionObj.position(sections[1].children[1], "absolute", "60%", "30%");
    move(sections[1].children[1], "60%", "59%");
    functionObj.bgiStyle(
      sections[1].children[1],
      "./module/image/coding.png",
      "center",
      "cover",
      0.8
    );

    const pageBox = document.getElementById("page-box3");

    functionObj.container(pageBox, "25%", "5%", "row");
    functionObj.position(pageBox, "absolute", "35%", "95%");
    pageBox.style.color = colorArr[5];

    for (let i = 0; i < pageBox.children.length; i++) {
      functionObj.font(pageBox.children[i], "1rem", 600);
    }

    let leftBtn = pageBox.children[0];
    let pageTxt = pageBox.children[1];
    let rightBtn = pageBox.children[2];

    leftBtn.style.cursor = "pointer";
    pageTxt.style.cursor = "pointer";
    rightBtn.style.cursor = "pointer";

    pageTxt.addEventListener("click", () => {
      root.removeChild(root.children[0]);
      bookcoverMaker();
    });

    leftBtn.addEventListener("click", () => {
      root.removeChild(root.children[0]);
      iAmPageMaker();
    });

    rightBtn.addEventListener("click", () => {
      root.removeChild(root.children[0]);
      project1PageMaker();
    });
  }
  tabletVerNowPage();
}
