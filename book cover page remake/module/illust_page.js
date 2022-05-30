import { root} from "./const.js";
import {illustPageMaker} from "./illust_page_mobile.js";
import { bookcoverMaker } from "./bookcover_page_mobile.js";


illustPageMaker();

export const illustPageLeftBtn = root.children[0].children[1].children[0]
// console.log(illustPageLeftBtn);
illustPageLeftBtn.style.cursor = 'pointer';

export const illustPageClick= illustPageLeftBtn.addEventListener('click', ()=> {
  root.removeChild(root.children[0]);
  bookcoverMaker();
});