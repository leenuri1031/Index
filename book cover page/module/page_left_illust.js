import {pageContainer, container} from './create_illust_page.js';


const leftBtn = pageContainer.children[0];
const rightBtn = pageContainer.children[2];

leftBtn.addEventListener('click', ()=> {
  // console.log('test');
  let illustPageContainer = root.children[0];
  root.removeChild(illustPageContainer);
  root.insertBefore(container, pageContainer);
  pageContainer.style.display = 'none';
});