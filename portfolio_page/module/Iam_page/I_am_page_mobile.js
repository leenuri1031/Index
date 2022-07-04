import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import {
  root,
  mobileWidth,
  tabletWidth,
  desktopWidth,
  textIAm,
  textIDid,
  textILike,
} from "../basic/const.js";
import { tabletVerIAm } from "./I_am_page_tablet.js";
import { bookcoverMaker } from "../bookcover_page/bookcover_page_mobile.js";
import { contentPageMaker } from "../content_page/content_page_mobile.js";
import { nowIPageMaker } from "../now_I_page/now_I_am_page_mobile.js";
import innerHTMLIAm from "../basic/I_am_function.js";
import move from "../basic/animate.js";

export function iAmPageMaker() {
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
    container.innerHTML = innerHTMLIAm(textIAm, textILike, textIDid);

    // console.log(container.children[0].children);
    functionObj.container(container.children[0], "100%", "100%");
    const sections = document.getElementsByTagName("section");
    // console.log(sections);

    // let textTitle = container.children[0];
    functionObj.iAmPageTextBox(container.children[0].children[0], "5%");
    container.children[0].children[0].style.color = colorArr[5];

    functionObj.iAmPageTextBox(sections[0], "20%");
    functionObj.iAmPageTextBox(sections[1], "30%");
    functionObj.iAmPageTextBox(sections[2], "35%");

    for (let i = 0; i < 2; i++) {
      for (let i = 0; i < sections.length; i++) {
        functionObj.size(sections[i].children[0], "100%", "100%");
        functionObj.flex(
          sections[i].children[0],
          "space-evenly",
          "flex-start",
          "column"
        );
        sections[i].children[0].style.paddingLeft = "1.5vh";
        sections[i].children[0].style.zIndex = 1;
      }
    }

    functionObj.boxStyle(
      sections[0].children[1],
      "30vw",
      "30vw",
      colorArr[0],
      "100%"
    );
    functionObj.position(sections[0].children[1], "absolute", "60%", "12%");
    functionObj.bgiStyle(
      sections[0].children[1],
      "./module/image/Iam_illust1.png",
      "center",
      "cover",
      0.8
    );
    move(sections[0].children[1], "60%", "61%");
    // setInterval(function(){
    //   sections[0].children[1].animate([
    //     {left : '60%'},
    //     {left : '61%'},
    //     {left : '60%'},
    //     {left : '61%'},
    //     {left : '60%'}
    // ], 2000);
    // },2000);

    functionObj.boxStyle(
      sections[1].children[1],
      "35vw",
      "35vw",
      colorArr[0],
      "100%"
    );
    functionObj.position(sections[1].children[1], "absolute", "52%", "36%");
    functionObj.bgiStyle(
      sections[1].children[1],
      "./module/image/Iam_illust2.png",
      "center",
      "cover",
      0.8
    );
    move(sections[1].children[1], "52%", "51%");

    functionObj.boxStyle(
      sections[2].children[1],
      "28vw",
      "28vw",
      colorArr[0],
      "100%"
    );
    functionObj.position(sections[2].children[1], "absolute", "60%", "75%");
    functionObj.bgiStyle(
      sections[2].children[1],
      "./module/image/Iam_illust3.png",
      "center",
      "cover",
      0.8
    );
    move(sections[2].children[1], "60%", "61%");

    const titleTextArr = Array.from(document.getElementsByTagName("h4"));
    for (let i = 0; i < titleTextArr.length; i++) {
      functionObj.iAmPageTextBox(titleTextArr[i], "10%", "80%");
      titleTextArr[i].style.marginLeft = "1vw";
      titleTextArr[i].style.color = colorArr[5];
    }

    const subTextArr = Array.from(document.getElementsByTagName("p"));
    for (let i = 0; i < subTextArr.length; i++) {
      functionObj.iAmPageTextBox(subTextArr[i], "80%", "95%");
      functionObj.font(subTextArr[i], "0.8rem", 500);
      subTextArr[i].style.marginLeft = "2vh";
      subTextArr[i].style.color = colorArr[4];
      subTextArr[i].style.lineHeight = "180%";
    }

    const pageBox = document.getElementById("page-box2");

    functionObj.container(pageBox, "25%", "5%", "row");
    functionObj.position(pageBox, "absolute", "35%", "95%");
    pageBox.style.color = colorArr[5];
    let leftBtn = pageBox.children[0];
    let pageTxt = pageBox.children[1];
    let rightBtn = pageBox.children[2];

    for (let i = 0; i < pageBox.children.length; i++) {
      functionObj.font(pageBox.children[i], "1rem", 600);
    }

    leftBtn.style.cursor = "pointer";
    pageTxt.style.cursor = "pointer";
    rightBtn.style.cursor = "pointer";

    pageTxt.addEventListener("click", () => {
      root.removeChild(root.children[0]);
      bookcoverMaker();
    });

    leftBtn.addEventListener("click", () => {
      root.removeChild(root.children[0]);
      contentPageMaker();
    });

    rightBtn.addEventListener("click", () => {
      root.removeChild(root.children[0]);
      nowIPageMaker();
    });
  }
  tabletVerIAm();
}
