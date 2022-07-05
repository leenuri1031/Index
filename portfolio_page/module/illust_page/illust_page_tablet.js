import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import {
  root,
  mobileWidth,
  tabletWidth,
  desktopWidth,
} from "../basic/const.js";
import { tabletVerBookcover } from "../bookcover_page/bookcover_page_tablet.js";
import { tabletVerContent } from "../content_page/content_page_tablet.js";
import innerHTMLIllust from "../basic/illust_function.js";

export function tabletVerIllust() {
  if (
    mobileWidth.matches === false &&
    tabletWidth.matches === true &&
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

    functionObj.container(container, "95%", "95%");
    container.style.border = `1px dotted ${colorArr[5]}`;

    container.innerHTML = innerHTMLIllust();
    const illustBox = container.children[0];

    functionObj.container(illustBox, "80%", "80%");

    functionObj.size(illustBox.children[0], "80%", "75%");
    functionObj.position(illustBox.children[0], "absolute", "10%", "10%");
    illustBox.children[0].style.backgroundImage =
      "url(./portfolio_page/module/image/illust_background.png)";
    illustBox.children[0].style.backgroundSize = "cover";

    let textBox = illustBox.children[1];
    functionObj.size(textBox, "60%", "10%");
    textBox.style.color = colorArr[6];
    functionObj.position(textBox, "relative", "0%", "0%", 1);
    functionObj.font(textBox, "1.2rem", 600);

    const pageBox = document.getElementById("page-box");

    functionObj.container(pageBox, "25%", "5%", "row");
    functionObj.position(pageBox, "absolute", "38%", "92.5%");
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
      tabletVerBookcover();
    });

    leftBtn.addEventListener("click", () => {
      root.removeChild(root.children[0]);
      tabletVerBookcover();
    });

    rightBtn.addEventListener("click", () => {
      root.removeChild(root.children[0]);
      tabletVerContent();
    });
  }
}
