import { functionObj } from "./function_obj.js";
import { colorArr } from "./array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, textIAm, textIDid, textILike } from "./const.js";
import { tabletVerIAm } from "./I_am_page_tablet.js";
import { bookcoverMaker } from "./bookcover_page_mobile.js";
import { contentPageMaker } from "./content_page_mobile.js";
import { nowIPageMaker } from "./now_I_am_page_mobile.js";



export function iAmPageMaker(){
  if( mobileWidth.matches === true && tabletWidth.matches === false && desktopWidth.matches === false){
    functionObj.createElement('div', root);

    const container = root.children[0];
    functionObj.container(container, '95%' , '95%');

    for(let i = 0; i< 5; i++){
      functionObj.createElement('div', container);
    }
    
    let textTitle = container.children[0];
    
    functionObj.iAmPageTextBox(textTitle, '5%');
    textTitle.textContent = '1. I am...';
    functionObj.font(textTitle, '1.5rem', '550');
    
    let textBox = [container.children[1], container.children[2], container.children[3]];

    functionObj.iAmPageTextBox(textBox[0], '15%');
    functionObj.iAmPageTextBox(textBox[1], '25%');
    functionObj.iAmPageTextBox(textBox[2], '30%');

    for(let i = 0; i<2; i++){
      for(let i = 0; i < textBox.length; i++){
        functionObj.createElement('div', textBox[i]);
        functionObj.size(textBox[i].children[0], '100%', '100%');
        functionObj.flex(textBox[i].children[0], 'space-evenly', 'flex-start', 'column');
        textBox[i].children[0].style.paddingLeft = '1vh';
        textBox[i].children[0].style.zIndex = 1;
      }
    }

    functionObj.boxStyle(textBox[0].children[1], '30vw', '30vw', colorArr[0], '100%');
    functionObj.position(textBox[0].children[1], 'absolute', '65%', '12%');

    functionObj.boxStyle(textBox[1].children[1], '35vw', '35vw', colorArr[0], '100%');
    functionObj.position(textBox[1].children[1], 'absolute', '52%', '36%');

    functionObj.boxStyle(textBox[2].children[1], '28vw', '28vw', colorArr[0], '100%');
    functionObj.position(textBox[2].children[1], 'absolute', '60%', '75%');

    // console.dir(textBox[0].children);
    let textBoxContent = [textBox[0].children[0], textBox[1].children[0], textBox[2].children[0]];
    // console.log(textBoxContent);

    for(let i = 0; i<2; i++){
      for(let i = 0; i < textBoxContent.length; i++){
        functionObj.createElement('div', textBoxContent[i]);
        functionObj.font(textBoxContent[i].children[0], '1rem', '550');
      }
    }

    for(let i = 0; i < textBoxContent.length; i++){
      functionObj.font(textBoxContent[i].children[1], '0.8rem', '500');
      textBoxContent[i].style.lineHeight = '150%';
    }

    textBoxContent[0].children[0].textContent = '나는 입니다.';
    textBoxContent[0].children[1].innerHTML = textIAm; 

    textBoxContent[1].children[0].textContent = '나는 좋아합니다.';
    textBoxContent[1].children[1].innerHTML = textILike; 


    textBoxContent[2].children[0].textContent = '나는 했습니다.';
    textBoxContent[2].children[1].innerHTML = textIDid; 

    
    const pageBox = container.children[4];
    functionObj.size(pageBox, '25%', '5%');
    functionObj.flex(pageBox,'space-evenly', 'center');
    functionObj.position(pageBox, 'absolute', '35%' , '95%');

  
    for(let i = 0; i< 3; i++){
      functionObj.createElement('div', pageBox);
    }
  
    let leftBtn = pageBox.children[0];
    let pageTxt = pageBox.children[1];
    let rightBtn = pageBox.children[2];
  
    leftBtn.textContent = '<';
    pageTxt.textContent = 'page';
    rightBtn.textContent = '>';
  
    leftBtn.style.cursor = 'pointer';
    pageTxt.style.cursor = 'pointer';
    rightBtn.style.cursor = 'pointer';

    pageTxt.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      bookcoverMaker();
    });
    

    leftBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      contentPageMaker();
    });

    rightBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      nowIPageMaker();
    });
  }
  tabletVerIAm();
}