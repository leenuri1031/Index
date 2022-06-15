import { functionObj } from "../basic/function_obj.js";
import { colorArr, imgUrl, borderArr } from "../basic/array.js";
import { root,header, main, footer, mobileWidth, tabletWidth, desktopWidth, boolean } from "../basic/const.js";

export function mainSectionBottomStyle(){
  if(main.children[1].dataset){
    // console.log('hello');
    main.style.color=colorArr[5];
    const sections = main.children;
    // console.log(sections);
    const infoBox = sections[1].children[0];
    const cityBoxContainer = sections[1].children[1];
    
    functionObj.borderRound(infoBox, '40%','6%', borderArr[1], '20px');

    functionObj.container(cityBoxContainer, '100%', '90%');

    // console.log(cityBoxContainer.children);
    const cityBox = cityBoxContainer.children;
    // console.log(cityBox);
    for(let i = 0; i<cityBox.length; i++){
    functionObj.container(cityBox[i], '100%', '30%', 'row');
    // cityBox[i].style.border = borderArr[0];
    functionObj.boxStyle(cityBox[i].children[0], '120px', '120px', colorArr[1], '100%');
    functionObj.flex(cityBox[i].children[0], 'center', 'center');
    functionObj.boxStyle(cityBox[i].children[1], '120px', '120px', colorArr[1], '100%');
    functionObj.flex(cityBox[i].children[1], 'center', 'center');
    cityBox[i].children[0].style.cursor = 'pointer';
    cityBox[i].children[1].style.cursor = 'pointer';
    };

    



  }
} 
