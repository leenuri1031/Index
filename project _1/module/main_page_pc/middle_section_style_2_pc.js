import { functionObj } from "../basic/function_obj.js";
import { colorArr, cityImgUrl, borderArr, cityName } from "../basic/array.js";
import {  main,  mobileWidth, tabletWidth, desktopWidth, bottomText } from "../basic/const.js";

export function mainSectionBottomStylePc(){
  if(mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === true){
    
    main.style.color=colorArr[5];
    const sections = main.children;

    const infoBox = sections[1].children[0];
    const cityBoxContainer = sections[1].children[1];

    functionObj.borderRound(infoBox, '20%','10%', '30px',borderArr[1]);
    // infoBox.style.margin = '2vh';

    functionObj.container(cityBoxContainer, '100%', '70%', 'row');
    cityBoxContainer.style.listStyleType = 'none';
    // cityBoxContainer.style.flexWrap = 'wrap';

    const cityBox = cityBoxContainer.children;
    for(let i = 0; i<cityBox.length; i++){
      functionObj.boxStyle(cityBox[i], '12vw','12vw',colorArr[1], '50%' );
      cityBox[i].style.margin = '1vh';
      cityBox[i].innerHTML = `
      <img src = "${cityImgUrl[i]}">
      <p>${cityName[i]}</p>
      `;
      functionObj.borderRound(cityBox[i].children[0], '100%', '100%', '50%');
      cityBox[i].children[1].style.cursor = 'pointer';
      functionObj.font(cityBox[i].children[1], '1.1rem', 500, colorArr[1]);

    };
    functionObj.position(cityBox[0].children[1], 'relative', '38%', '-55%');
    functionObj.position(cityBox[1].children[1], 'relative', '30%', '-55%');
    functionObj.position(cityBox[2].children[1], 'relative', '38%', '-55%');
    functionObj.position(cityBox[3].children[1], 'relative', '38%', '-55%');
    functionObj.position(cityBox[4].children[1], 'relative', '32%', '-55%');
    functionObj.position(cityBox[5].children[1], 'relative', '32%', '-55%');


  }
} 
