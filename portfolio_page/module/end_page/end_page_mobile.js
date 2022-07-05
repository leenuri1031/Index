import { colorArr } from "../basic/array.js";
import { functionObj } from "../basic/function_obj.js";
import {
  root,
  mobileWidth,
  tabletWidth,
  desktopWidth,
} from "../basic/const.js";
import { bookcoverMaker } from "../bookcover_page/bookcover_page_mobile.js";
import { contactPageMaker } from "../contact_page/contact_page_mobile.js";
import { tabletVerEndPage } from "./end_page_tablet.js";
import innerHTMLEnd from "../basic/end_function.js";

export function endPageMaker() {
  if (
    mobileWidth.matches === true &&
    tabletWidth.matches === false &&
    desktopWidth.matches === false
  ) {
    functionObj.bgiStyle(
      root,
      "./portfolio_page/module/image/cover_background_mobile.png",
      "center",
      "cover",
      1
    );

    functionObj.createElement("div", root);
    const container = root.children[0];
    functionObj.container(container, "100%", "100%");

    container.innerHTML = innerHTMLEnd(
      "./portfolio_page/module/image/dream.png"
    );
    // ./module/image/dream.png
    const imgContainer = container.children[0];

    functionObj.container(imgContainer, "80%", "70%");
    functionObj.bgiStyle(
      imgContainer,
      "./portfolio_page/module/image/cover_background.png",
      "center",
      "cover",
      0.9
    );
    imgContainer.style.color = colorArr[6];

    // console.log(imgContainer.children);
    functionObj.container(imgContainer.children[0], "90%", "70%");
    imgContainer.children[0].style.opacity = 0.8;
    functionObj.container(imgContainer.children[1], "80%", "10%");
    functionObj.font(imgContainer.children[1], "2rem", 650);

    const pageBox = document.getElementById("page-box8");
    functionObj.container(pageBox, "25%", "5%", "row");
    functionObj.position(pageBox, "absolute", "35%", "95%");
    pageBox.style.color = colorArr[5];

    for (let i = 0; i < pageBox.children.length; i++) {
      functionObj.font(pageBox.children[i], "1rem", 600);
      pageBox.children[i].style.cursor = "pointer";
    }

    let leftBtn = pageBox.children[0];
    let pageTxt = pageBox.children[1];

    pageTxt.addEventListener("click", () => {
      root.removeChild(root.children[0]);
      bookcoverMaker();
    });

    leftBtn.addEventListener("click", () => {
      root.removeChild(root.children[0]);
      contactPageMaker();
    });
  }
  tabletVerEndPage();
}
