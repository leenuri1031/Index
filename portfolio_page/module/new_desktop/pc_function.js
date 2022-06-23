import { root, boolean } from "../basic/const.js";
import { functionObj } from "../basic/function_obj.js";


export function sectionChildMaker(id){
  if(boolean === true){
    const sections = root.children;
    for(let i = 0; i < sections.length; i++){
      sections[i].innerHTML = `
      <div id = "container-${i}">
      <div></div>
      <div></div>
      </div>
      <div id="${id}-${i}">
        <div>
        <i class="fa-solid fa-caret-left"></i>
        </div>
        <div>page</div>
        <div>
        <i class="fa-solid fa-caret-right"></i>
        </div>
      </div>
      `
    }
  }
}

export function pageMove(target, nextPage, prePage){
  if(boolean === true){
    const sections = root.children;

    // console.log(sectionsPagesbottom);
      let leftBtn = target.children[0];
      let pageBtn = target.children[1];
      let rightBtn = target.children[2];

      // console.dir(rightBtn);
      // console.log(rightBtn.offsetTop);

      let heightValue = 0;
      let switchValue = true;
      rightBtn.addEventListener('click', ()=> {
        if(switchValue === true){
          heightValue = heightValue + nextPage.offsetTop;
          window.scrollTo({top : heightValue , behavior : "smooth"});
          if(heightValue >= 5778){
            switchValue = false;
          };
        } else{
          heightValue = 0;
          window.scrollTo({top : heightValue , behavior : "smooth"});
          switchValue = true;
        }
      });

      pageBtn.addEventListener('click', ()=>{
        window.scrollTo({top : 0 , behavior : "smooth"});
      });

      leftBtn.addEventListener('click', ()=> {
        window.scrollTo({top : prePage.offsetTop , behavior : "smooth"});
      });
  }
}


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



