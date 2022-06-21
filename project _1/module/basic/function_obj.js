
export const functionObj = {
  flex : function flexStyling(target, justi, ali, flexDirection="row") {
    target.style.display = "flex";
    target.style.justifyContent = justi;
    target.style.alignItems = ali;
    target.style.flexDirection = flexDirection;
  },

  position : function positionSetting(target, posi, left = 0 , top = 0, zIndex = 0) {
    target.style.position = posi;
    target.style.left = left;
    target.style.top = top;
    target.style.zIndex = zIndex;
  },

  size : function size(target, w, h){
    target.style.width = w;
    target.style.height = h;
  },

  boxStyle : function boxStyling(target, w, h, bgc, radius = '0%'){
    target.style.width = w;
    target.style.height = h;
    target.style.backgroundColor = bgc;
    target.style.borderRadius = radius;
  },

  container : function containerStyle(target, w, h, direction = 'column' ){
    target.style.width = w;
    target.style.height = h;
    target.style.display = 'flex';
    target.style.justifyContent = 'space-evenly';
    target.style.alignItems = 'center';
    target.style.flexDirection = direction;
  },

  font : function fontstyle(target, rem, bold, col){
    target.style.fontSize = rem;
    target.style.fontWeight = bold;
    target.style.color = col;
  },


  createElement : function createElement (tag, parent){
    const objName = document.createElement(tag);
    parent.appendChild(objName);
  },

  createBefore : function createBefore (newTag, parent, tag){
    const tagName = document.createElement(newTag)
    parent.insertBefore(tagName, tag);
  },

  borderRound : function raoundBorderStyle (target, w, h,radius,border = 'none'){
    target.style.width = w;
    target.style.height = h;
    target.style.display = 'flex';
    target.style.justifyContent = 'center';
    target.style.alignItems = 'center';
    target.style.borderRadius = radius;
    target.style.border = border;
  },

  addImage : function imageLoop(arr, tag){
    let result = '';
    arr.forEach((value, index)=>{
      result += `<${tag} src = "${value}" ></${tag}>`;
    });
    return result;
  }
}





