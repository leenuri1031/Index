import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, nowI1, nowI2 } from "../basic/const.js";
import { pageMove } from "./desktop_page_function.js";

export function pcVerNowIPage(){
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === true){
    const sections = root.children;

    let leftContainer =sections[3].children[0].children[0];
    let rightContainer =sections[3].children[0].children[1];

    for(let i = 0; i< 3; i++){
      functionObj.createElement('div', leftContainer);
    }

    let textTitle = leftContainer.children[0];
    let topBox = [leftContainer.children[1], leftContainer.children[2]];

    functionObj.iAmPageTextBox(textTitle, '10%');
    textTitle.textContent = '2. Now I ...';
    functionObj.font(textTitle, '1.5rem', '550');
    functionObj.iAmPageTextBox(topBox[0], '50%');
    functionObj.iAmPageTextBox(topBox[1], '30%');

    for(let i = 0; i<2; i++){
      for(let i = 0; i < topBox.length; i++){
        functionObj.createElement('div', topBox[i]);
      }
    }

    functionObj.container(topBox[0].children[0], '75%', '98%');
    functionObj.boxStyle(topBox[0].children[1], '180px', '180px', colorArr[0], '100%');
    functionObj.position(topBox[0].children[1], 'relative', '-1%', '-25%');

    setInterval(function(){
      topBox[0].children[1].animate([
        {left : '-1%'},
        {left : '0%'},
        {left : '-1%'},
        {left : '0%'},
        {left : '-1%'}
    ], 2000);
    },2000);

    for(let i = 0; i<3; i++){
      functionObj.createElement('p', topBox[0].children[0]);
    }

    let textBox = topBox[0].children[0].children;
    // console.log(textBox.length);
    functionObj.iAmPageTextBox(textBox[0], '10%');

    functionObj.font(textBox[0], '1rem', '550');
    textBox[0].textContent = '나는 지금 합니다.';

    for(let i = 1; i<textBox.length; i++){
      functionObj.iAmPageTextBox(textBox[i], '40%');
      functionObj.font(textBox[i], '0.8rem', '500');
      textBox[i].style.paddingLeft = '2vh';
      textBox[i].style.lineHeight = '200%';
      textBox[i].style.textAlign = 'justify';
    }

    textBox[1].innerHTML=nowI1;
    textBox[2].innerHTML=nowI2;

    // console.log(leftContainer.children[2].children);
    let bottomImgBox = leftContainer.children[2].children;
    functionObj.boxStyle(bottomImgBox[0], '200px', '200px', colorArr[0], '100%');
    functionObj.position(bottomImgBox[0], 'relative', '5%');

    setInterval(function(){
      bottomImgBox[0].animate([
        {left : '5%'},
        {left : '4%'},
        {left : '5%'},
        {left : '4%'},
        {left : '5%'}
    ], 2000);
    },2000);

    functionObj.boxStyle(bottomImgBox[1], '150px', '150px', colorArr[0], '100%');
    functionObj.position(bottomImgBox[1], 'relative', '25%', '-25%');
    setInterval(function(){
      bottomImgBox[1].animate([
        {left : '25%'},
        {left : '26%'},
        {left : '25%'},
        {left : '26%'},
        {left : '25%'}
    ], 2000);
    },2000);

    // console.log(rightContainer);
    for(let i = 0; i<2; i++){
      functionObj.createElement('div', rightContainer);
    }

    // console.log(rightContainer.children);
    let rightPage = rightContainer.children;
    functionObj.iAmPageTextBox(rightPage[0], '10%', '88%');
    functionObj.font(rightPage[0], '1.5rem', '550');
    rightPage[0].textContent = '3. This is my ...'

    functionObj.container(rightPage[1], '88%', '80%');
    // rightPage[1].style.border ='1px solid gray';
    
    for(let i = 0; i<3; i++){
      functionObj.createElement('div', rightPage[1]);
    }

    functionObj.iAmPageTextBox(rightPage[1].children[0], '10%');
    functionObj.font(rightPage[1].children[0], '1rem', 500);
    rightPage[1].children[0].textContent= '나의 첫번째 프로젝트 입니다.';

    functionObj.size(rightPage[1].children[1], '90%', '40%');
    functionObj.flex(rightPage[1].children[1], 'space-around', 'center');

    for(let i = 0; i<2; i++){
      functionObj.createElement('div', rightPage[1].children[1]);
      functionObj.boxStyle(rightPage[1].children[1].children[i], '40%', '80%', colorArr[0]);
      rightPage[1].children[1].children[i].addEventListener('mouseover', (event)=> {
        functionObj.boxStyle(event.target, '60%', '100%', colorArr[0]);
      });
      rightPage[1].children[1].children[i].addEventListener('mouseout', (event)=> {
        functionObj.boxStyle(event.target, '40%', '80%', colorArr[0]);
      });
    }

    functionObj.boxStyle(rightPage[1].children[2], '40%', '35%', colorArr[0]);

    rightPage[1].children[2].addEventListener('mouseover', (event)=> {
      functionObj.boxStyle(event.target, '60%', '50%', colorArr[0]);
    });

    rightPage[1].children[2].addEventListener('mouseout', (event)=> {
      functionObj.boxStyle(event.target, '40%', '35%', colorArr[0]);
    });

    const sectionsPagesbottom = sections[3].children[1];
    pageMove(sectionsPagesbottom, sections[4], sections[2]);
  }
}