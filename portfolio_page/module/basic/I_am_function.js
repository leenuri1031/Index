function innerHTMLIAm(iam, like, did){
  return(
`    <div>
      <h2>1. I'm...</h2>
      <section>
        <div>
          <h4>I am...</h4>
          <p>${iam}</p>
        </div>
        <div></div>
      </section>
      <section>
        <div>
          <h4>I like...</h4>
          <p>${like}</p>
        </div>
        <div></div>
      </section>
      <section>
        <div>
          <h4>I did</h4>
          <p>${did}</p>
        </div>
        <div></div>
      </section>
    </div>
    <div id = "page-box2">
    <div>
    <i class="fa-solid fa-caret-left"></i>
    </div>
    <div>page</div>
    <div>
    <i class="fa-solid fa-caret-right"></i>
    </div>
  </div>`
  );
}
export default innerHTMLIAm;