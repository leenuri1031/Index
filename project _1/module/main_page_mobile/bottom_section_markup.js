import { footer } from "../basic/const.js";
import { footerStyle } from "./bottom_section_style.js";

export function footerMenu() {
  footer.innerHTML = `
  <ul>
  <li>my trip</li>
  <li><a href="/project _1/module/trip_style_page/2022.04.05_trip_style.html"> trip style</a></li>
  <li>home</li>
  <li>route</li>
  <li>information</li>
  </ul>
  `;

  footerStyle();
}

export default footerMenu();
