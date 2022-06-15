import {main} from "../basic/const.js";

export function mainSection(){
  main.innerHTML = `
  <section data-section-content= "0">
    <div>
    <p>my trip style </p>
    <p>-></p>
    </div>
    <div></div>
  </section>

  <section data-section-content ="1"> 
    <div>Information</div>
    <div>
      <div>
        <div>Tokyo</div>
        <div>Hokkaido</div>
      </div>
      <div>
        <div>Kyoto</div>
        <div>Osaka</div>
      </div>
      <div>
        <div>Hukuoka</div>
        <div>Okinawa</div>
      </div>
    </div>
  </section>`;
} 

export default mainSection();
