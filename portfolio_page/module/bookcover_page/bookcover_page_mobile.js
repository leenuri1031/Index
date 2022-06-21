import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, boolean } from "../basic/const.js";
import { tabletVerBookcover } from "./bookcover_page_tablet.js";
import {illustPageMaker} from "../illust_page/illust_page_mobile.js";
import innerHTMLCover from "../basic/cover_function.js"

// console.log(root);

export function bookcoverMaker(){
  if( mobileWidth.matches === true && tabletWidth.matches === false && desktopWidth.matches === false){
    // console.log('mobile');
    functionObj.createElement('div',root);
    const container = root.children[0];
    functionObj.container(container, '100%' , '100%');
    container.innerHTML = innerHTMLCover('./module/image/whale.png');
    functionObj.container(container.children[0], '80%', '70%');

    const imgContainer = container.children[0];
    imgContainer.style.backgroundImage = 'url(./module/image/cover_background.png)'
    imgContainer.style.backgroundSize = 'cover';
    imgContainer.style.color = colorArr[6];

    functionObj.container(imgContainer.children[0], '90%', '70%');
    functionObj.size(imgContainer.children[1], '90%', '10%');
    functionObj.flex(imgContainer.children[1], 'space-evenly', 'flex-end', 'column');

    const topContentBox = imgContainer.children[0];

    functionObj.size(topContentBox.children[0], '70%', '60%');
    topContentBox.children[0].style.opacity = 0.8;

    const bottomContentBox = imgContainer.children[1];

    for(let i = 0 ; i<2; i++){
      functionObj.font(bottomContentBox.children[i], '1rem', 600);
    }

    if(boolean === true){
      root.children[0].addEventListener('click', ()=>{
    // console.log(event);
    let container = root.children[0];
    // console.log(container);
    container.parentNode.removeChild(container);
    illustPageMaker();
      });
    }
  } 
  tabletVerBookcover();
}



