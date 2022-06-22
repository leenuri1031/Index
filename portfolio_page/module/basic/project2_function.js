function innerHTMLProject2(txt){
  return(
`    
    <div>
      <section>
      <h4>This is my second project</h4>
        <div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section>
      <h4>I made it like this</h4>
        <p id = "project2-text">${txt}</p>
      </section>
      <section>
        <h4>See a project</h4>
        <div>
          <div class = "round-border">project process</div>
          <div class = "round-border">sample page</div>
          <div class = "round-border"><a href = "https://github.com/leenuri1031/project-2.git" target="_blank">github</a>
          </div>
        </div>
      </section>
    </div>
    <div id = "page-box5">
      <div>
        <i class="fa-solid fa-caret-left"></i>
      </div>
      <div>page</div>
      <div>
        <i class="fa-solid fa-caret-right"></i>
    </div>
    `
  )
}

export default innerHTMLProject2;