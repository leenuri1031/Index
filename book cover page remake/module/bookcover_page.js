import { root, mobileWidth, tabletWidth, desktopWidth } from "./const.js";
import { bookcoverMaker } from "./bookcover_page_mobile.js";
import {illustPageMaker} from "./illust_page_mobile.js";

bookcoverMaker();
// root.removeChild(root.children[0]);

// let boolean = true;
// if(boolean === true){
//   root.addEventListener('click' , ()=> {
//     // console.dir(root);
//     root.removeChild(root.children[0]);
//     illustPageMaker();
//     // console.dir(root);
//   });
// } 

// // console.log(root);
// let container = root.children[0];
// console.log(container);
// let boolean = true;
// container.addEventListener('click', ()=> {
//   if(boolean === true){
//     console.log('test');
//   }
// });