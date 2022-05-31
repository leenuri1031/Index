import { functionObj } from "./function_obj.js";
import { colorArr } from "./array.js";
import { root, mobileWidth, tabletWidth, desktopWidth } from "./const.js";
import { tabletVerBookcover } from "./bookcover_page_tablet.js";
import { tabletVerContent } from "./content_page_tablet.js";


export function tabletVerIllust(){
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === false){
  // console.log('tablet');

  functionObj.createElement('div',root);
  const container = root.children[0];

  functionObj.container(container, '95%' , '95%');
  container.style.border = '1px dotted gray';

  for(let i = 0; i< 2; i++){
    functionObj.createElement('div', container);
  }

  const illustBox = container.children[0];
  const pageBox = container.children[1];

  functionObj.boxStyle(illustBox, '80%', '90%', colorArr[0]);
  illustBox.style.paddingLeft = '5vw';
  illustBox.style.paddingBottom = '10vw';
  functionObj.flex(illustBox,'center', 'center');

  functionObj.createElement('p', illustBox);
  let textBox = illustBox.children[0]
  functionObj.size(textBox, '60%', '10%');
  textBox.textContent = 'If you’re curious about my story, please read it to the end even if you feel bored.';

  functionObj.size(pageBox, '25%', '5%');
  functionObj.flex(pageBox,'space-evenly', 'center');
  functionObj.position(pageBox, 'absolute', '38%' , '92.5%');


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
    tabletVerBookcover();
  });

  leftBtn.addEventListener('click', ()=> {
    root.removeChild(root.children[0]);
    tabletVerBookcover();
  });

  rightBtn.addEventListener('click', ()=> {
    root.removeChild(root.children[0]);
    tabletVerContent();
  });

} 
}





