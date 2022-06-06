import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, project1Text} from "../basic/const.js";
import { tabletVerBookcover } from "../bookcover_page/bookcover_page_tablet.js";
import { tabletVerNowPage } from "../now_I_page/now_I_am_page_tablet.js";
import { tabletVerProject2Page } from "./project2_page_tablet.js";



export function tabletVerProject1Page(){
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === false){

    functionObj.createElement('div', root);

    const container = root.children[0];
    functionObj.container(container, '95%' , '95%');
    container.style.border = '1px dotted gray';

    for(let i = 0; i< 5; i++){
      functionObj.createElement('div', container);
    }

    let contentContainers = [container.children[0], container.children[3]];
    for(let i = 0; i<contentContainers.length; i++){
      functionObj.iAmPageTextBox(contentContainers[i], '10%');
      contentContainers[i].style.flexDirection = 'column'
      for(let i = 0; i<2; i++){
        functionObj.createElement('div', contentContainers[i]);
      }
    }

    for(let i = 0; i<2; i++){
      functionObj.size(contentContainers[i].children[0], '100%', '45%');
      functionObj.size(contentContainers[i].children[1], '100%', '45%');
    }

    let projectViewBox = contentContainers[1].children;
    functionObj.size(projectViewBox[0],'100%' ,'100%');
    functionObj.font(projectViewBox[0], '1rem', '500');
    projectViewBox[0].textContent = '프로젝트 확인';
    projectViewBox[0].style.paddingLeft = '2vh';



    functionObj.container(projectViewBox[1], '100%', '100%', 'row');
    for(let i = 0; i<3; i++){
      functionObj.createElement('div', projectViewBox[1]);
      functionObj.borderRound(projectViewBox[1].children[i], '20%', '66%', '30px');
      functionObj.font(projectViewBox[1].children[i], '0.8rem', '500');
      projectViewBox[1].children[i].style.cursor = 'pointer';
    }

    projectViewBox[1].children[0].textContent = 'project process';
    projectViewBox[1].children[1].textContent = 'page sample';
    projectViewBox[1].children[2].textContent = 'github';

    let titleText = contentContainers[0].children;
    functionObj.font(titleText[0], '1.5rem', '550');
    titleText[0].textContent = '3. This is my...';
    functionObj.font(titleText[1], '1rem', '500');
    titleText[1].style.paddingLeft = '1vh';
    titleText[1].style.paddingTop = '1vh';
    titleText[1].textContent = '나의 첫번째 프로젝트 입니다.'

    functionObj.size(container.children[1], '90%', '20%');
    functionObj.flex(container.children[1], 'space-around', 'center');

    for(let i = 0; i< 2; i++){
      functionObj.createElement('div', container.children[1]);
      functionObj.createElement('div', container.children[2]);
    }

    let imgBox = container.children[1].children;

    for(let i = 0; i< 2; i++){
      functionObj.boxStyle(imgBox[i], '20vw', '20vw', colorArr[0]);
      imgBox[i].addEventListener('mouseover', (event)=> {
        functionObj.boxStyle(event.target, '40vw', '40vw', colorArr[0]);
      });
      imgBox[i].addEventListener('mouseout', (event)=> {
        functionObj.boxStyle(event.target, '20vw', '20vw', colorArr[0]);
      });
    }

    functionObj.size(container.children[2], '90%','30%');
    functionObj.flex(container.children[2], 'sapce-evenly', 'flex-sart', 'column');
    // container.children[2].style.paddingLeft = '1vh';

    let textBox = container.children[2].children;

    functionObj.iAmPageTextBox(textBox[0], '10%');
    functionObj.font(textBox[0], '1rem', '500');
    textBox[0].textContent = '나는 이렇게 만들었습니다.'

    functionObj.iAmPageTextBox(textBox[1], '80%');
    functionObj.font(textBox[1], '0.8rem', '500');
    textBox[1].style.paddingLeft = '1vh';
    textBox[1].style.lineHeight = '200%';
    textBox[1].style.textAlign = 'justify';
    textBox[1].textContent = project1Text;

    const pageBox = container.children[4];
    functionObj.size(pageBox, '25%', '5%');
    functionObj.flex(pageBox,'space-evenly', 'center');
    functionObj.position(pageBox, 'absolute', '38%' , '92.5%');
  
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
      tabletVerBookcover();
    });

    leftBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      tabletVerNowPage();
    });

    rightBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      tabletVerProject2Page();
    });
  }
  
}