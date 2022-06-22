function innerHTMLSomeday(text1, text2){
  return (
`    <div>
      <section>
        <h2 class = "sub-title-txt">4. Someday I...</h2>
        <h4>Someday I want...</h4>
        <p>${text1}</p>
        <div class = "img-circle"></div>
      </section>
      <section>
        <h4>My dream is...</h4>
        <p>${text2}</p>
        <div class = "img-circle"></div>
      </section>
    </div>
    <div id = "page-box6">
    <div>
      <i class="fa-solid fa-caret-left"></i>
    </div>
    <div>page</div>
    <div>
      <i class="fa-solid fa-caret-right"></i>
  </div>`
  )
}

export default innerHTMLSomeday;