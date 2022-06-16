import { functionObj } from "../basic/function_obj.js";
import { borderArr, colorArr, imgUrl, } from "../basic/array.js";
import { main,mobileWidth, tabletWidth, desktopWidth, } from "../basic/const.js";

export function mainSectionTopStyle(){
  if(mobileWidth.matches === true && tabletWidth.matches === false && desktopWidth.matches === false){
    // console.log('hello');
    const sections = main.children;

    for(let i= 0; i<sections.length; i++){
      functionObj.container(sections[i], '100%', '50%');
    }
    
    const tripStyleBox = sections[0].children[0];
    const mapBox = sections[0].children[1];
    // console.log(tripStyleBox.children);
    functionObj.container(tripStyleBox, '90%', '45%');
    functionObj.container(mapBox, '90%', '45%');
    // tripStyleBox.style.border = borderArr[0];
    functionObj.boxStyle(tripStyleBox.children[0], '180px', '180px', colorArr[1], '100%');
    functionObj.flex(tripStyleBox.children[0], 'center','center','column');
    for(let i = 0; i < tripStyleBox.children[0].children.length; i++){
      functionObj.font(tripStyleBox.children[0].children[i], '1.2rem', 500, colorArr[5]);
      tripStyleBox.children[0].children[i].style.cursor = 'pointer';
    }

    mapBox.innerHTML = `<img src="${imgUrl[1]}">`;
    mapBox.style.cursor = 'pointer';
    functionObj.size(mapBox.children[0], '100%', '100%');
  }
} 
