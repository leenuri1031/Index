import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, project2Text} from "../basic/const.js";
import { bookcoverMaker } from "../bookcover_page/bookcover_page_mobile.js";
import { project1PageMaker } from "./project1_page_mobile.js";
import { tabletVerProject2Page } from "./project2_page_tablet.js";
import { somedayPageMaker } from "../someday_page/someday_page_mobile.js";


export function project2PageMaker(){
  if( mobileWidth.matches === true && tabletWidth.matches === false && desktopWidth.matches === false){

    functionObj.createElement('div', root);
    const container = root.children[0];
    functionObj.container(container, '95%' , '95%');

    for(let i = 0; i< 4; i++){
      functionObj.createElement('div', container);
    }

    let contentBox = container.children;
    for(let i = 0; i<2; i++){
      for(let i = 0; i<contentBox.length-1; i++){
        functionObj.createElement('div', contentBox[i]);
        functionObj.flex(contentBox[i], 'space-evenly', 'center', 'column');
      }
    }

    functionObj.size(contentBox[0], '95%', '30%');
    let contentBoxTop = contentBox[0].children;

    functionObj.iAmPageTextBox(contentBoxTop[0], '20%');
    contentBoxTop[0].textContent ='나의 두번째 프로젝트 입니다.';
    functionObj.container(contentBoxTop[1], '95%', '70%', 'row');

    for(let i = 0; i< 2; i++){
      functionObj.createElement('div', contentBoxTop[1]);
      let imgBox = contentBoxTop[1].children;
      functionObj.boxStyle(imgBox[i], '35vw', '35vw', colorArr[0]);
      imgBox[i].addEventListener('mouseover', (event)=> {
        functionObj.boxStyle(event.target, '50vw', '50vw', colorArr[0]);
      });
      imgBox[i].addEventListener('mouseout', (event)=> {
        functionObj.boxStyle(event.target, '35vw', '35vw', colorArr[0]);
      });
    }

    functionObj.size(contentBox[1], '95%', '40%');
    let contentBoxMiddle = contentBox[1].children;
    // console.log(contentBoxMiddle);

    functionObj.iAmPageTextBox(contentBoxMiddle[0], '15%');
    functionObj.font(contentBoxMiddle[0], 'rem', '500');
    contentBoxMiddle[0].textContent = '나는 이렇게 만들었습니다.'

    functionObj.iAmPageTextBox(contentBoxMiddle[1], '80%');
    functionObj.font(contentBoxMiddle[1], '0.8rem', '500');
    contentBoxMiddle[1].style.paddingLeft = '1vh';
    contentBoxMiddle[1].style.lineHeight = '200%';
    contentBoxMiddle[1].style.textAlign = 'justify';
    contentBoxMiddle[1].innerHTML = project2Text;

    functionObj.size(contentBox[2], '95%', '12%');
    let contentBoxBottom = contentBox[2].children;

    functionObj.nowIPageTextBox(contentBoxBottom[0], '55%');
    functionObj.font(contentBoxBottom[0], '1rem', '500');
    contentBoxBottom[0].textContent = '프로젝트 확인';
    contentBoxBottom[0].style.paddingLeft = '2vh';

    functionObj.container(contentBoxBottom[1], '100%', '45%', 'row');

    contentBoxBottom[1].innerHTML = `
    <div>프로젝트</div>
    <div>page sample</div>
    <div><a href = "https://github.com/leenuri1031/project-1.git" target="_blank">github</a></div>
    `;

    for(let i = 0; i<3; i++){
      functionObj.borderRound(contentBoxBottom[1].children[i], '25%', '60%', '30px');
      functionObj.font(contentBoxBottom[1].children[i], '0.7rem', '500');
      contentBoxBottom[1].children[i].style.cursor = 'pointer';
    }

    const pageBox = contentBox[3];
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
      project1PageMaker();
    });

    rightBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      somedayPageMaker();
    });
  }
  tabletVerProject2Page();
}