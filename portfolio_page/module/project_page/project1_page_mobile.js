import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, project1Text} from "../basic/const.js";
import { bookcoverMaker } from "../bookcover_page/bookcover_page_mobile.js"
import { nowIPageMaker } from "../now_I_page/now_I_am_page_mobile.js";
import { tabletVerProject1Page } from "./project1_page_tablet.js";
import { project2PageMaker } from "./project2_page_mobile.js";
import innerHTMLProject1 from "../basic/project1_function.js"

export function project1PageMaker(){
  if( mobileWidth.matches === true && tabletWidth.matches === false && desktopWidth.matches === false){

    functionObj.createElement('div', root);

    const container = root.children[0];
    functionObj.container(container, '95%' , '95%');
    container.innerHTML = innerHTMLProject1(project1Text);

    functionObj.container(container.children[0], '95%', '90%');

    const sections = container.children[0].children;
    // console.log(sections);

    functionObj.container(sections[0], '100%', '40%');
    functionObj.container(sections[1], '100%', '45%');
    functionObj.container(sections[2], '100%', '10%');

    const subTitles = document.getElementsByTagName('h4');
    // console.log(subTitles);
    for(let i=0; i< subTitles.length; i++){
      subTitles[i].style.paddingLeft = '1vh';
    }

    // console.log(sections[0].children[2]);
    for(let i = 0; i<2; i++){
      functionObj.container(sections[0].children[2], '95%', '65%', 'row');
    }

    let imgBox = sections[0].children[2].children;
    // console.log(imgBox);

    functionObj.bgiStyle(imgBox[0],'./module/image/project1_img1.png', 'center', 'cover', 0.9);
    functionObj.bgiStyle(imgBox[1],'./module/image/project1_img2.png', 'center', 'cover', 0.9);

    for(let i = 0; i< 2; i++){
      functionObj.boxStyle(imgBox[i], '35vw', '35vw', colorArr[0]);
      imgBox[i].addEventListener('mouseover', (event)=> {
        functionObj.boxStyle(event.target, '50vw', '50vw', colorArr[0]);
      });
      imgBox[i].addEventListener('mouseout', (event)=> {
        functionObj.boxStyle(event.target, '35vw', '35vw', colorArr[0]);
      });
    }

    const textContent = document.getElementById('project-text1');

    functionObj.iAmPageTextBox(textContent, '35%', '97%');
    functionObj.font(textContent, '0.8rem', '500');
    textContent.style.paddingLeft = '2vh';
    textContent.style.lineHeight = '200%';
    textContent.style.textAlign = 'justify';
    textContent.style.color = colorArr[4];

    console.log(sections[2].children[1]);
    functionObj.container(sections[2].children[1], '100%', '80%', 'row');

    const pageBox = document.getElementById('page-box4');
  
    functionObj.container(pageBox, '25%', '5%', 'row');
    functionObj.position(pageBox, 'absolute', '35%' , '95%');
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