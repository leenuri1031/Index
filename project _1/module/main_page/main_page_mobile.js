import { functionObj } from "../basic/function_obj.js";
import { colorArr, imgUrl } from "../basic/array.js";
import { root,header, main, footer, mobileWidth, tabletWidth, desktopWidth, boolean } from "../basic/const.js";
import {mainSection}  from "./middle_section.js";
import { mainSectionTopStyle } from "./middle_section_style_1.js";
import { mainSectionBottomStyle } from "./middle_section_style_2.js";

export function  mobileMain(){
  if( mobileWidth.matches === true && tabletWidth.matches === false && desktopWidth.matches === false){
    header.innerHTML  = `<img src="${imgUrl[0]}">
    <h1>Travel to Japan</h1>
    `;
    // console.log(header.children[0]);
    let titleImg = header.children[0];
    functionObj.size(titleImg, '100%', '100%');
    // console.dir(titleImg);
    titleImg.style.opacity = 0.8;

    let title = header.children[1];
    functionObj.font(title, '1.8rem', 600, colorArr[0]);
    functionObj.position(title, 'absolute', '24%', '10%');

    mainSection();
    mainSectionTopStyle();
    mainSectionBottomStyle();
    // console.dir(main);

  }
}