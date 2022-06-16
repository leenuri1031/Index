import { functionObj } from "../basic/function_obj.js";
import { colorArr, cityImgUrl, borderArr, cityName } from "../basic/array.js";
import {  main,  mobileWidth, tabletWidth, desktopWidth } from "../basic/const.js";

export function mainSectionBottomStyle(){
  if(mobileWidth.matches === true && tabletWidth.matches === false && desktopWidth.matches === false){
    // console.log('hello');
    main.style.color=colorArr[5];
    const sections = main.children;
    // console.log(sections);
    const infoBox = sections[1].children[0];
    const cityBoxContainer = sections[1].children[1];
    
    functionObj.borderRound(infoBox, '40%','6%', '20px',borderArr[1]);

    functionObj.container(cityBoxContainer, '85%', '90%', 'row');
    // console.dir(cityBoxContainer.style);
    // cityBoxContainer.style.border = borderArr[0];
    cityBoxContainer.style.listStyleType = 'none';
    cityBoxContainer.style.flexWrap = 'wrap';
    // console.log(cityBoxContainer.children);
    const cityBox = cityBoxContainer.children;
    // console.log(cityBox);
    for(let i = 0; i<cityBox.length; i++){
      functionObj.boxStyle(cityBox[i], '30vw','30vw',colorArr[1], '50%' );
      cityBox[i].innerHTML = `
      <img src = "${cityImgUrl[i]}">
      <p>${cityName[i]}</p>
      `;
      functionObj.borderRound(cityBox[i].children[0], '100%', '100%', '50%');
      cityBox[i].children[1].style.cursor = 'pointer';
      functionObj.font(cityBox[i].children[1], '1rem', 500, colorArr[1]);
    };
    functionObj.position(cityBox[0].children[1], 'relative', '32%', '-58%');
    functionObj.position(cityBox[1].children[1], 'relative', '20%', '-58%');
    functionObj.position(cityBox[2].children[1], 'relative', '34%', '-58%');
    functionObj.position(cityBox[3].children[1], 'relative', '32%', '-58%');
    functionObj.position(cityBox[4].children[1], 'relative', '21%', '-58%');
    functionObj.position(cityBox[5].children[1], 'relative', '23%', '-58%');

  }
} 
