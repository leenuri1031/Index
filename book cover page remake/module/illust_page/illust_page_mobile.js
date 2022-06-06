import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth} from "../basic/const.js";
import { tabletVerIllust } from "../illust_page/illust_page_tablet.js";
import { bookcoverMaker } from "../bookcover_page/bookcover_page_mobile.js";
import { contentPageMaker } from "../content_page/content_page_mobile.js";


export function illustPageMaker(){
  if( mobileWidth.matches === true && tabletWidth.matches === false && desktopWidth.matches === false){
  functionObj.createElement('div',root);
  const container = root.children[0];

  functionObj.container(container, '100%' , '100%');

  for(let i = 0; i< 2; i++){
    functionObj.createElement('div', container);
  }

  const illustBox = container.children[0];
  const pageBox = container.children[1];

  functionObj.boxStyle(illustBox, '80%', '90%', colorArr[0]);
  illustBox.style.paddingLeft = '5vw';
  illustBox.style.paddingBottom = '10vw';
  functionObj.flex(illustBox, 'center', 'center');

  functionObj.createElement('p', illustBox);
  let textBox = illustBox.children[0];
  functionObj.size(textBox, '60%', '10%');
  textBox.textContent = 'If you’re curious about my story, please read it to the end even if you feel bored.';

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
    bookcoverMaker();
  });

  rightBtn.addEventListener('click', ()=> {
    root.removeChild(root.children[0]);
    contentPageMaker();
  });
  
  } 
  tabletVerIllust();
}





