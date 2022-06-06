import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, pcProject2Text, somedayText1, somedayText2} from "../basic/const.js";

export function pcVerSomedayPage(){
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === true){
    const sections = root.children;

    let leftContainer =sections[5].children[0].children[0];
    let rightContainer =sections[5].children[0].children[1];

    for(let i = 0 ; i<2; i++){
      functionObj.createElement('div', leftContainer);
      functionObj.createElement('div', rightContainer);
    }

    functionObj.container(leftContainer.children[0], '90%', '50%');
    functionObj.container(leftContainer.children[1], '90%', '30%');

    for(let i = 0 ; i<2; i++){
      functionObj.createElement('div', leftContainer.children[0]);
    }
    for(let i = 0 ; i<3; i++){
      functionObj.createElement('div', leftContainer.children[1]);
    }

    let leftTop = leftContainer.children[0].children;
    let leftBottom = leftContainer.children[1].children;

    functionObj.iAmPageTextBox(leftTop[0], '10%');
    functionObj.font(leftTop[0], '1rem', '550');
    leftTop[0].textContent = '나는 이렇게 만들었습니다.';

    functionObj.iAmPageTextBox(leftTop[1], '80%', '92%');
    functionObj.font(leftTop[1], '0.8rem', '500');
    leftTop[1].style.paddingLeft = '2vh';
    leftTop[1].style.lineHeight = '200%';
    leftTop[1].style.textAlign = 'justify';
    leftTop[1].innerHTML = pcProject2Text;

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

    functionObj.container(rightContainer.children[0], '90%', '55%');
    functionObj.container(rightContainer.children[1], '90%', '30%', 'row');

    for(let i=0; i<3; i++){
      functionObj.createElement('div', rightContainer.children[0]);
    }

    let rightTop =  rightContainer.children[0].children;

    functionObj.iAmPageTextBox(rightTop[0], '10%');
    functionObj.font(rightTop[0], '1.5rem', '550');
    rightTop[0].textContent = '4. Some day I...';

    functionObj.container(rightTop[1], '95%', '40%');
    functionObj.container(rightTop[2], '95%', '30%');

    for(let i = 0; i<2; i++){
      for(let i =1; i< rightTop.length; i++){
        functionObj.createElement('div', rightTop[i]);
        functionObj.iAmPageTextBox(rightTop[i].children[0], '10%');
        functionObj.font(rightTop[i].children[0], '1rem', '500');
      }
    }

    rightTop[1].children[0].textContent = '언젠가 나는 하고 싶습니다.';
    rightTop[2].children[0].textContent = '나의 최종 꿈은 ...';

    for(let i = 0; i<2; i++){
      for(let i =1; i< rightTop.length; i++){
        functionObj.iAmPageTextBox(rightTop[i].children[1], '80%', '100%');
        functionObj.font(rightTop[i].children[1], '0.8rem', '500');
        functionObj.position(rightTop[i].children[1], 'relative', '3vh' );
        rightTop[i].children[1].style.lineHeight = '180%';
        rightTop[i].children[1].style.textAlign = 'justify';
      }
    }

    rightTop[1].children[1].innerHTML =somedayText1;
    rightTop[2].children[1].innerHTML =somedayText2;


    for(let i=0; i<2; i++){
      functionObj.createElement('div', rightContainer.children[1]);
      let rightBottom = rightContainer.children[1].children;
      functionObj.boxStyle(rightBottom[i], '180px', '180px', colorArr[0], '100%');
    }

    let rightBottom = rightContainer.children[1].children;
    functionObj.position(rightBottom[0], 'relative', '-5%', '5%');
    functionObj.position(rightBottom[1], 'relative', '5%', '-10%');



  }
}