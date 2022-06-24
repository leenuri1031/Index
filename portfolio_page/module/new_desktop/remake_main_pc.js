import { root, mobileWidth, tabletWidth, desktopWidth} from "../basic/const.js";
import { functionObj } from "../basic/function_obj.js";
import { colorArr } from "../basic/array.js";
import sectionMaker from "./section_maker.js";
import { sectionChildMaker, pageMove} from "./pc_function.js";
import { pcInnerHTMLTitle, pcInnerHTMLSub } from "./innerHTML.js";
import remakePcContent from "./remake_content_pc.js";
import remakePcIam from "./remake_Iam_pc.js";
import remakePcNow from "./remake_now_I_pc.js";
import remakeProject1 from "./remake_project_pc.js";
import remakeSomeday from "./remake_someday_pc.js";
import remakeContact from "./remake_contact_pc.js";

export function remakePcMain(){
  if( mobileWidth.matches === false && tabletWidth.matches === true && desktopWidth.matches === true){
    functionObj.bgiStyle(root, './module/image/pc_ver_cover_background.png', '', '100vw 100vh',1, 'repeat');

    sectionMaker();
    sectionChildMaker('page-box');

    const sections = root.children;

    const containers = []
    for(let i=0; i<sections.length; i++){
      containers.push(document.getElementById(`container-${i}`));
      functionObj.container(containers[i], '100%', '100%', 'row' );
      const contentBox = containers[i].children;
      // console.log(contentBox);
      for(let i=0; i<contentBox.length; i++){
        functionObj.container(contentBox[i], '50%','98%');
      }
      contentBox[1].style.borderLeft = `1px dotted ${colorArr[5]}`;
    }

    const contentBoxes= containers[0].children;
    // console.log(contentBoxes);
    for(let i = 0; i<contentBoxes.length; i++){
      contentBoxes[i].style.color = colorArr[6];
    }


    contentBoxes[0].innerHTML = pcInnerHTMLTitle('./module/image/whale.png');
    contentBoxes[1].innerHTML = pcInnerHTMLSub('./module/image/wings.png');
    // console.log(contentBoxes[0].children[0].children[1]);
    for(let i=0; i<contentBoxes.length; i++){
      functionObj.container(contentBoxes[i].children[0], '70%', '80%');
      functionObj.bgiStyle(contentBoxes[i].children[0],'./module/image/cover_background.png','','cover',0.9);
    }
    functionObj.txtStyle(contentBoxes[0].children[0].children[1], colorArr[6], '1.5rem', 600);
    functionObj.txtStyle(contentBoxes[1].children[0].children[1], colorArr[6], '1.2rem', 600);

    for(let i=0; i<2; i++){
      functionObj.container(contentBoxes[i].children[0].children[0], '60%', '60%');
      functionObj.container(contentBoxes[i].children[0].children[1], '80%', '15%');
    }

    const pageBoxes = []
    for(let i=0; i<sections.length; i++){
    pageBoxes.push(document.getElementById(`page-box-${i}`));
    }
    // console.log(pageBoxes);
    for(let i = 0; i<pageBoxes.length; i++){
      functionObj.container(pageBoxes[i], '15%', '5%', 'row');
      functionObj.font(pageBoxes[i], '1rem', 600);
      pageBoxes[i].style.color = colorArr[5];
      const pageBtns = pageBoxes[i].children;  
      // console.log(pageBtns);
      for(let i=0; i<pageBtns.length; i++){
        pageBtns[i].style.cursor ='pointer';
      }
    }
    remakePcContent();
    remakePcIam();
    remakePcNow();
    remakeProject1();
    remakeSomeday();
    remakeContact();
    // console.log(sections[0].children);
    pageMove(sections[0].children[1], sections[1] ,sections[6]);
  }
}