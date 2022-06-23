import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, project2Text} from "../basic/const.js";
import { bookcoverMaker } from "../bookcover_page/bookcover_page_mobile.js";
import { project1PageMaker } from "./project1_page_mobile.js";
import { tabletVerProject2Page } from "./project2_page_tablet.js";
import { somedayPageMaker } from "../someday_page/someday_page_mobile.js";
import innerHTMLProject2 from "../basic/project2_function.js";

export function project2PageMaker(){
  if( mobileWidth.matches === true && tabletWidth.matches === false && desktopWidth.matches === false){
    functionObj.bgiStyle(root, './module/image/main_background.png', 'center', 'cover', 1);

    functionObj.createElement('div', root);
    const container = root.children[0];
    functionObj.container(container, '95%' , '95%');

    container.innerHTML = innerHTMLProject2(project2Text);

    functionObj.container(container.children[0], '95%', '90%');

    const sections = container.children[0].children;
    // console.log(sections);
    functionObj.container(sections[0], '100%','35%');
    functionObj.container(sections[1], '100%','40%');
    functionObj.container(sections[2], '100%','10%');

    const subTitles = document.getElementsByTagName('h4');
    for(let i=0; i< subTitles.length; i++){
      subTitles[i].classList.add('sub-title-txt');
      subTitles[i].style.paddingLeft = '1vh';
    }

    // console.log(sections[0].children[1]);
    functionObj.container(sections[0].children[1], '95%', '80%', 'row');

    let imgBox = sections[0].children[1].children;

    for(let i = 0; i< 2; i++){
      functionObj.boxStyle(imgBox[i], '35vw', '35vw', colorArr[0]);
      imgBox[i].addEventListener('mouseover', (event)=> {
        functionObj.boxStyle(event.target, '50vw', '50vw', colorArr[0]);
      });
      imgBox[i].addEventListener('mouseout', (event)=> {
        functionObj.boxStyle(event.target, '35vw', '35vw', colorArr[0]);
      });
    }
    
    functionObj.bgiStyle(imgBox[0],'./module/image/project2_img1.png', 'center', 'cover', 0.9);
    functionObj.bgiStyle(imgBox[1],'./module/image/project2_img2.png', 'center', 'cover', 0.9);

    const textContent = document.getElementById('project2-text');

    functionObj.iAmPageTextBox(textContent, '80%', '95%');
    functionObj.font(textContent, '0.8rem', '500');
    textContent.style.paddingLeft = '2vh';
    textContent.style.lineHeight = '200%';
    textContent.style.textAlign = 'justify';
    textContent.style.color = colorArr[4];

    functionObj.container(sections[2].children[1], '100%', '80%', 'row');

    const pageBox = document.getElementById('page-box5');

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
      project1PageMaker();
    });

    rightBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      somedayPageMaker();
    });
  }
  tabletVerProject2Page();
}