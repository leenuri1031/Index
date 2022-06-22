import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth } from "../basic/const.js";
import { tabletVerContent } from "../content_page/content_page_tablet.js";
import { bookcoverMaker } from "../bookcover_page/bookcover_page_mobile.js";
import {illustPageMaker} from "../illust_page/illust_page_mobile.js";
import { iAmPageMaker } from "../Iam_page/I_am_page_mobile.js";
import { nowIPageMaker } from "../now_I_page/now_I_am_page_mobile.js";
import { project1PageMaker } from "../project_page/project1_page_mobile.js";
import { somedayPageMaker } from "../someday_page/someday_page_mobile.js";
import { contactPageMaker } from "../contact_page/contact_page_mobile.js";
import innerHTMLContent from "../basic/content_function.js";

export function contentPageMaker(){
  
  if( mobileWidth.matches === true && tabletWidth.matches === false && desktopWidth.matches === false){

    functionObj.createElement('div', root);
    
    const container = root.children[0];
    functionObj.container(container, '95%' , '95%');
    container.innerHTML = innerHTMLContent();
    // console.log(container.children[0]);
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
      titleTextArr[i].style.marginLeft = '1vw';
      titleTextArr[i].style.color = colorArr[5];
      titleTextArr[i].style.cursor ='pointer';
    }

    for(let i = 0; i < subTextArr.length; i++){
      functionObj.iAmPageTextBox(subTextArr[i], '12%', '80%');
      functionObj.font(subTextArr[i], '0.8rem', 560);
      subTextArr[i].style.marginLeft = '2vh';
      subTextArr[i].style.color = colorArr[4];
    }

      titleTextArr[0].addEventListener('click' , () => {
        root.removeChild(root.children[0]);
        iAmPageMaker();
      } );
  
      titleTextArr[1].addEventListener('click' , () => {
        root.removeChild(root.children[0]);
        nowIPageMaker();
      });
    
      titleTextArr[2].addEventListener('click' , () => {
        root.removeChild(root.children[0]);
        project1PageMaker();
      });
  
      titleTextArr[3].addEventListener('click' , () => {
        root.removeChild(root.children[0]);
        somedayPageMaker();
      });
  

      titleTextArr[4].addEventListener('click' , () => {
        root.removeChild(root.children[0]);
        contactPageMaker();
      });

    const pageBox = document.getElementById('page-box1');
  
    functionObj.container(pageBox, '25%', '5%', 'row');
    functionObj.position(pageBox, 'absolute', '35%' , '95%');
    pageBox.style.color = colorArr[5];

    for(let i = 0 ; i<pageBox.children.length; i++){
      functionObj.font(pageBox.children[i], '1rem', 600);
      pageBox.children[i].style.cursor = 'pointer';
      }

    let leftBtn = pageBox.children[0];
    let pageTxt = pageBox.children[1];
    let rightBtn = pageBox.children[2];
  
    pageTxt.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      bookcoverMaker();
    });
    
    leftBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      illustPageMaker();
    });

    rightBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      iAmPageMaker();
    });
  }
  tabletVerContent();
}
