import {footer,mobileWidth, tabletWidth, desktopWidth} from "../basic/const.js";
import { footerStyle } from "./bottom_section_style.js";


export function footerMenu(){

  footer.innerHTML = `
  <ul>
  <li>home</li>
  <li>my trip</li>
  <li>my trip style</li>
  <li>route</li>
  <li>information</li>
  </ul>
  `;

  footerStyle();
}

export default footerMenu();