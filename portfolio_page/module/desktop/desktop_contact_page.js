import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, contactText} from "../basic/const.js";
import { pageMove } from "./desktop_page_function.js";

export function pcVerContactPage(){
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === true){
    const sections = root.children;

    let leftContainer =sections[6].children[0].children[0];
    let rightContainer =sections[6].children[0].children[1];

    for(let i = 0 ; i<2; i++){
      functionObj.createElement('div', leftContainer);
      functionObj.size(leftContainer.children[i], '95%', '45%');
    }

    functionObj.flex(leftContainer.children[0], 'space-evenly', 'center', 'column');
    functionObj.flex(leftContainer.children[1], 'space-evenly', 'center');

    for(let i = 0 ; i<3; i++){
      functionObj.createElement('div', leftContainer.children[0]);
      functionObj.flex(leftContainer.children[0].children[i], 'flex-start', 'center');
    }

    for(let i = 0 ; i<2; i++){
      functionObj.createElement('div', leftContainer.children[1]);
      functionObj.container( leftContainer.children[1].children[i], '45%', '100%');
    }

    let leftTop = leftContainer.children[0].children;
    let leftBottom = leftContainer.children[1].children

    functionObj.iAmPageTextBox(leftTop[0], '15%', '100%');
    functionObj.iAmPageTextBox(leftTop[1], '15%', '95%');
    functionObj.iAmPageTextBox(leftTop[2], '60%', '95%');


    functionObj.font(leftTop[0], '1.5rem', '550');
    leftTop[0].textContent = '5. Contact me';

    functionObj.font(leftTop[1], '1rem', '500');
    leftTop[1].textContent = '그러니까 나는';

    functionObj.font(leftTop[2], '0.8rem', '500');
    leftTop[2].style.paddingLeft = '1vh';
    leftTop[2].style.lineHeight = '180%';
    leftTop[2].style.textAlign = 'justify';
    leftTop[2].innerHTML = contactText;

    for(let i = 0 ; i < 5; i++){
      functionObj.createElement('div', leftBottom[0]);
    }

    let leftBottomText = leftBottom[0].children;

    for(let i = 0; i<leftBottomText.length-1; i++){
      functionObj.iAmPageTextBox(leftBottomText[i], '8%', '90%');
      functionObj.font(leftBottomText[i], '1rem', '500');
    }

    leftBottomText[0].textContent = 'If you contact to me';
    leftBottomText[1].textContent = 'E-mail : hello@contact.com';
    leftBottomText[2].textContent = 'mobile : 010-1234-5678';
    leftBottomText[3].textContent = 'Instargram'

    functionObj.boxStyle(leftBottomText[4], '10vw', '10vw', colorArr[0]);
    functionObj.position(leftBottomText[4], 'relative', '-15%', '2%');

    for(let i = 0 ; i < 2; i++){
      functionObj.createElement('div', leftBottom[1]);
    }

    let leftBottomImg = leftBottom[1].children;
    functionObj.boxStyle(leftBottomImg[0], '150px', '150px', colorArr[0], '100%');

    functionObj.container(leftBottomImg[1], '90%', '15%', 'row');

    for(let i = 0 ; i < 2; i++){
      functionObj.createElement('div', leftBottomImg[1]);
    }
    functionObj.iAmPageTextBox(leftBottomImg[1].children[0], '100%', '30%');
    leftBottomImg[1].children[0].textContent = 'Resume';
    functionObj.borderRound(leftBottomImg[1].children[1], '40%', '60%', '20px');
    leftBottomImg[1].children[1].textContent = '이력서 보기';
    functionObj.font(leftBottomImg[1].children[1], '0.8rem', '500');
    leftBottomImg[1].children[1].style.cursor = 'pointer';

    functionObj.createElement('div', rightContainer);
    functionObj.boxStyle(rightContainer.children[0], '80%', '80%', colorArr[0]);
    functionObj.flex(rightContainer.children[0], 'center', 'center');

    functionObj.createElement('h1', rightContainer.children[0]);
    rightContainer.children[0].children[0].textContent = 'The END?';

    const sectionsPagesbottom = sections[6].children[1];
    pageMove(sectionsPagesbottom, sections[0], sections[5]);
  }
}