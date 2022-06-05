import { functionObj } from "./function_obj.js";
import { colorArr } from "./array.js";
import { root, mobileWidth, tabletWidth, desktopWidth,boolean } from "./const.js";
import { tabletVerIllust } from "./illust_page_tablet.js";



export const tabletVerBookcover = function tabletPage(){
  
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === false){
    // console.log('tablet');
  
    functionObj.createElement('div',root);
    const container = root.children[0];
  
    functionObj.container(container, '95%' , '95%');
    container.style.border = '1px dotted gray';
    for(let i = 0; i< 2; i++){
      functionObj.createElement('div', container);
    }
    const titleContainer = container.children[0];
    const writerContainer = container.children[1];
    // console.log(titleContainer);
    // console.log(writerContainer);
    functionObj.boxStyle(titleContainer, '60%', '45%', colorArr[0]);
    functionObj.flex(titleContainer, 'center', 'center','column');
  
    functionObj.createElement('h1', titleContainer);
    functionObj.createElement('h3', titleContainer);
  
    titleContainer.children[0].textContent = 'Qué será será';
    titleContainer.children[0].style.marginBottom = '2vh';
    titleContainer.children[1].textContent = 'El mundo’s story';
  
    functionObj.boxStyle(writerContainer, '30%', '30%', colorArr[0], '30%');
    functionObj.position(writerContainer, 'relative','15%');
    functionObj.flex(writerContainer, 'center', 'center','column');
  
    for(let i = 0; i< 2; i++){
      functionObj.createElement('p', writerContainer);
    }
  
    writerContainer.children[0].textContent = 'Written by El mundo';
    writerContainer.children[0].style.marginBottom = '2vh';
    writerContainer.children[1].textContent = 'Illust by El mundo';
    if(boolean === true){
      root.children[0].addEventListener('click', ()=>{
    // console.log(event);
    let container = root.children[0];
    // console.log(container);
    container.parentNode.removeChild(container);
    tabletVerIllust();
      });
    }
  } 
}
