import { functionObj } from "../basic/function_obj.js";
import { colorArr, imgUrl, borderArr } from "../basic/array.js";
import { main } from "../basic/const.js";

export function mainSectionTopStyle(){
  if(main.children[0].dataset){
    // console.log('hello');
    const sections = main.children;

    for(let i= 0; i<sections.length; i++){
      functionObj.container(sections[i], '90%', '50%');
      // sections[i].style.border = borderArr[0];
    }
    
    const tripStyleBox = sections[0].children[0];
    const mapBox = sections[0].children[1];
    // console.dir(tripStyleBox);
    functionObj.boxStyle(tripStyleBox, '180px', '180px', colorArr[1], '100%');
    functionObj.flex(tripStyleBox, 'center','center','column');
    // console.log(tripStyleBox.children);
    for(let i = 0; i < tripStyleBox.children.length; i++){
      functionObj.font(tripStyleBox.children[i], '1.2rem', 500, colorArr[5]);
      tripStyleBox.children[i].style.cursor = 'pointer';
    }

    mapBox.innerHTML = `<img src="${imgUrl[1]}">`;
    mapBox.style.cursor = 'pointer';


  }
} 
