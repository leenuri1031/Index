import { root, textIllust} from "../basic/const.js";
import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { pageMove} from "./pc_function.js";
import { pcInnerHTMLIllust} from "./innerHTML.js";
import innerHTMLContent from "../basic/content_function.js";

function remakePcContent() {
  const sections = root.children;
  // console.log(sections[1].children[0]);

  const contentBoxes= sections[1].children[0].children;
  // console.log(contentBoxes);
  contentBoxes[0].innerHTML = pcInnerHTMLIllust('./module/image/mini_background.png', textIllust);
  // console.log(contentBoxes[0].children);
  functionObj.container(contentBoxes[0].children[0], '60%', '80%' );

  const leftContent = contentBoxes[0].children[0].children;
  // console.log(leftContent);
  functionObj.container(leftContent[0], '90%', '100%');
  functionObj.txtStyle(leftContent[1], colorArr[6], '1.1rem', 600);
  functionObj.position(leftContent[1], 'relative', '-5%', '-50%');

  // console.log(contentBoxes[1]);
  functionObj.bgiStyle(contentBoxes[1], './module/image/pc_ver_background_image.png', '', 'cover', 0.9);
  contentBoxes[1].innerHTML = innerHTMLContent();

  // console.log(contentBoxes[1].children[0]);
  functionObj.container(contentBoxes[1].children[0], '90%', '90%');

  const contentBox = contentBoxes[1].children[0].children;
  // console.log(contentBox);

  for(let i = 0; i< contentBox.length; i++){
    functionObj.size(contentBox[i], '90%', '15%');
    functionObj.flex(contentBox[i], 'space-evenly', 'flex-start', 'column');
    contentBox[i].style.borderBottom =`1px dotted ${colorArr[7]}`;
  }

  contentBox[0].style.color = colorArr[5];
  const titleTextArr = Array.from(document.getElementsByTagName('h3'));
  const subTextArr = Array.from(document.getElementsByTagName('p'));

  for(let i = 0; i < titleTextArr.length; i++){
    functionObj.iAmPageTextBox(titleTextArr[i], '10%', '80%');
    titleTextArr[i].style.marginLeft = '1vh';
    titleTextArr[i].style.color = colorArr[5];
    titleTextArr[i].style.cursor ='pointer';
  }

  for(let i = 0; i < subTextArr.length; i++){
    functionObj.iAmPageTextBox(subTextArr[i], '12%', '80%');
    functionObj.font(subTextArr[i], '0.9rem', 550);
    subTextArr[i].style.marginLeft = '2vh';
    subTextArr[i].style.color = colorArr[4];
  }

  contentBox[1].addEventListener('click', ()=> {
    window.scrollTo({top : sections[2].offsetTop , behavior : "smooth"});
  });

  contentBox[2].addEventListener('click', ()=> {
    window.scrollTo({top : sections[3].offsetTop , behavior : "smooth"});
  });

  contentBox[3].addEventListener('click', ()=> {
    window.scrollTo({top : sections[3].offsetTop , behavior : "smooth"});
  });

  contentBox[4].addEventListener('click', ()=> {
    window.scrollTo({top : sections[5].offsetTop , behavior : "smooth"});
  });

  contentBox[5].addEventListener('click', ()=> {
    window.scrollTo({top : sections[6].offsetTop , behavior : "smooth"});
  });

  const pageBox = document.getElementById('page-box1');
  // console.log(pageBox);
  pageBox.style.display = 'none';

  pageMove(sections[1].children[1], sections[2] ,sections[0]);

}

export default remakePcContent;