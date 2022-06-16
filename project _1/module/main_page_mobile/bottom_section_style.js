import { functionObj } from "../basic/function_obj.js";
import { colorArr} from "../basic/array.js";
import { footer, mobileWidth, tabletWidth, desktopWidth } from "../basic/const.js";

export function footerStyle(){
  // console.log(typeof(footer.children[0].dataset));
  if(mobileWidth.matches === true && tabletWidth.matches === false && desktopWidth.matches === false){
    const ul = footer.children[0];
    // console.dir(ul);
    ul.style.listStyleType = 'none';
    functionObj.container(ul, '100%', '100%', 'row');
    functionObj.font(ul, '0.8rem', 550, colorArr[5]);
    // console.log(ul.children);
    const menues = ul.children;
    for(let i = 0; i<menues.length; i++){
      menues[i].style.cursor = 'pointer';
    }
  }
}