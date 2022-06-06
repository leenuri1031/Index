import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, textIAm, textIDid, textILike } from "../basic/const.js";

export function pcVerIamPage(){
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === true){
    const sections = root.children;

    let leftContainer =sections[2].children[0].children[0];
    // console.log(leftContainer);
    let rightContainer =sections[2].children[0].children[1];
    // console.log(rightContainer);

    for(let i = 0; i< 3; i++){
      functionObj.createElement('div', leftContainer);
    }

    let textTitle = leftContainer.children[0];
    let textBox = [leftContainer.children[1], leftContainer.children[2]];

    functionObj.iAmPageTextBox(textTitle, '10%');
    textTitle.textContent = '1. I am ...';
    functionObj.font(textTitle, '1.5rem', '550');

    functionObj.iAmPageTextBox(textBox[0], '30%');
    functionObj.iAmPageTextBox(textBox[1], '45%');

    for(let i = 0; i<2; i++){
      for(let i = 0; i < textBox.length; i++){
        functionObj.createElement('div', textBox[i]);
        functionObj.size(textBox[i].children[0], '70%', '100%');
        functionObj.flex(textBox[i].children[0], 'space-evenly', 'flex-start', 'column');
        textBox[i].children[0].style.paddingLeft = '1vh';
        textBox[i].children[0].style.zIndex = 1;
      }
    }

    let textBoxContent = [textBox[0].children[0], textBox[1].children[0]];

    for(let i = 0; i<2; i++){
      for(let i = 0; i < textBoxContent.length; i++){
        functionObj.createElement('div', textBoxContent[i]);
        functionObj.font(textBoxContent[i].children[0], '1rem', '550');
      }
    }

    for(let i = 0; i < textBoxContent.length; i++){
      functionObj.font(textBoxContent[i].children[1], '0.8rem', '500');
      textBoxContent[i].style.lineHeight = '200%';
      textBoxContent[i].children[1].style.paddingLeft = '1vh';
    }

    textBoxContent[0].children[0].textContent = '나는 입니다.';
    textBoxContent[0].children[1].innerHTML = textIAm; 

    textBoxContent[1].children[0].textContent = '나는 좋아합니다.';
    textBoxContent[1].children[1].innerHTML = textILike; 

    functionObj.boxStyle(textBox[0].children[1], '150px', '150px', colorArr[0], '100%');
    functionObj.position(textBox[0].children[1], 'relative', '0%', '12%');

    functionObj.boxStyle(textBox[1].children[1], '200px', '200px', colorArr[0], '100%');
    functionObj.position(textBox[1].children[1], 'relative', '-15%', '12%');

    for(let i = 0; i< 2; i++){
      functionObj.createElement('div', rightContainer);
      functionObj.container(rightContainer.children[i], '90%', '45%', 'row');
    }
    
    let rightContent = rightContainer.children;

    for(let i = 0; i< 2; i++){
      for(let i = 0; i< rightContent.length; i++){
        functionObj.createElement('div', rightContent[i]);
      }
    }

    let rightTop = rightContent[0].children;
    let rightBottom =  rightContent[1].children;

    functionObj.size(rightTop[0], '68%', '100%');
    functionObj.flex(rightTop[0], 'space-evenly', 'flex-start', 'column');
    rightTop[0].style.zIndex = 1;

    functionObj.boxStyle(rightTop[1], '180px', '180px', colorArr[0], '100%');

    for(let i = 0; i<2; i++){
        functionObj.createElement('div', rightTop[0]);
        functionObj.font(rightTop[0].children[0], '1rem', '550');
    }

    rightTop[0].children[0].style.paddingLeft = '1vh';

    functionObj.font(rightTop[0].children[1], '0.8rem', '500');
    rightTop[0].style.lineHeight = '200%';
    rightTop[0].children[1].style.paddingLeft = '2vh';

    rightTop[0].children[0].textContent = '나는 했습니다.';
    rightTop[0].children[1].innerHTML = textIDid; 

    // console.log(rightBottom);
    functionObj.boxStyle(rightBottom[0], '200px', '200px', colorArr[0], '100%');
    functionObj.position(rightBottom[0], 'relative', '-5%', '-10%');
    functionObj.boxStyle(rightBottom[1], '150px', '150px', colorArr[0], '100%');
    functionObj.position(rightBottom[1], 'relative', '5%', '10%');

  }
}

