import { root,contactText} from "../basic/const.js";
import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { pageMove} from "./pc_function.js";

function remakeContact(){
  const sections = root.children;
  const container = sections[6].children[0].children;

  functionObj.bgiStyle(container[0], './module/image/pc_ver_background_image.png', '', 'cover', 0.9);

  pageMove(sections[6].children[1], sections[0] ,sections[5]);

}

export default remakeContact; 