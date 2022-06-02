import { functionObj } from "./function_obj.js";
import { colorArr } from "./array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, somedayText1, somedayText2} from "./const.js";
import { bookcoverMaker } from "./bookcover_page_mobile.js";
import { project2PageMaker } from "./project2_page_mobile.js";
import { tabletVerSomedayPage } from "./someday_page_tablet.js";

export function somedayPageMaker(){
  if( mobileWidth.matches === true && tabletWidth.matches === false && desktopWidth.matches === false){

    functionObj.createElement('div', root);
    const container = root.children[0];
    functionObj.container(container, '95%' , '95%');

    for(let i = 0; i< 3; i++){
      functionObj.createElement('div', container);
      container.children[i].style.width = '100%';
      functionObj.flex(container.children[i], 'space-evenly', 'center', 'column');
    }

    let contentBox = container.children;
    contentBox[0].style.height = '50%';
    contentBox[1].style.height = '40%';

    for(let i = 0; i<4; i++){
      functionObj.createElement('div', contentBox[0]);
    }

    let topBox = contentBox[0].children;

    functionObj.iAmPageTextBox(topBox[0], '10%');
    topBox[0].style.paddingLeft = '1vh';
    functionObj.font(topBox[0], '1.5rem', '550');
    topBox[0].textContent = '4. Some day I...';

    functionObj.iAmPageTextBox(topBox[1], '8%');
    functionObj.font(topBox[1], '1rem', '500');
    topBox[1].style.paddingLeft = '1vh';
    topBox[1].textContent = '언젠가 나는 하고 싶습니다.';

    functionObj.iAmPageTextBox(topBox[2], '35%');
    functionObj.font(topBox[2], '0.8rem', '500');
    topBox[2].style.paddingLeft = '1.5vh';
    topBox[2].style.lineHeight = '180%';
    topBox[2].style.textAlign = 'justify';
    topBox[2].innerHTML = somedayText1;

    functionObj.boxStyle(topBox[3], '45%', '35%', colorArr[0]);
    functionObj.position(topBox[3], 'relative', '-10%', '2%');

    for(let i = 0; i<3; i++){
      functionObj.createElement('div', contentBox[1]);
    }
    let bottomBox = contentBox[1].children;

    functionObj.iAmPageTextBox(bottomBox[0], '8%');
    functionObj.font(bottomBox[0], '1rem', '500');
    bottomBox[0].style.paddingLeft = '1vh';
    bottomBox[0].textContent = '나의 최종 꿈은 ...';

    functionObj.iAmPageTextBox(bottomBox[1], '35%');
    functionObj.font(bottomBox[1], '0.8rem', '500');
    bottomBox[1].style.paddingLeft = '1.5vh';
    bottomBox[1].style.lineHeight = '180%';
    bottomBox[1].style.textAlign = 'justify';
    bottomBox[1].innerHTML = somedayText2;

    functionObj.boxStyle(bottomBox[2], '45%', '45%', colorArr[0]);
    functionObj.position(bottomBox[2], 'relative', '10%', '2%');


    const pageBox = contentBox[2];
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
      project2PageMaker();
    });
  }
  tabletVerSomedayPage();
}