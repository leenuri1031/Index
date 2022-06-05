import { functionObj } from "./function_obj.js";
import { colorArr } from "./array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, project1Text} from "./const.js";
import { bookcoverMaker } from "./bookcover_page_mobile.js";
import { nowIPageMaker } from "./now_I_am_page_mobile.js";
import { tabletVerProject1Page } from "./project1_page_tablet.js";
import { project2PageMaker } from "./project2_page_mobile.js";



export function project1PageMaker(){
  if( mobileWidth.matches === true && tabletWidth.matches === false && desktopWidth.matches === false){

    functionObj.createElement('div', root);

    const container = root.children[0];
    functionObj.container(container, '95%' , '95%');

    for(let i = 0; i< 5; i++){
      functionObj.createElement('div', container);
    }

    let contentContainers = [container.children[0], container.children[3]];
    for(let i = 0; i<contentContainers.length; i++){
      functionObj.iAmPageTextBox(contentContainers[i], '12%');
      contentContainers[i].style.flexDirection = 'column'
      for(let i = 0; i<2; i++){
        functionObj.createElement('div', contentContainers[i]);
      }
    }

    for(let i = 0; i<2; i++){
      functionObj.size(contentContainers[i].children[0], '95%', '45%');
      functionObj.size(contentContainers[i].children[1], '95%', '45%');
    }

    let projectViewBox = contentContainers[1].children;
    functionObj.nowIPageTextBox(projectViewBox[0], '100%');
    functionObj.font(projectViewBox[0], '1rem', '500');
    projectViewBox[0].textContent = '프로젝트 확인';
    projectViewBox[0].style.paddingLeft = '2vh';


    functionObj.container(projectViewBox[1], '100%', '100%', 'row');
    for(let i = 0; i<3; i++){
      functionObj.createElement('div', projectViewBox[1]);
      functionObj.borderRound(projectViewBox[1].children[i], '25%', '60%', '30px');
      functionObj.font(projectViewBox[1].children[i], '0.7rem', '500');
      projectViewBox[1].children[i].style.cursor = 'pointer';
    }

    projectViewBox[1].children[0].textContent = '작업과정 상세';
    projectViewBox[1].children[1].textContent = '페이지 샘플';
    projectViewBox[1].children[2].textContent = 'github';

    let titleText = contentContainers[0].children;
    functionObj.font(titleText[0], '1.5rem', '550');
    titleText[0].textContent = '3. This is my...';
    functionObj.font(titleText[1], '1rem', '500');
    titleText[1].style.paddingLeft = '1vh';
    titleText[1].textContent = '나의 첫번째 프로젝트 입니다.';

    functionObj.size(container.children[1], '90%', '20%');
    functionObj.flex(container.children[1], 'space-around', 'center');

    for(let i = 0; i< 2; i++){
      functionObj.createElement('div', container.children[1]);
      functionObj.createElement('div', container.children[2]);
    }

    let imgBox = container.children[1].children;

    for(let i = 0; i< 2; i++){
      functionObj.boxStyle(imgBox[i], '35vw', '35vw', colorArr[0]);
      imgBox[i].addEventListener('mouseover', (event)=> {
        functionObj.boxStyle(event.target, '50vw', '50vw', colorArr[0]);
      });
      imgBox[i].addEventListener('mouseout', (event)=> {
        functionObj.boxStyle(event.target, '35vw', '35vw', colorArr[0]);
      });
    }


    functionObj.size(container.children[2], '90%','45%');
    functionObj.flex(container.children[2], 'sapce-evenly', 'flex-sart', 'column');
    container.children[2].style.paddingLeft = '1vh';

    let textBox = container.children[2].children;

    functionObj.iAmPageTextBox(textBox[0], '10%');
    functionObj.font(textBox[0], '1rem', '500');
    textBox[0].textContent = '나는 이렇게 만들었습니다.'

    functionObj.iAmPageTextBox(textBox[1], '80%');
    functionObj.font(textBox[1], '0.8rem', '500');
    textBox[1].style.paddingLeft = '1vh';
    textBox[1].style.lineHeight = '180%';
    textBox[1].style.textAlign = 'justify';
    textBox[1].textContent = project1Text;

    const pageBox = container.children[4];
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
      nowIPageMaker();
    });

    rightBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      project2PageMaker();
    });
    
  }
  tabletVerProject1Page();
}