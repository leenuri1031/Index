import {
  root,
  pcProject2Text,
  somedayText1,
  somedayText2,
} from "../basic/const.js";
import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { pageMove } from "./pc_function.js";
import { pcInnerHTMLProject2 } from "./innerHTML.js";
import innerHTMLSomeday from "../basic/someday_function.js";
import move from "../basic/animate.js";

function remakeSomeday() {
  const sections = root.children;
  const container = sections[5].children[0].children;

  container[0].innerHTML = pcInnerHTMLProject2(
    pcProject2Text,
    2,
    "/project _2/main_page_new_ver/main_page.html"
  );
  container[1].innerHTML = innerHTMLSomeday(somedayText1, somedayText2);
  container[1].children[1].style.display = "none";

  for (let i = 0; i < container.length; i++) {
    functionObj.container(container[i].children[0], "95%", "95%");
  }

  const leftContents = container[0].children[0].children;
  for (let i = 0; i < leftContents.length; i++) {
    functionObj.container(leftContents[i], "95%", "45%");
    leftContents[i].children[0].classList.add("sub-title-txt");
  }

  functionObj.size(leftContents[0].children[1], "90%", "60%");
  functionObj.txtStyle(
    leftContents[0].children[1],
    colorArr[4],
    "0.88rem",
    500
  );

  for (let i = 1; i < leftContents[1].children.length; i++) {
    functionObj.borderRound(
      leftContents[1].children[i],
      "20%",
      "10%",
      "30px",
      colorArr[5]
    );
    leftContents[1].children[i].style.color = colorArr[4];
    functionObj.position(leftContents[1].children[i], "relative", "-35%");
  }

  const rightContents = container[1].children[0].children;
  for (let i = 0; i < rightContents.length; i++) {
    functionObj.container(rightContents[i], "95%", "50%");
    functionObj.position(rightContents[i], "relative");
  }
  // console.log(rightContents);

  const subTitles = document.getElementsByTagName("h4");
  // console.log(subTitles);
  for (let i = 0; i < subTitles.length; i++) {
    if (subTitles[i].dataset.sub === "1") {
      functionObj.iAmPageTextBox(subTitles[i], "10%", "90%");
      subTitles[i].style.color = colorArr[5];
      subTitles[i].style.marginLeft = "1.5vh";
    }
  }

  const contentTxt = document.getElementsByTagName("p");
  for (let i = 0; i < contentTxt.length; i++) {
    if (contentTxt[i].dataset.txt === "1") {
      functionObj.size(contentTxt[i], "85%", "50%");
      functionObj.txtStyle(contentTxt[i], colorArr[4], "0.9rem", 500);
    }
  }

  const circleImg = [
    rightContents[0].children[3],
    rightContents[1].children[2],
  ];
  circleImg[1].classList.replace("img-circle", "tablet-img-circle");

  functionObj.position(circleImg[0], "absolute", "40%", "75%");
  functionObj.bgiStyle(
    circleImg[0],
    "./module/image/study.png",
    "center",
    "cover",
    0.8
  );
  move(circleImg[0], "40%", "39%");

  functionObj.position(circleImg[1], "absolute", "55%", "52%");
  functionObj.bgiStyle(
    circleImg[1],
    "./module/image/digital_nomad.png",
    "center",
    "cover",
    0.8
  );
  move(circleImg[1], "55%", "56%");

  pageMove(sections[5].children[1], sections[6], sections[4]);
}

export default remakeSomeday;
