import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, textIAm, textIDid, textILike } from "../basic/const.js";
import { tabletVerNowPage } from "../now_I_page/now_I_am_page_tablet.js";
import { tabletVerContent } from "../content_page/content_page_tablet.js";
import { tabletVerBookcover } from "../bookcover_page/bookcover_page_tablet.js";
import innerHTMLIAm from "../basic/I_am_function.js";
import move from "../basic/animate.js";

export function tabletVerIAm(){
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === false){
    functionObj.createElement('div', root);

    const container = root.children[0];
    functionObj.container(container, '95%' , '95%');
    container.style.border = `1px dotted ${colorArr[5]}`;

    container.innerHTML = innerHTMLIAm(textIAm, textILike, textIDid);

    functionObj.container(container.children[0], '95%', '90%');
    const sections = document.getElementsByTagName('section');

    functionObj.iAmPageTextBox(container.children[0].children[0], '8%');
    container.children[0].children[0].style.color = colorArr[5];

    functionObj.iAmPageTextBox(sections[0], '20%');
    functionObj.iAmPageTextBox(sections[1], '30%');
    functionObj.iAmPageTextBox(sections[2], '30%');

    for(let i = 0; i<2; i++){
      for(let i = 0; i < sections.length; i++){
        functionObj.size(sections[i].children[0], '100%', '100%');
        functionObj.flex(sections[i].children[0], 'space-evenly', 'flex-start', 'column');
        sections[i].children[0].style.paddingLeft = '1.5vh';
        sections[i].children[0].style.zIndex = 1;
      }
    }

    functionObj.boxStyle(sections[0].children[1], '22vw', '22vw', colorArr[0], '100%');
    functionObj.position(sections[0].children[1], 'absolute', '60%', '12%');
    functionObj.bgiStyle(sections[0].children[1],'./module/image/Iam_illust1.png', 'center', 'cover', 0.8);
    move(sections[0].children[1], '45%', '46%');

    functionObj.boxStyle(sections[1].children[1], '35vw', '35vw', colorArr[0], '100%');
    functionObj.position(sections[1].children[1], 'absolute', '52%', '36%');
    functionObj.bgiStyle(sections[1].children[1],'./module/image/Iam_illust2.png', 'center', 'cover', 0.8);
    move(sections[1].children[1], '52%', '51%');

    functionObj.boxStyle(sections[2].children[1], '20vw', '20vw', colorArr[0], '100%');
    functionObj.position(sections[2].children[1], 'absolute', '60%', '75%');
    functionObj.bgiStyle(sections[2].children[1],'./module/image/Iam_illust3.png', 'center', 'cover', 0.8);
    move(sections[2].children[1], '60%', '61%');

    const titleTextArr = Array.from(document.getElementsByTagName('h4'));
    for(let i = 0; i < titleTextArr.length; i++){
      functionObj.iAmPageTextBox(titleTextArr[i], '10%', '80%');
      titleTextArr[i].style.marginLeft = '1vw';
      titleTextArr[i].style.color = colorArr[5];
    }

    const subTextArr = Array.from(document.getElementsByTagName('p'));
    for(let i = 0; i < subTextArr.length; i++){
      functionObj.iAmPageTextBox(subTextArr[i], '80%', '95%');
      functionObj.font(subTextArr[i], '0.8rem', 500);
      subTextArr[i].style.marginLeft = '2vh';
      subTextArr[i].style.color = colorArr[4];
      subTextArr[i].style.lineHeight = '180%';
    }

    const pageBox = document.getElementById('page-box2');

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
      tabletVerContent();
      // console.log('TEST');
    });
  
    rightBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      tabletVerNowPage();
    });
  }
}
