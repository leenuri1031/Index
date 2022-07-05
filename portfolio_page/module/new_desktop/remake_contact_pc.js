import { root, contactText } from "../basic/const.js";
import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { pageMove } from "./pc_function.js";
import innerHTMLContact from "../basic/contact_function.js";
import { pcInnerHTMLEnd } from "./innerHTML.js";
import remakeEnd from "./remake_end_pc.js";

function remakeContact() {
  const sections = root.children;
  const container = sections[6].children[0].children;

  container[0].innerHTML = innerHTMLContact(
    contactText,
    "./portfolio_page/module/image/mail.png",
    "./portfolio_page/module/image/mobile.png"
  );
  container[1].innerHTML = pcInnerHTMLEnd(
    "./portfolio_page/module/image/dream.png"
  );
  remakeEnd();

  // console.log(container);
  for (let i = 0; i < container.length; i++) {
    functionObj.container(container[i].children[0], "95%", "95%");
  }
  container[0].children[1].style.display = "none";

  const leftContents = container[0].children[0].children;
  // console.log(leftContents);
  functionObj.container(leftContents[0], "100%", "45%");
  functionObj.container(leftContents[1], "100%", "35%");
  functionObj.container(leftContents[2], "100%", "12%");
  // leftContents[0].style.border = "solid 1px black";
  // leftContents[1].style.border = "solid 1px black";
  // leftContents[2].style.border = "solid 1px black";

  const subTitles = document.getElementsByTagName("h4");
  for (let i = 0; i < subTitles.length; i++) {
    if (subTitles[i].dataset.sub === "2") {
      functionObj.iAmPageTextBox(subTitles[i], "15%", "90%");
      subTitles[i].style.color = colorArr[5];
      subTitles[i].style.marginLeft = "1.5vh";
    }
  }

  functionObj.size(leftContents[0].children[2], "85%", "60%");
  functionObj.txtStyle(leftContents[0].children[2], colorArr[4], "0.9rem", 500);
  // console.log(leftContents[1].children.length);
  for (let i = 1; i < leftContents[1].children.length; i++) {
    functionObj.container(leftContents[1].children[i], "90%", "10%", "row");
    functionObj.position(leftContents[1].children[i], "relative");
  }

  const textParts = document.getElementsByClassName("sub-txt");
  // console.log(textParts);
  for (let i = 0; i < textParts.length; i++) {
    functionObj.size(textParts[i], "95%", "100%");
    functionObj.txtStyle(textParts[i], colorArr[5], "0.9rem", 550);
  }

  const imgArr = document.getElementsByTagName("img");
  for (let i = 0; i < imgArr.length; i++) {
    if (imgArr[i].dataset.img === "1") {
      functionObj.size(imgArr[i], "30%", "70%");
      functionObj.position(imgArr[i], "absolute", "12%", "35%");
      imgArr[i].style.opacity = 0.9;
    }
  }
  // console.log(leftContents[1].children[3].children[1]);
  functionObj.size(leftContents[1].children[3].children[1], "95px", "95px");
  functionObj.position(
    leftContents[1].children[3].children[1],
    "absolute",
    "16%",
    "80%"
  );
  functionObj.bgiStyle(
    leftContents[1].children[3].children[1],
    "./portfolio_page/module/image/contact_img.png",
    "center",
    "contain",
    0.9
  );

  leftContents[2].style.position = "relative";
  // console.log(leftContents[2].children[0]);
  functionObj.position(leftContents[2].children[0], "relative", "0%", "30%");
  functionObj.borderRound(
    leftContents[2].children[1],
    "15%",
    "30%",
    "30px",
    colorArr[5]
  );
  leftContents[2].children[1].style.color = colorArr[4];
  leftContents[2].children[1].style.cursor = "pointer";
  functionObj.position(leftContents[2].children[1], "relative", "-35%", "45%");

  functionObj.boxStyle(
    leftContents[2].children[2],
    "150px",
    "200px",
    colorArr[0],
    "40%"
  );
  functionObj.position(leftContents[2].children[2], "absolute", "60%", "-150%");
  functionObj.bgiStyle(
    leftContents[2].children[2],
    "./portfolio_page/module/image/me.png",
    "center",
    "cover",
    0.8
  );

  pageMove(sections[6].children[1], sections[0], sections[5]);
}

export default remakeContact;
