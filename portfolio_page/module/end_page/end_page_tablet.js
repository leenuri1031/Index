import { colorArr } from "../basic/array.js";
import { functionObj } from "../basic/function_obj.js";
import { root, mobileWidth, tabletWidth, desktopWidth } from "../basic/const.js";
import { tabletVerBookcover } from "../bookcover_page/bookcover_page_tablet.js";
import { tabletVerContactPage } from "../contact_page/contact_page_tablet.js";

export function tabletVerEndPage(){
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === false){
    functionObj.createElement('div',root);
    const container = root.children[0];
  
    functionObj.container(container, '95%' , '95%');
    container.style.border = '1px dotted gray';

    for(let i = 0; i< 2; i++){
      functionObj.createElement('div', container);
    }

    const illustBox = container.children[0];
    const pageBox = container.children[1];

    functionObj.boxStyle(illustBox, '80%', '80%', colorArr[0]);
    functionObj.flex(illustBox, 'center', 'center');
    functionObj.createElement('p', illustBox);
    let textBox = illustBox.children[0];
    functionObj.size(textBox, '60%', '20%');
    functionObj.flex(textBox, 'center', 'flex-end');
    functionObj.font(textBox, '1.5rem', '550');
    textBox.textContent = 'The END?';

    functionObj.size(pageBox, '15%', '5%');
    functionObj.flex(pageBox,'space-evenly', 'center');
    functionObj.position(pageBox, 'absolute', '38%' , '92.5%');
  
    for(let i = 0; i< 2; i++){
      functionObj.createElement('div', pageBox);
    }
  
    let leftBtn = pageBox.children[0];
    let pageTxt = pageBox.children[1];
  
    leftBtn.textContent = '<';
    pageTxt.textContent = 'page';
  
    leftBtn.style.cursor = 'pointer';
    pageTxt.style.cursor = 'pointer';
  
    pageTxt.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      tabletVerBookcover();
    });
    
    
    leftBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      tabletVerContactPage();
    });
  } 
}