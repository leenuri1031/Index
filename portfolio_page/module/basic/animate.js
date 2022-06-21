function move(target, numA, numB){
  let moving = setInterval(function(){
    target.animate([
      {left : numA},
      {left : numB},
      {left : numA},
      {left : numB},
      {left : numA}
  ], 2000);
  },2000);

  return moving
}

export default move;

