function flexStyling(target, justi, ali, flexDirection="row") {
  target.style.display = "flex";
  target.style.justifyContent = justi;
  target.style.alignItems = ali;
  target.style.flexDirection = flexDirection;
}

function size(target, w, h){
  target.style.width = w;
  target.style.height = h;
}

function boxStyling(target, w, h, bgc, radius = '0%'){
  target.style.width = w;
  target.style.height = h;
  target.style.backgroundColor = bgc;
  target.style.borderRadius = radius;
}

let colorArr = ['#ebebeb', '#c0c0c0', '#a1a1a1', '#838383', '#464646', '#363636'];

function createElement (tag, parent){
  let objName = document.createElement(tag);
  parent.appendChild(objName);
}