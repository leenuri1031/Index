import { functionObj } from "./function_obj.js";
import { colorArr } from "./array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, boolean, container, textIAm, textILike, textIDid, nowI1, nowI2, project1Text, project2Text, somedayText1, somedayText2, contactText } from "./const.js";
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
    console.log(sections);
    let coverPage  = sections[0].children[0].children;
    console.log(coverPage);

    functionObj.createElement('div', coverPage[i]);
    functionObj.boxStyle(coverPage[0].children[0], '80%', '80%', colorArr[0]);
  }
}