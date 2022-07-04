import { root, nowI1, nowI2 } from "../basic/const.js";
import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { pageMove, movingImg } from "./pc_function.js";
import { pcInnerHTMLNow, pcInnerHTMLProject1 } from "./innerHTML.js";
import move from "../basic/animate.js";

function remakePcNow() {
  const sections = root.children;
  // console.log(sections[3].children[0]);

  const container = sections[3].children[0].children;
  // console.log(container);s
  container[0].innerHTML = pcInnerHTMLNow(nowI1, nowI2);
  functionObj.container(container[0].children[0], "95%", "95%");
  // console.log(container[0].children[0]);

  const leftContents = container[0].children[0].children;
  functionObj.iAmPageTextBox(leftContents[0], "5%");
  leftContents[0].style.color = colorArr[5];

  // console.log(leftContents);
  functionObj.container(leftContents[1], "95%", "55%", "row");
  functionObj.container(leftContents[2], "95%", "30%", "row");

  for (let i = 1; i < leftContents.length; i++) {
    functionObj.position(leftContents[i], "relative", "0%", "0%", 5);
  }

  functionObj.container(leftContents[1].children[0], "95%", "100%");
  leftContents[1].children[0].children[0].classList.add("sub-title-txt");
  // leftContents[1].children[0].children[1].style.border = "1px solid black";

  for (let i = 1; i < 3; i++) {
    functionObj.size(leftContents[1].children[0].children[i], "90%", "40%");
    // leftContents[1].children[0].children[i].classList.add('content-txt');
    functionObj.txtStyle(
      leftContents[1].children[0].children[i],
      colorArr[4],
      "0.9rem",
      500
    );
  }

  const nowImg = leftContents[1].children[1];
  movingImg(nowImg, "180px", colorArr[0], "70%", "-2%", -1);
  functionObj.bgiStyle(
    nowImg,
    "./module/image/coding.png",
    "center",
    "cover",
    0.7
  );
  move(nowImg, "70%", "69%");

  movingImg(leftContents[2].children[0], "200px", colorArr[0], "5%");
  functionObj.bgiStyle(
    leftContents[2].children[0],
    "./module/image/layout.png",
    "center",
    "cover",
    0.9
  );
  move(leftContents[2].children[0], "5%", "4%");

  movingImg(leftContents[2].children[1], "150px", colorArr[0], "55%", "-15%");
  functionObj.bgiStyle(
    leftContents[2].children[1],
    "./module/image/code.png",
    "center",
    "cover",
    0.9
  );
  move(leftContents[2].children[1], "55%", "56%");

  container[1].innerHTML = pcInnerHTMLProject1("first", 1);
  functionObj.container(container[1].children[0], "95%", "95%");
  // console.log(container[1].children[0].children);
  const rightContents = container[1].children[0].children;
  functionObj.iAmPageTextBox(rightContents[0], "5%");
  rightContents[0].style.color = colorArr[5];

  for (let i = 1; i < rightContents.length; i++) {
    functionObj.container(rightContents[i], "95%", "40%");
  }
  functionObj.size(rightContents[1].children[0], "95%", "10%");
  rightContents[1].children[0].classList.add("sub-title-txt");
  functionObj.container(rightContents[1].children[1], "95%", "80%", "row");

  const rightTopImg = rightContents[1].children[1].children;
  // console.log(rightTopImg);

  for (let i = 0; i < rightTopImg.length; i++) {
    functionObj.boxStyle(rightTopImg[i], "40%", "90%", colorArr[0]);
    rightTopImg[i].addEventListener("mouseover", (event) => {
      functionObj.boxStyle(event.target, "60%", "100%", colorArr[0]);
    });
    rightTopImg[i].addEventListener("mouseout", (event) => {
      functionObj.boxStyle(event.target, "40%", "90%", colorArr[0]);
    });
  }

  functionObj.bgiStyle(
    rightTopImg[0],
    "./module/image/project1_img1.png",
    "center",
    "cover",
    0.9
  );
  functionObj.bgiStyle(
    rightTopImg[1],
    "./module/image/project1_img2.png",
    "center",
    "cover",
    0.9
  );

  // console.log(rightContents[2].children);
  functionObj.boxStyle(rightContents[2].children[0], "40%", "90%", colorArr[0]);
  functionObj.bgiStyle(
    rightContents[2].children[0],
    "./module/image/project1_process.png",
    "",
    "cover",
    0.9
  );

  rightContents[2].children[0].style.cursor = "pointer";
  rightContents[2].children[0].addEventListener("mouseover", (event) => {
    functionObj.boxStyle(event.target, "60%", "100%", colorArr[0]);
  });
  rightContents[2].children[0].addEventListener("mouseout", (event) => {
    functionObj.boxStyle(event.target, "40%", "90%", colorArr[0]);
  });

  pageMove(sections[3].children[1], sections[4], sections[2]);
}
export default remakePcNow;
