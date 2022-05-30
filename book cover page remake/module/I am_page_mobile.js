import { functionObj } from "./function_obj.js";
import { root, mobileWidth, tabletWidth, desktopWidth,boolean } from "./const.js";

export function iAmPageMaker(){
  if( mobileWidth.matches === true && tabletWidth.matches === false && desktopWidth.matches === false){

    functionObj.createElement('div', root);
    
    const container = root.children[0];
    functionObj.container(container, '95%' , '95%');

    functionObj.createElement('div', container);
    const pageBox = container.children[0];

    functionObj.size(pageBox, '25%', '5%');
    functionObj.flex(pageBox,'space-evenly', 'center');
  
    for(let i = 0; i< 4; i++){
      functionObj.createBefore('div', container, pageBox);
      functionObj.size(container.children[i], '90%', '15%');
    }
  

  
    functionObj.size(pageBox, '25%', '5%');
    functionObj.flex(pageBox,'space-evenly', 'center');
  
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
    rightBtn.style.cursor = 'pointer';
    
    leftBtn.addEventListener('click', ()=> {
      root.removeChild(root.children[0]);
      illustPageMaker();
    });
  }
}