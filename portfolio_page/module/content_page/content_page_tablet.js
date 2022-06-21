import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth} from "../basic/const.js";
import { tabletVerBookcover } from "../bookcover_page/bookcover_page_tablet.js";
import { tabletVerIllust } from "../illust_page/illust_page_tablet.js";
import { tabletVerIAm } from "../Iam_page/I_am_page_tablet.js";
import { tabletVerNowPage } from "../now_I_page/now_I_am_page_tablet.js";
import { tabletVerProject1Page } from "../project_page/project1_page_tablet.js";
import { tabletVerSomedayPage } from "../someday_page/someday_page_tablet.js";
import { tabletVerContactPage } from "../contact_page/contact_page_tablet.js";
import innerHTMLContent from "../basic/content_function.js";

export function tabletVerContent(){
  
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === false){

    functionObj.createElement('div', root);
    const container = root.children[0];

    functionObj.container(container, '95%' , '95%');
    container.style.border = `1px dotted ${colorArr[5]}`;
    container.innerHTML = innerHTMLContent();

    functionObj.container(container.children[0], '90%', '90%');
    const contentBox = container.children[0].children;

    for(let i = 0; i< contentBox.length; i++){
      functionObj.size(contentBox[i], '90%', '15%');
      functionObj.flex(contentBox[i], 'space-evenly', 'flex-start', 'column');
      contentBox[i].style.borderBottom =`1px dotted ${colorArr[7]}`;
    }

    contentBox[0].style.color = colorArr[5];

    const titleTextArr = Array.from(document.getElementsByTagName('h3'));
    // console.log(titleTextArr);
    const subTextArr = Array.from(document.getElementsByTagName('p'));
    // console.log(subTextArr);

    for(let i = 0; i < titleTextArr.length; i++){
      functionObj.iAmPageTextBox(titleTextArr[i], '10%', '80%');
      titleTextArr[i].style.marginLeft = '1vh';
      titleTextArr[i].style.color = colorArr[5];
      titleTextArr[i].style.cursor ='pointer';
    }

    for(let i = 0; i < subTextArr.length; i++){
      functionObj.iAmPageTextBox(subTextArr[i], '12%', '80%');
      functionObj.font(subTextArr[i], '0.9rem', 550);
      subTextArr[i].style.marginLeft = '2vh';
      subTextArr[i].style.color = colorArr[4];
    }

    titleTextArr[0].addEventListener('click' , () => {
      root.removeChild(root.children[0]);
      tabletVerIAm();
    } );

    titleTextArr[1].addEventListener('click' , () => {
      root.removeChild(root.children[0]);
      tabletVerNowPage();
    });
  
    titleTextArr[2].addEventListener('click' , () => {
      root.removeChild(root.children[0]);
      tabletVerProject1Page();
    });

    titleTextArr[3].addEventListener('click' , () => {
      root.removeChild(root.children[0]);
      tabletVerSomedayPage();
    });


    titleTextArr[4].addEventListener('click' , () => {
      root.removeChild(root.children[0]);
      tabletVerContactPage();
    });

    const pageBox = document.getElementById('page-box');
  
    functionObj.container(pageBox, '25%', '5%', 'row');
    functionObj.position(pageBox, 'absolute', '38%', '92.5%');
    pageBox.style.color = colorArr[5];

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
      tabletVerIllust();
    });

    rightBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      tabletVerIAm();
    });
  }
}
