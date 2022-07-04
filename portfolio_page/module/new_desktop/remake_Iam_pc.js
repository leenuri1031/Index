import { root, textIAm, textIDid, textILike } from "../basic/const.js";
import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { pageMove } from "./pc_function.js";
import { pcInnerHTMLIamLeft, pcInnerHTMLIamRignt } from "./innerHTML.js";
import move from "../basic/animate.js";

function remakePcIam() {
  const sections = root.children;

  const containers = sections[2].children[0].children;
  // console.log(containers.length);

  containers[0].innerHTML = pcInnerHTMLIamLeft(textIAm, textILike);
  functionObj.container(containers[0].children[0], "95%", "95%");

  containers[1].innerHTML = pcInnerHTMLIamRignt(textIDid);
  functionObj.container(containers[1].children[0], "95%", "95%");
  // console.log(containers[0].children[0].children);

  const leftContents = containers[0].children[0].children;
  functionObj.iAmPageTextBox(leftContents[0], "5%");
  leftContents[0].style.color = colorArr[5];

  for (let i = 1; i < leftContents.length; i++) {
    functionObj.container(leftContents[i], "95%", "40%", "row");
    leftContents[i].style.position = "relative";
    functionObj.container(leftContents[i].children[0], "95%", "100%");
    leftContents[i].children[0].children[0].classList.add("sub-title-txt");
    functionObj.size(leftContents[i].children[0].children[1], "90%", "60%");
    functionObj.txtStyle(
      leftContents[i].children[0].children[1],
      colorArr[4],
      "0.9rem",
      500
    );
  }

  const iAmImg = leftContents[1].children[1];
  functionObj.boxStyle(iAmImg, "180px", "180px", colorArr[0], "50%");
  functionObj.position(iAmImg, "absolute", "40%", "10%");
  functionObj.bgiStyle(
    iAmImg,
    "./module/image/Iam_illust1.png",
    "center",
    "cover",
    0.8
  );
  move(iAmImg, "40%", "41%");

  const iLikeImg = leftContents[2].children[1];
  functionObj.boxStyle(iLikeImg, "220px", "220px", colorArr[0], "50%");
  functionObj.position(iLikeImg, "absolute", "62%", "5%");
  functionObj.bgiStyle(
    iLikeImg,
    "./module/image/Iam_illust2.png",
    "center",
    "cover",
    0.8
  );
  move(iLikeImg, "62%", "61%");

  // console.log(containers[1].children[0].children);
  const rightContents = containers[1].children[0].children;
  // console.log(rightContents[0].children);
  for (let i = 0; i < rightContents.length; i++) {
    functionObj.container(rightContents[i], "98%", "45%", "row");
    rightContents[i].style.position = "relative";
  }

  const iDid = rightContents[0].children;
  // console.log(iDid);
  functionObj.container(iDid[0], "95%", "90%");
  iDid[0].children[0].classList.add("sub-title-txt");
  functionObj.size(iDid[0].children[1], "90%", "60%");
  // iDid[0].children[1].classList.add('content-txt');
  functionObj.txtStyle(iDid[0].children[1], colorArr[4], "0.9rem", 500);

  functionObj.boxStyle(iDid[1], "180px", "180px", colorArr[0], "50%");
  functionObj.position(iDid[1], "absolute", "65%", "10%");
  functionObj.bgiStyle(
    iDid[1],
    "./module/image/Iam_illust3.png",
    "center",
    "cover",
    0.6
  );
  move(iDid[1], "65%", "66%");

  // console.log(rightContents[1].children);
  const images = rightContents[1].children;
  functionObj.boxStyle(images[0], "220px", "220px", colorArr[0], "50%");
  functionObj.position(images[0], "absolute", "10%", "0%");
  functionObj.bgiStyle(
    images[0],
    "./module/image/painting.png",
    "center",
    "cover",
    0.8
  );
  move(images[0], "10%", "9%");

  functionObj.boxStyle(images[1], "200px", "200px", colorArr[0], "50%");
  functionObj.position(images[1], "absolute", "60%", "30%");
  functionObj.bgiStyle(
    images[1],
    "./module/image/yukata.png",
    "center",
    "cover",
    0.8
  );
  move(images[1], "60%", "61%");

  pageMove(sections[2].children[1], sections[3], sections[1]);
}

export default remakePcIam;
