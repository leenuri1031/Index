import { root, boolean } from "../basic/const.js";
import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";

function sectionMaker (){
  if(boolean === true){
    root.style.height = '700vh';

    for(let i = 0; i < 7; i++){
      functionObj.createElement('section', root);
      functionObj.container(root.children[i], '95vw', '95vh');
      root.children[i].style.border = `1px dotted ${colorArr[5]}`;
    }
  }
}

export default sectionMaker;