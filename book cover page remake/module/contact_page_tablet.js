import { functionObj } from "./function_obj.js";
import { colorArr } from "./array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, contactText} from "./const.js";
import { tabletVerBookcover } from "./bookcover_page_tablet.js";
import { tabletVerSomedayPage } from "./someday_page_tablet.js";
import { tabletVerEndPage } from "./end_page_tablet.js";


export function tabletVerContactPage(){
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === false){
    functionObj.createElement('div', root);
    const container = root.children[0];
    functionObj.container(container, '95%' , '95%');
    container.style.border = '1px dotted gray';

    for(let i = 0; i< 4; i++){
      functionObj.createElement('div', container);
      container.children[i].style.width = '100%';
      functionObj.flex(container.children[i], 'space-evenly', 'center', 'column');
    }
    
    let contentBox = container.children;
    contentBox[0].style.height = '40%';
    contentBox[1].style.height = '30%';
    contentBox[2].style.height = '15%';

    for(let i = 0 ; i<3; i++){
      functionObj.createElement('div', contentBox[0]);
    }

    let topBox = contentBox[0].children;
    functionObj.iAmPageTextBox(topBox[0], '10%');
    functionObj.font(topBox[0], '1.5rem', '550');
    topBox[1].style.paddingLeft = '1vh';
    topBox[0].textContent = '5. Contact me';

    functionObj.iAmPageTextBox(topBox[1], '8%');
    functionObj.font(topBox[1], '1rem', '500');
    topBox[1].style.paddingLeft = '1vh';
    topBox[1].textContent = '그러니까 나는';

    functionObj.iAmPageTextBox(topBox[2], '35%');
    functionObj.font(topBox[2], '0.8rem', '500');
    topBox[2].style.paddingLeft = '1.5vh';
    topBox[2].style.lineHeight = '180%';
    topBox[2].style.textAlign = 'justify';
    topBox[2].innerHTML = contactText;

    for(let i = 0 ; i<5; i++){
      functionObj.createElement('div', contentBox[1]);
      let middleBox = contentBox[1].children;
      for(let i = 0; i < middleBox.length-1; i++){
        functionObj.iAmPageTextBox(middleBox[i], '10%');
        functionObj.font(middleBox[i], '1rem', '500');
        middleBox[i].style.paddingLeft = '1vh';
      }
    }

    contentBox[1].children[0].textContent = 'If you contact to me';
    contentBox[1].children[1].textContent = 'E-mail : hello@contact.com';
    contentBox[1].children[2].textContent = 'mobile : 010-1234-5678';
    contentBox[1].children[3].textContent = 'Instargram';
    
    functionObj.boxStyle(contentBox[1].children[4], '12vw', '12vw', colorArr[0]);
    functionObj.position(contentBox[1].children[4], 'relative', '-40%', '2%');

    for(let i = 0 ; i<2; i++){
      functionObj.createElement('div', contentBox[2]);
    }
    
    functionObj.iAmPageTextBox(contentBox[2].children[0], '40%');
    contentBox[2].children[0].textContent = 'Resume';
    contentBox[2].children[0].style.paddingLeft = '1vh';

    functionObj.borderRound(contentBox[2].children[1], '15%', '20%', '20px');
    contentBox[2].children[1].textContent = '이력서 보기';
    functionObj.font(contentBox[2].children[1], '0.8rem', '500');
    functionObj.position(contentBox[2].children[1], 'relative', '-39%', '-5%');
    contentBox[2].children[1].style.cursor = 'pointer';

    const pageBox = contentBox[3];
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
      tabletVerSomedayPage();
    });

    rightBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      tabletVerEndPage();
    });
  }
}