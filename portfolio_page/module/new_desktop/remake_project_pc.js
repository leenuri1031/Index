import { root, project1Text } from "../basic/const.js";
import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { pageMove } from "./pc_function.js";
import { pcInnerHTMLProject1, pcInnerHTMLProject2 } from "./innerHTML.js";

function remakeProject1() {
  const sections = root.children;

  const container = sections[4].children[0].children;

  container[0].innerHTML = pcInnerHTMLProject2(
    project1Text,
    1,
    "/project _1/index.html"
  );
  container[1].innerHTML = pcInnerHTMLProject1("second", 2);

  for (let i = 0; i < container.length; i++) {
    functionObj.container(container[i].children[0], "95%", "95%");
  }

  const leftContents = container[0].children[0].children;
  for (let i = 0; i < leftContents.length; i++) {
    functionObj.container(leftContents[i], "95%", "45%");
    leftContents[i].children[0].classList.add("sub-title-txt");
  }

  functionObj.size(leftContents[0].children[1], "90%", "60%");
  // leftContents[0].children[1].classList.add('content-txt');
  functionObj.txtStyle(leftContents[0].children[1], colorArr[4], "0.9rem", 500);
  // console.log(leftContents[1].children);
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
  rightContents[0].style.display = "none";

  for (let i = 1; i < rightContents.length; i++) {
    functionObj.container(rightContents[i], "95%", "40%");
  }
  functionObj.size(rightContents[1].children[0], "95%", "10%");
  rightContents[1].children[0].classList.add("sub-title-txt");
  functionObj.container(rightContents[1].children[1], "95%", "80%", "row");

  const rightTopImg = rightContents[1].children[1].children;

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
    "./portfolio_page/module/image/project2_img1.png",
    "center",
    "cover",
    0.9
  );
  functionObj.bgiStyle(
    rightTopImg[1],
    "./portfolio_page/module/image/project2_img2.png",
    "center",
    "cover",
    0.9
  );
  functionObj.boxStyle(rightContents[2].children[0], "40%", "90%", colorArr[0]);
  functionObj.bgiStyle(
    rightContents[2].children[0],
    "./portfolio_page/module/image/project2_process.png",
    "",
    "cover",
    0.9
  );
  rightContents[2].children[0].style.cursor = "pointer";

  rightContents[2].children[0].style.cursor = "pointer";
  rightContents[2].children[0].addEventListener("mouseover", (event) => {
    functionObj.boxStyle(event.target, "60%", "100%", colorArr[0]);
  });
  rightContents[2].children[0].addEventListener("mouseout", (event) => {
    functionObj.boxStyle(event.target, "40%", "90%", colorArr[0]);
  });

  pageMove(sections[4].children[1], sections[5], sections[3]);
}

export default remakeProject1;
