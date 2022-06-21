import { root } from "../module/basic/const.js";
import { contentPageMaker } from "../module/content_page/content_page_mobile.js";

contentPageMaker();

root.style.backgroundImage = 'url(./module/image/main_background.png)';
root.style.backgroundSize = 'cover';