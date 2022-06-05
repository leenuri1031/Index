import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, nowI1, nowI2} from "../basic/const.js";
import { tabletVerNowPage } from "./now_I_am_page_tablet.js";
import { bookcoverMaker } from "../bookcover_page/bookcover_page_mobile.js";
import { iAmPageMaker } from "../Iam_page/I_am_page_mobile.js";
import { project1PageMaker } from "../project_page/project1_page_mobile.js";


export function nowIPageMaker(){
  if( mobileWidth.matches === true && tabletWidth.matches === false && desktopWidth.matches === false){

    functionObj.createElement('div', root);

    const container = root.children[0];
    functionObj.container(container, '95%' , '95%');

    for(let i = 0; i< 3; i++){
      functionObj.createElement('div', container);
    }

    let textBox = container.children[0];
    functionObj.container(textBox, '95%','50%');

    for(let i = 0; i< 4; i++){
      functionObj.createElement('div', textBox);
    }

    let titleTextPart = [textBox.children[0], textBox.children[1]];
    let commonTextPart = [textBox.children[2],textBox.children[3]];

    for(let i = 0; i<2; i++){
      functionObj.iAmPageTextBox(titleTextPart[i], '7%');
      functionObj.iAmPageTextBox(commonTextPart[i], '38%');
      functionObj.font(commonTextPart[i], '0.8rem', '500');
      commonTextPart[i].style.paddingLeft = '1vh';
      commonTextPart[i].style.lineHeight = '200%';
      commonTextPart[i].style.textAlign = 'justify';
    }

    functionObj.font(titleTextPart[0], '1.5rem', '550');
    titleTextPart[0].textContent = '2. Now I...'
    functionObj.font(titleTextPart[1], '1rem', '500');
    titleTextPart[1].style.paddingLeft = '0.5vh';
    titleTextPart[1].textContent = '나는 지금 합니다.'
    commonTextPart[0].innerHTML = nowI1;
    commonTextPart[1].innerHTML = nowI2;

    let imgBox = container.children[1];
    functionObj.size(imgBox, '95%', '40%');

    for(let i = 0; i< 2; i++){
      functionObj.createElement('div', imgBox);
      functionObj.boxStyle(imgBox.children[i], '40vw', '40vw', colorArr[0], '100%');
    }

    functionObj.position(imgBox.children[0], 'relative', '10%');
    functionObj.position(imgBox.children[1], 'relative', '50%');


    const pageBox = container.children[2];
    functionObj.size(pageBox, '25%', '5%');
    functionObj.flex(pageBox,'space-evenly', 'center');
    functionObj.position(pageBox, 'absolute', '35%' , '95%');

  
    for(let i = 0; i< 3; i++){
      functionObj.createElement('div', pageBox);
    }
  
    let leftBtn = pageBox.children[0];
    let pageTxt = pageBox.children[1];
    let rightBtn = pageBox.children[2];
  
    leftBtn.textContent = '<';
    pageTxt.textContent = 'page';
    rightBtn.textContent = '>';
  
    leftBtn.style.cursor = 'pointer';
    pageTxt.style.cursor = 'pointer';
    rightBtn.style.cursor = 'pointer';

    pageTxt.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      bookcoverMaker();
    });

    leftBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      iAmPageMaker();
    });

    rightBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      project1PageMaker();
    });
  }
  tabletVerNowPage();
}