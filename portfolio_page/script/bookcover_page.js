import { root } from "../module/basic/const.js";
import { bookcoverMaker } from "../module/bookcover_page/bookcover_page_mobile.js";

bookcoverMaker();
root.style.backgroundImage = 'url(./module/image/cover_background_mobile.png)';
root.style.backgroundSize = 'cover';