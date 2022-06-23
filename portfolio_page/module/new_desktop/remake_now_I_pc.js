import { root, nowI1, nowI2 } from "../basic/const.js";
import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { pageMove, movingImg} from "./pc_function.js";
import {pcInnerHTMLNow, pcInnerHTMLProject1} from "./innerHTML.js";
import move from "../basic/animate.js";


function remakePcNow(){
  const sections = root.children;
  // console.log(sections[3].children[0]);

  const container = sections[3].children[0].children;
  // console.log(container);s
  for(let i=0; i<container.length; i++){
    functionObj.bgiStyle(container[i], './module/image/pc_ver_background_image.png', '', 'cover', 0.9);
  }

  container[0].innerHTML = pcInnerHTMLNow(nowI1, nowI2);
  functionObj.container(container[0].children[0], '95%', '95%');
  // console.log(container[0].children[0]);

  const leftContents = container[0].children[0].children;
  functionObj.iAmPageTextBox(leftContents[0], '5%');
  leftContents[0].style.color = colorArr[5];

  // console.log(leftContents);
  functionObj.container(leftContents[1], '95%', '55%', 'row');
  functionObj.container(leftContents[2], '95%', '30%', 'row');

  for(let i = 1; i< leftContents.length; i++){
    functionObj.position(leftContents[i], 'relative', '0%', '0%', 5);
  }

  functionObj.container(leftContents[1].children[0], '95%','100%');
  leftContents[1].children[0].children[0].classList.add('sub-title-txt');

  for(let i=1; i<3; i++){
    functionObj.size(leftContents[1].children[0].children[i], '95%', '40%');
    leftContents[1].children[0].children[i].classList.add('content-txt');
  }

  const nowImg = leftContents[1].children[1];
  movingImg(nowImg, '180px', colorArr[0], '70%', '-2%', -1);
  functionObj.bgiStyle(nowImg,'./module/image/coding.png', 'center', 'cover', 0.7);
  move(nowImg, '70%', '69%');
  
  movingImg(leftContents[2].children[0], '200px', colorArr[0], '5%');
  functionObj.bgiStyle(leftContents[2].children[0],'./module/image/layout.png', 'center', 'cover', 0.9);
  move(leftContents[2].children[0], '5%', '4%');
  
  movingImg(leftContents[2].children[1], '150px', colorArr[0], '55%', '-15%');
  functionObj.bgiStyle(leftContents[2].children[1],'./module/image/code.png', 'center', 'cover', 0.9);
  move(leftContents[2].children[1], '55%', '56%');


  pageMove(sections[3].children[1], sections[4] ,sections[2]);

}

export default remakePcNow;