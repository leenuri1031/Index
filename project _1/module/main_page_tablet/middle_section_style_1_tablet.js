import { functionObj } from "../basic/function_obj.js";
import { colorArr, imgUrl, borderArr} from "../basic/array.js";
import { main,mobileWidth, tabletWidth, desktopWidth, } from "../basic/const.js";

export function mainSectionTopStyleTablet(){
  if(mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === false){
    // console.log('hello');
    const sections = main.children;

    functionObj.container(sections[0], '100%', '40%', 'row');
    functionObj.container(sections[1], '100%', '60%');

    sections[0].style.borderBottom = borderArr[1]

    for(let i = 0 ; i<2; i++){
      // sections[i].style.border=borderArr[0];
      functionObj.container(sections[0].children[i], '50%', '100%');
      // sections[0].children[i].style.border = borderArr[1]
    }
    
    const tripStyleBox = sections[0].children[0];
    const mapBox = sections[0].children[1];
    // console.dir(tripStyleBox);
    functionObj.boxStyle(tripStyleBox.children[0], '250px', '250px', colorArr[1], '100%');
    functionObj.flex(tripStyleBox.children[0], 'center','center','column');
    tripStyleBox.style.borderRight = borderArr[2];
    // console.log(tripStyleBox.children);
    for(let i = 0; i < tripStyleBox.children[0].children.length; i++){
      functionObj.font(tripStyleBox.children[0].children[i], '1.2rem', 500, colorArr[5]);
      tripStyleBox.children[0].children[i].style.cursor = 'pointer';
    }

    mapBox.innerHTML = `<img src="${imgUrl[1]}">`;
    mapBox.style.cursor = 'pointer';
    functionObj.size(mapBox.children[0], '100%', '70%');
    // console.log(mapBox.children);
  }
} 
