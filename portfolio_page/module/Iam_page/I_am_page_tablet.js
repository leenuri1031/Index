import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, textIAm, textIDid, textILike } from "../basic/const.js";
import { tabletVerNowPage } from "../now_I_page/now_I_am_page_tablet.js";
import { tabletVerContent } from "../content_page/content_page_tablet.js";
import { tabletVerBookcover } from "../bookcover_page/bookcover_page_tablet.js";
import innerHTMLIAm from "../basic/I_am_function.js";
import move from "../basic/animate.js";

export function tabletVerIAm(){
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === false){
    functionObj.createElement('div', root);

    const container = root.children[0];
    functionObj.container(container, '95%' , '95%');
    container.style.border = `1px dotted ${colorArr[5]}`;

    container.innerHTML = innerHTMLIAm(textIAm, textILike, textIDid);

    functionObj.container(container.children[0], '95%', '90%');
    const sections = document.getElementsByTagName('section');

    functionObj.iAmPageTextBox(container.children[0].children[0], '8%');
    sections[0].style.color = colorArr[5];

    functionObj.iAmPageTextBox(sections[0], '20%');
    functionObj.iAmPageTextBox(sections[1], '30%');
    functionObj.iAmPageTextBox(sections[2], '30%');

    // for(let i = 0; i< 5; i++){
    //   functionObj.createElement('div', container);
    // }
    
    // let textTitle = container.children[0];
    
    // functionObj.iAmPageTextBox(textTitle, '8%');
    // textTitle.textContent = '1. I am...';
    // functionObj.font(textTitle, '1.5rem', '550');
    
    // let textBox = [container.children[1], container.children[2], container.children[3]];

    // functionObj.iAmPageTextBox(textBox[0], '20%');
    // functionObj.iAmPageTextBox(textBox[1], '30%');
    // functionObj.iAmPageTextBox(textBox[2], '30%');


    // for(let i = 0; i<2; i++){
    //   for(let i = 0; i < textBox.length; i++){
    //     functionObj.createElement('div', textBox[i]);
    //     functionObj.size(textBox[i].children[0], '95%', '95%');
    //     functionObj.flex(textBox[i].children[0], 'space-evenly', 'flex-start', 'column');
    //     textBox[i].children[0].style.paddingLeft = '2vh';
    //     textBox[i].children[0].style.zIndex = 1;
    //   }
    // }

    // functionObj.boxStyle(textBox[0].children[1], '22vw', '22vw', colorArr[0], '100%');
    // functionObj.position(textBox[0].children[1], 'absolute', '45%', '12%');
    
    // setInterval(function(){
    //   textBox[0].children[1].animate([
    //     {left : '45%'},
    //     {left : '46%'},
    //     {left : '45%'},
    //     {left : '46%'},
    //     {left : '45%'}
    // ], 2000);
    // },2000);

    // functionObj.boxStyle(textBox[1].children[1], '35vw', '35vw', colorArr[0], '100%');
    // functionObj.position(textBox[1].children[1], 'absolute', '52%', '36%');

    // setInterval(function(){
    //   textBox[1].children[1].animate([
    //     {left : '52%'},
    //     {left : '51%'},
    //     {left : '52%'},
    //     {left : '51%'},
    //     {left : '52%'}
    // ], 2000);
    // },2000);

    // functionObj.boxStyle(textBox[2].children[1], '20vw', '20vw', colorArr[0], '100%');
    // functionObj.position(textBox[2].children[1], 'absolute', '60%', '75%');

    // setInterval(function(){
    //   textBox[2].children[1].animate([
    //     {left : '60%'},
    //     {left : '61%'},
    //     {left : '60%'},
    //     {left : '61%'},
    //     {left : '60%'}
    // ], 2000);
    // },2000);

    // let textBoxContent = [textBox[0].children[0], textBox[1].children[0], textBox[2].children[0]];

    // for(let i = 0; i<2; i++){
    //   for(let i = 0; i < textBoxContent.length; i++){
    //     functionObj.createElement('div', textBoxContent[i]);
    //     functionObj.font(textBoxContent[i].children[0], '1rem', '550');
    //   }
    // }

    // for(let i = 0; i < textBoxContent.length; i++){
    //   functionObj.font(textBoxContent[i].children[1], '0.8rem', '500');
    //   textBoxContent[i].style.lineHeight = '150%';
    // }

    // textBoxContent[0].children[0].textContent = '나는 입니다.';
    // textBoxContent[0].children[1].innerHTML = textIAm; 

    // textBoxContent[1].children[0].textContent = '나는 좋아합니다.';
    // textBoxContent[1].children[1].innerHTML = textILike; 


    // textBoxContent[2].children[0].textContent = '나는 했습니다.';
    // textBoxContent[2].children[1].innerHTML = textIDid; 

    
    // const pageBox = container.children[4];
    // functionObj.size(pageBox, '25%', '5%');
    // functionObj.flex(pageBox,'space-evenly', 'center');
    // functionObj.position(pageBox, 'absolute', '38%' , '92.5%');

  
    // for(let i = 0; i< 3; i++){
    //   functionObj.createElement('div', pageBox);
    // }
  
    // let leftBtn = pageBox.children[0];
    // let pageTxt = pageBox.children[1];
    // let rightBtn = pageBox.children[2];
  
    // leftBtn.textContent = '<';
    // pageTxt.textContent = 'page';
    // rightBtn.textContent = '>';
  
    // leftBtn.style.cursor = 'pointer';
    // pageTxt.style.cursor = 'pointer';
    // rightBtn.style.cursor = 'pointer';

    // pageTxt.addEventListener('click', ()=> {
    //   root.removeChild(root.children[0]);
    //   tabletVerBookcover();
    // });

    // leftBtn.addEventListener('click', ()=> {
    //   root.removeChild(root.children[0]);
    //   tabletVerContent();
    //   // console.log('TEST');
    // });
  
    // rightBtn.addEventListener('click', ()=> {
    //   root.removeChild(root.children[0]);
    //   tabletVerNowPage();
    // });
  }
}
