function innerHTMLProject1(txt){
  return(
`    <div>
      <section>
        <h2 class = "sub-title-txt">3. This is my...</h2>
        <h4 class = "sub-title-txt">This is my first project</h4>
        <div>
          <div class = "img-box"></div>
          <div class = "img-box"></div>
        </div>
      </section>
      <section>
        <h4 class = "sub-title-txt">I made it like this</h4>
        <p id = "project-text1">${txt}</p>
      </section>
      <section>
        <h4 class = "sub-title-txt">See a project</h4>
        <div>
          <div class = "round-border"><a href = "module/project_link/project1_page.html" target="_blank">project process</a></div>
          <div class = "round-border"><a href = "/project _1/index.html" target="_blank">sample page</a></div>
          <div class = "round-border"><a href = "https://github.com/leenuri1031/project-1.git" target="_blank">github</a></div>
        </div>
      </section>
    </div>
    <div id = "page-box4">
      <div>
        <i class="fa-solid fa-caret-left"></i>
      </div>
      <div>page</div>
      <div>
        <i class="fa-solid fa-caret-right"></i>
    </div>
  </div>
    `
  );
}

export default innerHTMLProject1;