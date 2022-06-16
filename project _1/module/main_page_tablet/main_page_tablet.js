import { functionObj } from "../basic/function_obj.js";
import { colorArr, imgUrl } from "../basic/array.js";
import { header,  main, footer, mobileWidth, tabletWidth, desktopWidth, boolean } from "../basic/const.js";
import { mainSectionBottomStyleTablet } from "./middle_section_style_2_tablet.js";
import { mainSectionTopStyleTablet } from "./middle_section_style_1_tablet.js";
import { footerStyleTablet } from "./bottom_section_style_tablet.js";

export function  tabletMain(){
  if( mobileWidth.matches === false&& tabletWidth.matches === true && desktopWidth.matches === false){
    header.innerHTML  = `<img src="${imgUrl[0]}">
    <h1>Travel to Japan</h1>
    `;
    // console.log(header.children[0]);
    header.style.order = 1;
    main.style.order = 3;
    footer.style.order = 2;

    let titleImg = header.children[0];
    functionObj.size(titleImg, '100%', '100%');
    // console.dir(titleImg);
    titleImg.style.opacity = 0.8;

    let title = header.children[1];
    functionObj.font(title, '1.8rem', 600, colorArr[0]);
    functionObj.position(title, 'absolute', '35%', '14%');

    mainSectionTopStyleTablet();
    mainSectionBottomStyleTablet();
    footerStyleTablet();
  }
}