import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import {
  root,
  mobileWidth,
  tabletWidth,
  desktopWidth,
  somedayText1,
  somedayText2,
} from "../basic/const.js";
import { bookcoverMaker } from "../bookcover_page/bookcover_page_mobile.js";
import { project2PageMaker } from "../project_page/project2_page_mobile.js";
import { tabletVerSomedayPage } from "./someday_page_tablet.js";
import { contactPageMaker } from "../contact_page/contact_page_mobile.js";
import innerHTMLSomeday from "../basic/someday_function.js";
import move from "../basic/animate.js";

export function somedayPageMaker() {
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

    container.innerHTML = innerHTMLSomeday(somedayText1, somedayText2);

    functionObj.container(container.children[0], "100%", "100%");

    const sections = container.children[0].children;
    for (let i = 0; i < 2; i++) {
      functionObj.container(sections[i], "100%", "48%");
      sections[i].style.position = "relative";
      sections[i].style.marginTop = "-10%";
    }

    const subTitles = document.getElementsByTagName("h4");
    for (let i = 0; i < subTitles.length; i++) {
      subTitles[i].classList.add("sub-title-txt");
      subTitles[i].style.paddingLeft = "1.5vh";
      functionObj.size(subTitles[i], "92%", "10%");
    }

    const textContent = document.getElementsByTagName("p");
    // console.log(textContent);
    for (let i = 0; i < textContent.length; i++) {
      textContent[i].classList.add("content-txt");
      functionObj.iAmPageTextBox(textContent[i], "50%", "90%");
    }
    textContent[1].style.marginTop = "-25%";

    const circleImg = document.getElementsByClassName("img-circle");
    // console.log(circleImg);
    functionObj.position(circleImg[0], "absolute", "45%", "85%");
    functionObj.bgiStyle(
      circleImg[0],
      "./portfolio_page/module/image/study.png",
      "center",
      "cover",
      0.8
    );
    move(circleImg[0], "45%", "46%");

    functionObj.position(circleImg[1], "absolute", "60%", "62%");
    functionObj.bgiStyle(
      circleImg[1],
      "./portfolio_page/module/image/digital_nomad.png",
      "center",
      "cover",
      0.8
    );
    move(circleImg[1], "60%", "59%");

    const pageBox = document.getElementById("page-box6");
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
      project2PageMaker();
    });

    rightBtn.addEventListener("click", () => {
      root.removeChild(root.children[0]);
      contactPageMaker();
    });
  }
  tabletVerSomedayPage();
}
