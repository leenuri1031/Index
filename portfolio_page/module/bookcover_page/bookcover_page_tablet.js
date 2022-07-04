import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import {root, mobileWidth, tabletWidth, desktopWidth, boolean} from "../basic/const.js";
import { tabletVerIllust } from "../illust_page/illust_page_tablet.js";
import innerHTMLCover from "../basic/cover_function.js"

export const tabletVerBookcover = function tabletPage(){
  
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === false){
    // console.log('tablet');
    functionObj.bgiStyle(root, './module/image/cover_background_mobile.png', 'center', 'cover', 1);
  
    functionObj.createElement('div',root);
    const container = root.children[0];
  
    functionObj.container(container, '95%' , '95%');
    container.style.border = `1px dotted ${colorArr[5]}`;
    container.innerHTML = `<div></div>`;
    container.style.color = colorArr[6];

    functionObj.container(container.children[0], '80%', '80%');

    const imgContainer = container.children[0];
    imgContainer.style.backgroundImage = 'url(./module/image/cover_background.png)'
    imgContainer.style.backgroundSize = 'cover';
    imgContainer.innerHTML = innerHTMLCover('./module/image/whale.png');
    // console.log(imgContainer.children);

    functionObj.container(imgContainer.children[0], '90%', '90%');

    const containerContent = imgContainer.children[0].children;
    // console.log(containerContent);

    functionObj.container(containerContent[0], '80%', '70%');
    functionObj.size(containerContent[1], '80%', '10%');
    functionObj.flex(containerContent[1], 'space-evenly', 'flex-end', 'column');

    functionObj.size(containerContent[0].children[0], '80%', '80%');
    containerContent[0].children[0].style.opacity = 0.8;

    for(let i = 0 ; i<2; i++){
      functionObj.font(containerContent[1].children[i], '1rem', 600);
    }
    
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
