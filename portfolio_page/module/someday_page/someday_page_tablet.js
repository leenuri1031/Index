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
import { tabletVerBookcover } from "../bookcover_page/bookcover_page_tablet.js";
import { tabletVerProject2Page } from "../project_page/project2_page_tablet.js";
import { tabletVerContactPage } from "../contact_page/contact_page_tablet.js";
import innerHTMLSomeday from "../basic/someday_function.js";
import move from "../basic/animate.js";

export function tabletVerSomedayPage() {
  if (
    mobileWidth.matches === false &&
    tabletWidth.matches === true &&
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
    container.style.border = `1px dotted ${colorArr[5]}`;
    container.innerHTML = innerHTMLSomeday(somedayText1, somedayText2);

    functionObj.container(container.children[0], "95%", "100%");

    const sections = container.children[0].children;
    for (let i = 0; i < 2; i++) {
      functionObj.container(sections[i], "100%", "45%");
      sections[i].style.position = "relative";
    }

    sections[0].style.marginTop = "-10%";
    sections[1].style.marginTop = "-15%";

    const subTitles = document.getElementsByTagName("h4");
    for (let i = 0; i < subTitles.length; i++) {
      subTitles[i].classList.add("sub-title-txt");
      subTitles[i].style.paddingLeft = "1.5vh";
      functionObj.size(subTitles[i], "92%", "10%");
    }

    const textContent = document.getElementsByTagName("p");
    // console.log(textContent);
    for (let i = 0; i < textContent.length; i++) {
      functionObj.size(textContent[i], "90%", "50%");
      functionObj.flex(textContent[i], "flex-start", "flex-start");
      textContent[i].classList.add("content-txt");
    }
    textContent[1].style.marginTop = "-3%";

    const circleImg = [sections[0].children[3], sections[1].children[2]];
    for (let i = 0; i < circleImg.length; i++) {
      circleImg[i].classList.replace("img-circle", "tablet-img-circle");
    }

    functionObj.position(circleImg[0], "absolute", "45%", "68%");
    functionObj.bgiStyle(
      circleImg[0],
      "./portfolio_page/module/image/study.png",
      "center",
      "cover",
      0.8
    );
    move(circleImg[0], "45%", "46%");

    functionObj.position(circleImg[1], "absolute", "60%", "50%");
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
    functionObj.position(pageBox, "absolute", "38%", "92.5%");
    pageBox.style.color = colorArr[5];

    let leftBtn = pageBox.children[0];
    let pageTxt = pageBox.children[1];
    let rightBtn = pageBox.children[2];

    for (let i = 0; i < pageBox.children.length; i++) {
      functionObj.font(pageBox.children[i], "1rem", 600);
      pageBox.children[i].style.cursor = "pointer";
    }

    pageTxt.addEventListener("click", () => {
      root.removeChild(root.children[0]);
      tabletVerBookcover();
    });

    leftBtn.addEventListener("click", () => {
      root.removeChild(root.children[0]);
      tabletVerProject2Page();
    });

    rightBtn.addEventListener("click", () => {
      root.removeChild(root.children[0]);
      tabletVerContactPage();
    });
  }
}
