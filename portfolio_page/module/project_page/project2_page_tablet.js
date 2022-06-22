import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, project2Text} from "../basic/const.js";
import { tabletVerBookcover } from "../bookcover_page/bookcover_page_tablet.js";
import { tabletVerProject1Page } from "./project1_page_tablet.js";
import { tabletVerSomedayPage } from "../someday_page/someday_page_tablet.js";
import innerHTMLProject2 from "../basic/project2_function.js";

export function tabletVerProject2Page(){
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === false){

    functionObj.createElement('div', root);
    const container = root.children[0];
    functionObj.container(container, '95%' , '95%');
    container.style.border = `1px dotted ${colorArr[5]}`;
    container.innerHTML = innerHTMLProject2(project2Text);

    functionObj.container(container.children[0], '95%', '90%');

    const sections = container.children[0].children;
    // console.log(sections);
    functionObj.container(sections[0], '100%','40%');
    functionObj.container(sections[1], '100%','35%');
    functionObj.container(sections[2], '100%','15%');

    const subTitles = document.getElementsByTagName('h4');
    for(let i=0; i< subTitles.length; i++){
      subTitles[i].classList.add('sub-title-txt');
      subTitles[i].style.paddingLeft = '1vh';
    }

    functionObj.container(sections[0].children[1], '95%', '80%', 'row');

    let imgBox = sections[0].children[1].children;
    
    for(let i = 0; i< 2; i++){
      functionObj.boxStyle(imgBox[i], '20vw', '20vw', colorArr[0]);
      imgBox[i].addEventListener('mouseover', (event)=> {
        functionObj.boxStyle(event.target, '35vw', '35vw', colorArr[0]);
      });
      imgBox[i].addEventListener('mouseout', (event)=> {
        functionObj.boxStyle(event.target, '20vw', '20vw', colorArr[0]);
      });
    }
    
        functionObj.bgiStyle(imgBox[0],'./module/image/project2_img1.png', 'center', 'cover', 0.9);
        functionObj.bgiStyle(imgBox[1],'./module/image/project2_img2.png', 'center', 'cover', 0.9);

        const textContent = document.getElementById('project2-text');

        functionObj.iAmPageTextBox(textContent, '35%', '95%');
        functionObj.font(textContent, '0.8rem', '500');
        textContent.style.paddingLeft = '2vh';
        textContent.style.lineHeight = '200%';
        textContent.style.textAlign = 'justify';
        textContent.style.color = colorArr[4];

    functionObj.container(sections[2].children[1], '100%', '80%', 'row');

    const projectLink = Array.from(sections[2].children[1].children);
    // console.log(projectLink[0]);
    for(let i=0; i<projectLink.length; i++){
      projectLink[i].classList.replace('round-border', 'tablet-round-border');
    }
    
    const pageBox = document.getElementById('page-box5');

    functionObj.container(pageBox, '25%', '5%', 'row');
    functionObj.position(pageBox, 'absolute', '38%' , '92.5%');
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
      tabletVerBookcover();
    });

    leftBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      tabletVerProject1Page();
    });

    rightBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      tabletVerSomedayPage();
    });
  }
}