function innerHTMLContact(text1, url1, url2){
  return(
`    <div>
      <section>
        <h2 class = "sub-title-txt">5. Contact me</h2>
        <h4 data-sub = "2">So I...</h4>
        <p>${text1}</p>
      </section>

      <section>
      <h4 data-sub = "2">If you want to contact to me</h4>

      <div>
        <div class = "sub-txt">E-mail : </div>
        <img src = "${url1}"  data-img = "1">
      </div>

      <div>
        <div class = "sub-txt">mobile : </div>
        <img src = "${url2}" data-img = "1">
      </div>

      <div>
        <div class = "sub-txt">Instargram</div>
        <div></div>
      </div>
      </section>

      <section>
        <h4 data-sub = "2">Resume</h4>
        <div>이력서 보기</div>
        <div></div>
      </section>
    </div>

    <div id = "page-box7">
      <div>
      <i class="fa-solid fa-caret-left"></i>
      </div>
      <div>page</div>
      <div>
      <i class="fa-solid fa-caret-right"></i>
      </div>
    </div>
    `
  )
}

export default innerHTMLContact;