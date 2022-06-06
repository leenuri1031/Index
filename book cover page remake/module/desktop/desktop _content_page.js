import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import { root, mobileWidth, tabletWidth, desktopWidth, textIllust, contentText1, contentText2, contentText3, contentText4, contentText5} from "../basic/const.js";

export function pcVerContentPage(){
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === true){

    const sections = root.children;
    let illustPage = sections[1].children[0].children[0];
    // console.log(illustPage);
    let contentPage = sections[1].children[0].children[1];
    // console.log(contentPage);

    for(let i = 0; i<2; i++){
      functionObj.createElement('div', illustPage);
      }

      functionObj.boxStyle(illustPage.children[0], '60%', '60%', colorArr[0]);
      functionObj.iAmPageTextBox(illustPage.children[1], '15%', '60%');
      // functionObj.font(illustPage.children[1], '')
      illustPage.children[1].innerHTML = textIllust;
      illustPage.children[1].style.lineHeight = '200%';
      // illustPage.children[1].style.border = '1px solid gray';

      for(let i = 0; i< 6; i++){
        functionObj.createElement('div', contentPage);
        contentPage.children[i].style.borderBottom = '1px dotted gray';
        contentPage.children[i].style.paddingBottom = '2vh';
      }
      let textContentBox = contentPage.children;
      functionObj.size(textContentBox[0], '90%', '5%');
      functionObj.size(textContentBox[1], '90%', '15%');
      functionObj.size(textContentBox[2], '90%', '10%');
      functionObj.size(textContentBox[3], '90%', '15%');
      functionObj.size(textContentBox[4], '90%', '12%');
      functionObj.size(textContentBox[5], '90%', '15%');

      textContentBox[0].textContent = 'Content';
      functionObj.font(textContentBox[0], '1.5rem', 600);
      functionObj.flex(textContentBox[0], 'flex-start', 'center');

      for(let i = 0; i< 2; i++){
        for(let i = 1; i<textContentBox.length; i++){
          functionObj.flex(textContentBox[i], 'space-around', 'flex-start', 'column');
          textContentBox[i].style.paddingLeft = '2vh';
          functionObj.createElement('p', textContentBox[i]);
          functionObj.font(textContentBox[i].children[0], '1.1rem', 500);
        textContentBox[i].children[0].style.lineHeight = '180%';
        }
      }

      for(let i = 1; i<textContentBox.length; i++){
        textContentBox[i].children[1].style.paddingLeft = '2vh';
        functionObj.font(textContentBox[i].children[1], '0.8rem', 400);
        textContentBox[i].children[1].style.lineHeight = '180%';
      }

      let boxContents1 = textContentBox[1].children;
      boxContents1[0].textContent = 'I am...';
      boxContents1[0].style.cursor = 'pointer';
      boxContents1[1].innerHTML = contentText1;

      let boxContents2 = textContentBox[2].children;
      boxContents2[0].textContent = 'Now I am...';
      boxContents2[0].style.cursor = 'pointer';
      boxContents2[1].innerHTML = contentText2;

      let boxContents3 = textContentBox[3].children;
      boxContents3[0].textContent = 'This is my...';
      boxContents3[0].style.cursor = 'pointer';
      boxContents3[1].innerHTML = contentText3;

      let boxContents4 = textContentBox[4].children;
      boxContents4[0].textContent = 'Someday I...';
      boxContents4[0].style.cursor = 'pointer';
      boxContents4[1].innerHTML = contentText4;

      let boxContents5 = textContentBox[5].children;
      boxContents5[0].textContent = 'Contact me';
      boxContents5[0].style.cursor = 'pointer';
      boxContents5[1].innerHTML = contentText5;
  }
}