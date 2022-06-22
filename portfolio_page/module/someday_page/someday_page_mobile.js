import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, somedayText1, somedayText2} from "../basic/const.js";
import { bookcoverMaker } from "../bookcover_page/bookcover_page_mobile.js";
import { project2PageMaker } from "../project_page/project2_page_mobile.js";
import { tabletVerSomedayPage } from "./someday_page_tablet.js";
import { contactPageMaker } from "../contact_page/contact_page_mobile.js";
import innerHTMLSomeday from "../basic/someday_function.js";
import move from "../basic/animate.js";

export function somedayPageMaker(){
  if( mobileWidth.matches === true && tabletWidth.matches === false && desktopWidth.matches === false){

    functionObj.createElement('div', root);
    const container = root.children[0];
    functionObj.container(container, '95%' , '95%');

    container.innerHTML = innerHTMLSomeday(somedayText1, somedayText2);

    functionObj.container(container.children[0], '95%', '90%');

    const sections = container.children[0].children;
    functionObj.container(sections[0], '100%','50%');
    functionObj.container(sections[1], '100%','40%');

    const subTitles = document.getElementsByTagName('h4');
    for(let i=0; i< subTitles.length; i++){
      subTitles[i].classList.add('sub-title-txt');
      subTitles[i].style.paddingLeft = '1vh';
    }

    const textContent = document.getElementsByTagName('p');
    // console.log(textContent);
    for(let i=0; i<textContent.length; i++){
      textContent[i].classList.add('content-txt');
    }

    const circleImg = document.getElementsByClassName('img-circle');
    // console.log(circleImg);
    functionObj.position(circleImg[0], 'relative', '-10%', '2%');
    functionObj.bgiStyle(circleImg[0], './module/image/study.png', 'center', 'cover', 0.8);
    move(circleImg[0],'-10%', '-11%');

    functionObj.position(circleImg[1], 'relative', '10%', '2%');
    functionObj.bgiStyle(circleImg[1], './module/image/digital_nomad.png', 'center', 'cover', 0.8);
    move(circleImg[1],'10%', '11%');

    const pageBox = document.getElementById('page-box6');
    functionObj.container(pageBox, '25%', '5%', 'row');
    functionObj.position(pageBox, 'absolute', '35%' , '95%');
    pageBox.style.color = colorArr[5];

    let leftBtn = pageBox.children[0];
    let pageTxt = pageBox.children[1];
    let rightBtn = pageBox.children[2];

    for(let i = 0 ; i<pageBox.children.length; i++){
      functionObj.font(pageBox.children[i], '1rem', 600);
      pageBox.children[i].style.cursor = 'pointer';
      }

    pageTxt.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      bookcoverMaker();
    });

    leftBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      project2PageMaker();
    });

    rightBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      contactPageMaker();
    });
  }
  tabletVerSomedayPage();
}