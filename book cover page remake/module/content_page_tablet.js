import { functionObj } from "./function_obj.js";
import { root, mobileWidth, tabletWidth, desktopWidth} from "./const.js";
import { tabletVerIllust } from "./illust_page_tablet.js";
import { tabletVerIAm } from "./I_am_page_tablet.js";
import { tabletVerBookcover } from "./bookcover_page_tablet.js";
import { tabletVerNowPage } from "./now_I_am_page_tablet.js";
import { tabletVerProject1Page } from "./project1_page_tablet.js";
import { tabletVerSomedayPage } from "./someday_page_tablet.js";
import { tabletVerContactPage } from "./contact_page_tablet.js";


export function tabletVerContent(){
  
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === false){

    functionObj.createElement('div', root);
    const container = root.children[0];

    functionObj.container(container, '95%' , '95%');
    container.style.border = '1px dotted gray';

    functionObj.createElement('div', container);
    const pageBox = container.children[0];

    functionObj.size(pageBox, '25%', '5%');
    functionObj.flex(pageBox,'space-evenly', 'center');
    functionObj.position(pageBox, 'absolute', '38%' , '92.5%');
  
    for(let i = 0; i< 6; i++){
      functionObj.createBefore('div', container, pageBox);
      container.children[i].style.borderBottom = '1px dotted gray';
      container.children[i].style.paddingBottom = '4vh';
    }

    let textContentBox = container.children;
    functionObj.size(textContentBox[0], '90%', '5%');
    functionObj.size(textContentBox[1], '90%', '15%');
    functionObj.size(textContentBox[2], '90%', '10%');
    functionObj.size(textContentBox[3], '90%', '15%');
    functionObj.size(textContentBox[4], '90%', '12%');
    functionObj.size(textContentBox[5], '90%', '15%');
    
    for(let i = 1; i<textContentBox.length-1; i++){
      functionObj.flex(textContentBox[i], 'space-around', 'flex-start', 'column');
      textContentBox[i].style.paddingLeft = '2vh';
    }
  
      textContentBox[0].textContent = 'Content';
      functionObj.font(textContentBox[0], '1.5rem', 600);
      functionObj.flex(textContentBox[0], 'flex-start', 'flex-end');
  
    for(let i = 0; i< 4; i++){
      functionObj.createElement('p', textContentBox[1]);
    }
  
    let boxContents1 = textContentBox[1].children;
    for(let i = 1; i< boxContents1.length; i++){
      boxContents1[i].style.marginLeft = '2vh';
      functionObj.font(boxContents1[i], '0.8rem', 400);
    }
  
      boxContents1[0].textContent = 'I am...';
      boxContents1[0].style.cursor = 'pointer';
      functionObj.font(boxContents1[0], '1.1rem', 500);
      boxContents1[1].textContent = '나는 입니다.';
      boxContents1[2].textContent = '나는 좋아합니다.';
      boxContents1[3].textContent = '나는 했습니다.';

      boxContents1[0].addEventListener('click' , () => {
        root.removeChild(root.children[0]);
        tabletVerIAm();
      });
  
    for(let i = 0; i< 2; i++){
      functionObj.createElement('p', textContentBox[2]);
    }
  
    let boxContents2 = textContentBox[2].children;
    for(let i = 1; i< boxContents2.length; i++){
      functionObj.font(boxContents2[i], '0.8rem', 400);
      boxContents2[i].style.marginLeft = '2vh';
    }
    boxContents2[0].textContent = 'Now I am...';
    boxContents2[0].style.cursor = 'pointer';
    functionObj.font(boxContents2[0], '1.1rem', 500);
    boxContents2[1].textContent = '나는 지금 합니다.';

      boxContents2[0].addEventListener('click' , () => {
        root.removeChild(root.children[0]);
        tabletVerNowPage();
      });
    
    for(let i = 0; i< 4; i++){
      functionObj.createElement('p', textContentBox[3]);
    }
  
    let boxContents3 = textContentBox[3].children;
    for(let i = 1; i< boxContents3.length; i++){
      boxContents3[i].style.marginLeft = '2vh';
      functionObj.font(boxContents3[i], '0.8rem', 400);
    }
  
    boxContents3[0].textContent = 'This is my...';
    boxContents3[0].style.cursor = 'pointer';
    functionObj.font(boxContents3[0], '1.1rem', 500);
    boxContents3[1].textContent = '이것은 나의 프로젝트입니다.';
    boxContents3[2].textContent = '나는 이렇게 만들었습니다.';
    boxContents3[3].textContent = '프로젝트';

      boxContents3[0].addEventListener('click' , () => {
        root.removeChild(root.children[0]);
        tabletVerProject1Page()
      });
  
    for(let i = 0; i< 3; i++){
      functionObj.createElement('p', textContentBox[4]);
    }
  
    let boxContents4 = textContentBox[4].children;
    for(let i = 1; i< boxContents4.length; i++){
      boxContents4[i].style.marginLeft = '2vh';
      functionObj.font(boxContents4[i], '0.8rem', 400);
    }
  
    boxContents4[0].textContent = 'Some day I...';
    boxContents4[0].style.cursor = 'pointer';
    functionObj.font(boxContents4[0], '1.1rem', 500);
    boxContents4[1].textContent = '언젠가 나는 하고싶습니다.';
    boxContents4[2].textContent = '나의 최종 꿈은 ...입니다.';

    boxContents4[0].addEventListener('click' , () => {
      root.removeChild(root.children[0]);
      tabletVerSomedayPage();
    });
  
    for(let i = 0; i< 4; i++){
      functionObj.createElement('p', textContentBox[5]);
    }
  
    let boxContents5 = textContentBox[5].children;
    for(let i = 1; i< boxContents5.length; i++){
      boxContents5[i].style.marginLeft = '2vh';
      functionObj.font(boxContents5[i], '0.8rem', 400);
    }
    
    boxContents5[0].textContent = 'Contact me';
    boxContents5[0].style.cursor = 'pointer';
    functionObj.font(boxContents5[0], '1.1rem', 500);
    boxContents5[1].textContent = '그러니까 나는';
    boxContents5[2].textContent = '연락하고 싶다면';
    boxContents5[3].textContent = 'Resume';

    boxContents5[0].addEventListener('click' , () => {
      root.removeChild(root.children[0]);
      tabletVerContactPage();
    });

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
      tabletVerIllust();
    });

    rightBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      tabletVerIAm();
    });
  }
}
