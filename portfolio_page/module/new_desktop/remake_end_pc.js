import { root} from "../basic/const.js";
import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";

function remakeEnd(){
  const sections = root.children;
  const container = sections[6].children[0].children;

  // console.log(container[1].children[0].children);
  const imgContainer = container[1].children[0].children[0];
  functionObj.container(imgContainer, '60%', '70%');
  functionObj.bgiStyle(imgContainer, './module/image/cover_background.png', '', 'cover',0.9);
  imgContainer.style.color = colorArr[6];

  // console.log(imgContainer.children[1]);
  functionObj.container(imgContainer.children[0], '70%', '80%');
  imgContainer.children[0].style.opacity = 0.8;
  functionObj.position(imgContainer.children[1], 'relative', '-5%', '-50%');






}
export default remakeEnd;