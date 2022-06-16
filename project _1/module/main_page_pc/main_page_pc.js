import { functionObj } from "../basic/function_obj.js";
import { colorArr, imgUrl } from "../basic/array.js";
import { header,  main, footer, mobileWidth, tabletWidth, desktopWidth, boolean, root } from "../basic/const.js";
import { mainSectionBottomStylePc } from "./middle_section_style_2_pc.js";
import { mainSectionTopStylePc } from "./middle_section_style_1_pc.js";
import { footerStylePc } from "./bottom_section_style_pc.js";

export function  pcMain(){
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === true){

    functionObj.size(root, '100vw', '100vh');

    functionObj.container(header, '80%', '20vh');
    functionObj.container(main, '80%', '75vh');
    functionObj.container(footer, '80%', '5vh%');

    header.innerHTML  = `<img src="${imgUrl[0]}">
    <h1>Travel to Japan</h1>
    `;
    // console.log(header.children[0]);
    header.style.order = 1;
    main.style.order = 3;
    footer.style.order = 2;

    let titleImg = header.children[0];
    functionObj.size(titleImg, '100%', '100%');
    // // console.dir(titleImg);
    titleImg.style.opacity = 0.8;

    let title = header.children[1];
    functionObj.font(title, '1.8rem', 600, colorArr[0]);
    functionObj.position(title, 'absolute', '42%', '8%');

    mainSectionTopStylePc();
    mainSectionBottomStylePc();
    footerStylePc();
  }
}