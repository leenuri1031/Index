import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, somedayText1, somedayText2} from "../basic/const.js";
import { tabletVerBookcover } from "../bookcover_page/bookcover_page_tablet.js";
import { tabletVerProject2Page } from "../project_page/project2_page_tablet.js";
import { tabletVerContactPage } from "../contact_page/contact_page_tablet.js";


export function tabletVerSomedayPage(){
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === false){

    functionObj.createElement('div', root);
    const container = root.children[0];
    functionObj.container(container, '95%' , '95%');
    container.style.border = '1px dotted gray';

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

    functionObj.boxStyle(topBox[3], '200px', '200px', colorArr[0], '100%');
    functionObj.position(topBox[3], 'relative', '-10%', '2%');

    setInterval(function(){
      topBox[3].animate([
        {left : '-10%'},
        {left : '-11%'},
        {left : '-10%'},
        {left : '-11%'},
        {left : '-10%'}
    ], 2000);
    },2000);

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

    functionObj.boxStyle(bottomBox[2], '200px', '200px', colorArr[0], '100%');
    functionObj.position(bottomBox[2], 'relative', '10%', '-2%');

    setInterval(function(){
      bottomBox[2].animate([
        {left : '10%'},
        {left : '11%'},
        {left : '10%'},
        {left : '11%'},
        {left : '10%'}
    ], 2000);
    },2000);

    const pageBox = contentBox[2];
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
      tabletVerProject2Page();
    });

    rightBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      tabletVerContactPage();
    });
  }
}