function innerHTMLContact(text1, url1, url2){
  return(
`    <div>
      <section>
        <h2 class = "sub-title-txt">5. Contact me</h2>
        <h4>So I...</h4>
        <p>${text1}</p>
      </section>
      <section>
      <h4>If you want to contact to me</h4>
      <div>
        <div>E-mail : </div>
        <img src = "${url1}">
      </div>
      <div>
        <div>mobile : </div>
        <img src = "${url2}">
      </div>
      <div>
        <div>Instargram</div>
        <div></div>
      </div>
      </section>
      <section>
        <h4>Resume</h4>
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