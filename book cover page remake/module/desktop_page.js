import { functionObj } from "./function_obj.js";
import { colorArr } from "./array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, boolean, container, textIAm, textILike, textIDid, nowI1, nowI2, project1Text, project2Text, somedayText1, somedayText2, contactText } from "./const.js";


export function desktopPageMaker(){
  if( mobileWidth.matches === false && tabletWidth.matches === false && desktopWidth.matches === true){
    // root.style.height = '700vh';
    console.log(tabletWidth);
  }
}