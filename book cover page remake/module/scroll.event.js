console.dir(root);
console.log("현재 이 문서의 전체 높이값은" + root.offsetHeight);
console.dir(sections[0]);
console.log("section 태그 하나의 높이값은" + sections[0].offsetHeight);

console.log(window.scrollY);

let heightValue = 0;
let switchValue = true;
window.addEventListener('click', function () {
  if (switchValue === true) {
    heightValue = heightValue + sections[0].offsetHeight;
    console.log("변수 핸들러 heightValue의 현재값 입니다 :" + heightValue);

    window.scrollTo({
      top: heightValue,
      behavior: "smooth"
    });

    if (heightValue >= root.offsetHeight) {
      switchValue = false;
    }

  } else {
    heightValue = 0;
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    switchValue = true;
  }
});