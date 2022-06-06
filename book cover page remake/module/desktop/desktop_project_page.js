import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, pcProjectText1, pcProjectText2 } from "../basic/const.js";

export function pcVerProjectPage(){
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === true){
    const sections = root.children;

    let leftContainer =sections[4].children[0].children[0];
    let rightContainer =sections[4].children[0].children[1];

    // console.log(leftContainer);
    // console.log(rightContainer);

    for(let i = 0 ; i<2; i++){
      functionObj.createElement('div', leftContainer);
    }

    functionObj.container(leftContainer.children[0], '90%', '50%');
    functionObj.container(leftContainer.children[1], '90%', '30%');

    for(let i = 0; i<3; i++){
      for(let i = 0; i<leftContainer.children.length; i++){
      functionObj.createElement('div', leftContainer.children[i]);
      }
    }

    let leftTop = leftContainer.children[0].children;
    let leftBottom = leftContainer.children[1].children;

    functionObj.iAmPageTextBox(leftTop[0], '10%');
    functionObj.font(leftTop[0], '1rem', '550');
    leftTop[0].textContent = '나는 이렇게 만들었습니다.';

    functionObj.iAmPageTextBox(leftTop[1], '40%');
    functionObj.iAmPageTextBox(leftTop[2], '30%');

    for(let i = 1; i<leftTop.length; i++){
      functionObj.font(leftTop[i], '0.8rem', '500');
      leftTop[i].style.paddingLeft = '2vh';
      leftTop[i].style.lineHeight = '200%';
      leftTop[i].style.textAlign = 'justify';
    }

    leftTop[1].innerHTML = pcProjectText1;
    leftTop[2].innerHTML = pcProjectText2;

    functionObj.iAmPageTextBox(leftBottom[0], '10%');
    functionObj.font(leftBottom[0], '1rem', '550');
    leftBottom[0].textContent = '프로젝트';

    for(let i = 1; i<leftBottom.length; i++){
      functionObj.borderRound(leftBottom[i], '20%', '15%', '30px');
      functionObj.font(leftBottom[i], '0.8rem', '500');
      functionObj.position(leftBottom[i], 'relative','-35%');
      leftBottom[i].style.cursor = 'pointer';
    }

    leftBottom[1].textContent = 'page sample';
    leftBottom[2].textContent = 'github';


    for(let i = 0; i< 3; i++){
      functionObj.createElement('div', rightContainer);
    }

    let rightPage = rightContainer.children;
    // console.log(rightPage);
    functionObj.iAmPageTextBox(rightPage[0], '10%', '83.5%');
    functionObj.font(rightPage[0], '1rem', 500);
    rightPage[0].textContent= '나의 두번째 프로젝트 입니다.';

    functionObj.size(rightPage[1], '90%', '40%');
    functionObj.flex(rightPage[1], 'space-around', 'center');

    for(let i = 0; i<2; i++){
      functionObj.createElement('div', rightPage[1]);
      functionObj.boxStyle(rightPage[1].children[i], '40%', '80%', colorArr[0]);
      rightPage[1].children[i].addEventListener('mouseover', (event)=> {
        functionObj.boxStyle(event.target, '60%', '100%', colorArr[0]);
      });
      rightPage[1].children[i].addEventListener('mouseout', (event)=> {
        functionObj.boxStyle(event.target, '40%', '80%', colorArr[0]);
      });
    }

    functionObj.boxStyle(rightPage[2], '40%', '35%', colorArr[0]);
    
    rightPage[2].addEventListener('mouseover', (event)=> {
      functionObj.boxStyle(event.target, '60%', '50%', colorArr[0]);
    });

    rightPage[2].addEventListener('mouseout', (event)=> {
      functionObj.boxStyle(event.target, '40%', '35%', colorArr[0]);
    });

  }
}