import {main,mobileWidth, tabletWidth, desktopWidth} from "../basic/const.js";
import { mainSectionTopStyle } from "./middle_section_style_1.js";
import { mainSectionBottomStyle } from "./middle_section_style_2.js";

export function mainSection(){

    // console.log('hello')
    main.innerHTML = `
    <section data-section-content= "0">
      <div>
        <div>
        <a href="/project _1/module/trip_style_page/2022.04.05_trip_style.html">
        <p>my trip style </p>
        <i class="fa-solid fa-angles-right"></i>
        </a>
        </div>
      </div>
      <div></div>
    </section>
  
    <section data-section-content ="1"> 
      <div>Information</div>
      <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      </ul>
    </section>`;
  
    mainSectionTopStyle();
    mainSectionBottomStyle();
  } 

export default mainSection();
