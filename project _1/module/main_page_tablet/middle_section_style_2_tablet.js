import { functionObj } from "../basic/function_obj.js";
import { colorArr, cityImgUrl, borderArr, cityName } from "../basic/array.js";
import {  main,  mobileWidth, tabletWidth, desktopWidth, bottomText } from "../basic/const.js";

export function mainSectionBottomStyleTablet(){
  if(mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === false){
    
    main.style.color=colorArr[5];
    const sections = main.children;

    functionObj.createElement('div', sections[1]);

    const infoBox = sections[1].children[0];
    const cityBoxContainer = sections[1].children[1];
    const bottomTextBox = sections[1].children[2];

    functionObj.borderRound(infoBox, '30%','7%', '30px',borderArr[1]);
    infoBox.style.margin = '2vh';

    functionObj.container(cityBoxContainer, '82%', '80%', 'row');
    cityBoxContainer.style.listStyleType = 'none';
    cityBoxContainer.style.flexWrap = 'wrap';

    const cityBox = cityBoxContainer.children;
    for(let i = 0; i<cityBox.length; i++){
      functionObj.boxStyle(cityBox[i], '24vw','24vw',colorArr[1], '50%' );
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
    functionObj.position(cityBox[1].children[1], 'relative', '35%', '-55%');
    functionObj.position(cityBox[2].children[1], 'relative', '38%', '-55%');
    functionObj.position(cityBox[3].children[1], 'relative', '38%', '-55%');
    functionObj.position(cityBox[4].children[1], 'relative', '34%', '-55%');
    functionObj.position(cityBox[5].children[1], 'relative', '34%', '-55%');

    functionObj.boxStyle(bottomTextBox, '100%','8vh',colorArr[4]);
    bottomTextBox.style.padding = '1vh';
    bottomTextBox.innerHTML = bottomText;
  }
} 
