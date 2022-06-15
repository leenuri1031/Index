import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth} from "../basic/const.js";
import { sectionPageLoop, sectionChildLoop, pageBoxLoop, sectionChildStyle,pageBoxText, pageMove } from "./desktop_page_function.js";
import { pcVerContentPage } from "./desktop _content_page.js";
import { pcVerIamPage } from "./desltop_Iam_page.js";
import { pcVerNowIPage } from "./desktop_now_page.js";
import { pcVerProjectPage } from "./desktop_project_page.js";
import { pcVerSomedayPage } from "./desktop_someday_page.js";
import { pcVerContactPage } from "./desktop_contact_page.js";

// console.log(mobileWidth);
// console.log(tabletWidth);
// console.log(desktopWidth);
// console.log(mobileWidth.matches);
// console.log(tabletWidth.matches);
// console.log(desktopWidth.matches);
export function desktopPageMaker(){
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === true){
    // console.log(root);
    sectionPageLoop();
    sectionChildLoop();
    pageBoxLoop();
    sectionChildStyle();
    pageBoxText();
    
    const sections = root.children;
    // console.log(sections);
    let coverPage  = sections[0].children[0].children;
    // // console.log(coverPage);

    // coverPage[0].innerHTML = `
    // <img src="../img/paper.png"></img>
    // <p>Qué será será</p>
    // <p>El mundo’s story</p>
    // `;
      for(let i = 0; i<2; i++){
      functionObj.createElement('div', coverPage[i]);
      }

    
    functionObj.size(coverPage[0].children[0], '80%', '80%');
    // console.dir(coverPage[0].children[0]);
    let coverImgBox = coverPage[0].children[0];
    functionObj.flex(coverImgBox, 'center', 'center', 'column');
    
    for(let i = 0; i<2; i++){
    functionObj.createElement('div', coverImgBox);
    functionObj.container(coverImgBox.children[i], '50%', '10%');
    }

    coverImgBox.children[0].textContent = 'Qué será será';
    functionObj.font(coverImgBox.children[0], '2rem', 600);
    coverImgBox.children[1].textContent = 'El mundo’s story';
    functionObj.font(coverImgBox.children[1], '1.1rem', 550);

    for(let i = 0; i<3; i++){
      functionObj.createElement('div', coverPage[1].children[0]); 
      functionObj.size(coverPage[1].children[0], '80%', '80%');   
      functionObj.flex(coverPage[1].children[0], 'center', 'center', 'column');
      }
  
      let coverRightContent = coverPage[1].children[0].children;
      // console.log(coverRightContent);
  
      functionObj.boxStyle(coverRightContent[0], '50%', '60%', colorArr[0], '100px');
      coverRightContent[0].style.marginBottom = '5vh';
  
      for(let i = 1; i<3; i++){
        functionObj.container(coverRightContent[i], '40%', '10%');
        functionObj.font(coverRightContent[i], '1rem', 550);
        }
        coverRightContent[1].textContent = 'Written by El mundo';
        coverRightContent[2].textContent = 'Illust by El mundo';
  
      // console.log(root.offsetHeight);
      // console.log(sections[0].offsetHeight);
      // console.log(window.scrollY);    // 수직 scroll 한 값 

      const sectionsPagesbottom = sections[0].children[1];
      pageMove(sectionsPagesbottom, sections[1] ,sections[6]);
  }
  pcVerContentPage();
  pcVerIamPage(); 
  pcVerNowIPage();
  pcVerProjectPage();
  pcVerSomedayPage();
  pcVerContactPage();
}