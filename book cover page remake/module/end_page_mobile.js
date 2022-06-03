import { functionObj } from "./function_obj.js";
import { colorArr } from "./array.js";
import { root, mobileWidth, tabletWidth, desktopWidth} from "./const.js";
import { bookcoverMaker } from "./bookcover_page_mobile.js";
import { contactPageMaker } from "./contact_page_mobile.js";
import { tabletVerEndPage } from "./end_page_tablet.js";

export function endPageMaker(){
  if( mobileWidth.matches === true && tabletWidth.matches === false && desktopWidth.matches === false){
    functionObj.createElement('div',root);
    const container = root.children[0];
    functionObj.container(container, '100%' , '100%');
  
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

    functionObj.size(pageBox, '25%', '5%');
    functionObj.flex(pageBox,'space-evenly', 'center');
    functionObj.position(pageBox, 'absolute', '35%' , '95%');
  
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
      bookcoverMaker();
    });
    
    
    leftBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      contactPageMaker();
    });
  } 
  tabletVerEndPage();
}