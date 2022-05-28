
export const functionObj = {
  flex : function flexStyling(target, justi, ali, flexDirection="row") {
    target.style.display = "flex";
    target.style.justifyContent = justi;
    target.style.alignItems = ali;
    target.style.flexDirection = flexDirection;
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

  createElement : function createElement (tag, parent){
    const objName = document.createElement(tag);
    parent.appendChild(objName);
  },

  createBefore : function createBefore (newTag, parent, tag){
    const tagName = document.createElement(newTag)
    parent.insertBefore(tagName, tag);
  }
}




