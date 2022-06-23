import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, nowI1, nowI2} from "../basic/const.js";
import { tabletVerBookcover } from "../bookcover_page/bookcover_page_tablet.js";
import { tabletVerIAm } from "../Iam_page/I_am_page_tablet.js";
import { tabletVerProject1Page } from "../project_page/project1_page_tablet.js";
import innerHTMLNowI from "../basic/now_I_function.js";
import move from "../basic/animate.js";

export function tabletVerNowPage(){
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === false){
    functionObj.bgiStyle(root, './module/image/main_background.png', 'center', 'cover', 1);

    functionObj.createElement('div', root);

    const container = root.children[0];
    functionObj.container(container, '95%' , '95%');
    container.style.border = `1px dotted ${colorArr[5]}`;

    container.innerHTML = innerHTMLNowI(nowI1, nowI2);
    functionObj.container(container.children[0], '95%', '90%');

    const sections = container.children[0].children;

    functionObj.container(sections[0], '100%', '55%');
    functionObj.container(sections[1], '100%', '40%');

    for(let i = 0 ; i<2; i++){
      functionObj.iAmPageTextBox(sections[0].children[i], '7%');
      sections[0].children[i].style.color = colorArr[5];
    }
    sections[0].children[1].style.paddingLeft = '1vh';

    const textContent = Array.from(document.getElementsByTagName('p'));

    for(let i = 0; i<textContent.length; i++){
      functionObj.iAmPageTextBox(textContent[i], '35%', '97%');
      functionObj.font(textContent[i], '0.8rem', '500');
      textContent[i].style.paddingLeft = '2.5vh';
      textContent[i].style.lineHeight = '200%';
      textContent[i].style.textAlign = 'justify';
      textContent[i].style.color = colorArr[4];
    }

    functionObj.position(sections[1].children[0], 'absolute', '15%','54%');
    functionObj.boxStyle(sections[1].children[0], '20vw', '20vw', colorArr[0], '100%');
    move(sections[1].children[0], '15%', '16%');
    functionObj.bgiStyle(sections[1].children[0],'./module/image/layout.png', 'center', 'cover', 0.8);

    functionObj.position(sections[1].children[1], 'absolute', '55%','65%');
    functionObj.boxStyle(sections[1].children[1], '25vw', '25vw', colorArr[0], '100%');
    move(sections[1].children[1], '55%', '54%');
    functionObj.bgiStyle(sections[1].children[1],'./module/image/coding.png', 'center', 'cover', 0.8);

    const pageBox = document.getElementById('page-box3');
    functionObj.container(pageBox, '25%', '5%', 'row');
    functionObj.position(pageBox, 'absolute', '38%' , '92.5%');
    pageBox.style.color = colorArr[5];

    for(let i = 0 ; i<pageBox.children.length; i++){
      functionObj.font(pageBox.children[i], '1rem', 600);
      }

    let leftBtn = pageBox.children[0];
    let pageTxt = pageBox.children[1];
    let rightBtn = pageBox.children[2];

    leftBtn.style.cursor = 'pointer';
    pageTxt.style.cursor = 'pointer';
    rightBtn.style.cursor = 'pointer';

    pageTxt.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      tabletVerBookcover();
    });

    leftBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      tabletVerIAm();
    });

    rightBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      tabletVerProject1Page();
    });
  }
}