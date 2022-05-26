import { functionObj } from "./function_obj.js";
import { colorArr } from "./array.js";

export const root = document.getElementById('root');
// console.dir(root);
// console.log(root);

export  const container = document.getElementById('container');
// console.dir(container);

export const pageContainer = root.children[1]
// console.log(pageContainer);

export const rightBtnEvent =
container.addEventListener('click', function() {
  const remove = container.parentNode.removeChild(container);
  functionObj.createBefore('div',root, pageContainer);
// console.log(root);
  const newContainer = root.children[0];
// console.log(newContainer);
  functionObj.boxStyle(newContainer, '90%', '90%', colorArr[0]);
  functionObj.flex(newContainer,'flex-start', 'flex-end');
  functionObj.createElement('p', newContainer);
  const txtBox = newContainer.children[0];
  functionObj.size(txtBox, '60%', '20%');
  functionObj.flex(txtBox, 'center', 'center');
  txtBox.textContent = 'If you’re curious about my story, please read it to the end even if you’re bored.';
//   console.dir(txtBox);
  txtBox.style.paddingLeft = '5vw';

  pageContainer.style.display = 'flex';
});








