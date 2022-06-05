import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, boolean, container, textIAm, textILike, textIDid, nowI1, nowI2, project1Text, project2Text, somedayText1, somedayText2, contactText } from "../basic/const.js";
import { sectionPageLoop, sectionChildLoop, pageBoxLoop, sectionChildStyle,pageBoxText } from "./desktop_page_function.js";

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
    // console.log(coverPage);

    functionObj.createElement('div', coverPage[0]);
    functionObj.boxStyle(coverPage[0].children[0], '80%', '80%', colorArr[0]);
    
    let coverImgBox = coverPage[0].children[0];

    functionObj.flex(coverImgBox, 'center', 'center', 'column');
    
    for(let i = 0; i<2; i++){
    functionObj.createElement('div', coverImgBox);
    functionObj.container(coverImgBox.children[i], '45%', '10%');
    }

    coverImgBox.children[0].textContent = 'Qué será será';
    functionObj.font(coverImgBox.children[0], '2rem', 600);
    coverImgBox.children[1].textContent = 'El mundo’s story';
    functionObj.font(coverImgBox.children[1], '1.1rem', 550);
  }
}