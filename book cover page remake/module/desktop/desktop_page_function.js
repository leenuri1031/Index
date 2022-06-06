import { root, boolean } from "../basic/const.js";
import { functionObj } from "../basic/function_obj.js";

export function sectionPageLoop (){
  if(boolean === true){
    root.style.height = '700vh';

    for(let i = 0; i < 7; i++){
      functionObj.createElement('div', root);
      functionObj.size(root.children[i], '95vw', '95vh');
      root.children[i].style.border = '1px dotted gray';
      functionObj.flex(root.children[i], 'space-evenly', 'center', 'column');
    }
  }
}

export function sectionChildLoop(){
  if(boolean === true){
    const sections = root.children;
    for(let i = 0; i < 2; i++){
      for(let i = 0; i< sections.length; i++){
        functionObj.createElement('div', sections[i]);
        let sectionsPages = sections[i].children;
        functionObj.container(sectionsPages[0], '98%', '90%', 'row');
      }
    }
  }
}

export function pageBoxLoop(){
  if(boolean === true){
    const sections = root.children;
    for(let i = 0; i< sections.length; i++){
        let sectionsPages = sections[i].children;
        functionObj.size(sectionsPages[1], '15%', '5%');
        functionObj.flex(sectionsPages[1],'space-evenly', 'center');
        for(let i = 0; i< 3; i++){
          functionObj.createElement('div', sectionsPages[1]);
        }
      }
  }
}

export function sectionChildStyle(){
  if(boolean == true){
    const sections = root.children;

    const sectionsPagesTop = [sections[0].children[0], sections[1].children[0], sections[2].children[0], sections[3].children[0], sections[4].children[0], sections[5].children[0],sections[6].children[0]];

    for(let i = 0; i < 2; i++){
      for(let i = 0; i<sectionsPagesTop.length; i++){
        functionObj.createElement('div', sectionsPagesTop[i]);
        functionObj.container(sectionsPagesTop[i].children[0], '50%','98%');
      }
    }
    for(let i = 0; i<sectionsPagesTop.length; i++){
      functionObj.container(sectionsPagesTop[i].children[1], '50%','98%');
      sectionsPagesTop[i].children[1].style.borderLeft =  '1px dotted gray';
    }
  }
}

export function pageBoxText(){
  const sections = root.children;
  // // console.log(sections.length);
  const sectionsPagesbottom = [sections[0].children[1], sections[1].children[1], sections[2].children[1], sections[3].children[1], sections[4].children[1], sections[5].children[1],sections[6].children[1]];

  for(let i = 0; i < sectionsPagesbottom.length; i++){
    sectionsPagesbottom[i].children[0].textContent = '<';
    sectionsPagesbottom[i].children[1].textContent = 'page';
    sectionsPagesbottom[i].children[2].textContent = '>';
    sectionsPagesbottom[i].children[0].style.cursor ='pointer'
    sectionsPagesbottom[i].children[1].style.cursor ='pointer'
    sectionsPagesbottom[i].children[2].style.cursor ='pointer'
  }
}

    // root.style.height = '700vh';

    // for(let i = 0; i < 7; i++){
    //   functionObj.createElement('div', root);
    //   functionObj.size(root.children[i], '95vw', '95vh');
    //   root.children[i].style.border = '1px dotted gray';
    //   functionObj.flex(root.children[i], 'space-evenly', 'center', 'column');
    //   // root.children[i].textContent = i ;
    //   // functionObj.font(root.children[i], '2rem', '600');
    //   // root.children[i].style.paddingLeft = '5vw';
    // }

    // const sections = root.children;

    // for(let i = 0; i < 2; i++){
    //   for(let i = 0; i< sections.length; i++){
    //     functionObj.createElement('div', sections[i]);
    //     let sectionsPages = sections[i].children;
    //     functionObj.container(sectionsPages[0], '98%', '90%', 'row');
    //   }
    // }

    // for(let i = 0; i< sections.length; i++){
    //   let sectionsPages = sections[i].children;
    //   functionObj.size(sectionsPages[1], '15%', '5%');
    //   functionObj.flex(sectionsPages[1],'space-evenly', 'center');
    //   functionObj.position(sectionsPages[1], 'absolute', '43%' , '94%');
    //   for(let i = 0; i< 3; i++){
    //     functionObj.createElement('div', sectionsPages[1]);
    //   }
    // }

    // const sectionsPages = sections[0].children[0];
    // // console.log(sectionsPages);

    // for(let i = 0; i < 2; i++){
    //   functionObj.createElement('div', sectionsPages);
    //   functionObj.container(sectionsPages.children[i], '50%','98%');
    // }
    // sectionsPages.children[1].style.borderLeft =  '1px dotted gray';

    // const pageBox1 = sections[0].children[1];
    // // console.log(pageBox1);
    // let leftBtn = pageBox1.children[0];
    // let pageTxt = pageBox1.children[1];
    // let rightBtn = pageBox1.children[2];
  
    // leftBtn.textContent = '<';
    // pageTxt.textContent = 'page';
    // rightBtn.textContent = '>';

    // // console.log(sectionsPagesTop);
    // // console.log(sectionsPagesbottom);

    // for(let i = 0; i < 2; i++){
    //   for(let i = 0; i<sectionsPagesTop.length; i++){
    //     functionObj.createElement('div', sectionsPagesTop[i]);
    //     functionObj.container(sectionsPagesTop[i].children[0], '50%','98%');
    //   }
    // }

    // for(let i = 0; i<sectionsPagesTop.length; i++){
    //   functionObj.container(sectionsPagesTop[i].children[1], '50%','98%');
    //   sectionsPagesTop[i].children[1].style.borderLeft =  '1px dotted gray';
    // }



