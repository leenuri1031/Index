function innerHTMLIAm(iam, like, did){
  return(
`    <div>
      <h2>1. I'm...</h2>
      <section>
        <div>
          <h4>나는 입니다.</h4>
          <p>${iam}</p>
        </div>
        <div></div>
      </section>
      <section>
        <div>
          <h4>나는 좋아합니다.</h4>
          <p>${like}</p>
        </div>
        <div></div>
      </section>
      <section>
        <div>
          <h4>나는 했습니다.</h4>
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