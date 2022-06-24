
export function pcInnerHTMLTitle(src){
  return(
`    <div>
      <img src = "${src}">
      <div>
        <div>Qué será será</div>
        <div>El mundo’s story</div>
      </div>
    </div>`
  );
}

export function pcInnerHTMLSub(src){
  return(
`    <div>
      <img src = "${src}">
      <div>
        <div>Written & Illust</div>
        <div>by El mundo</div>
      </div>
    </div>`
  );
}

export function pcInnerHTMLIllust(src, txt){
  return(
    `<div>
    <img src = "${src}">
    <div>${txt}</div>
    </div>`
  );
}

export function pcInnerHTMLIamLeft(iam, like){
  return(
    `<div>
    <h2>1. I'm...</h2>
    <div>
      <div>
        <h4>I am...</h4>
        <div>${iam}</div>
      </div>
      <div></div>
    </div>
    <div>
      <div>
        <h4>I like...</h4>
        <div>${like}</div>
      </div>
      <div></div>
    </div>`
  );
}

export function pcInnerHTMLIamRignt(did){
  return(
    `<div>
    <div>
      <div>
        <h4>I did</h4>
        <div>${did}</div>
      </div>
      <div></div>
    </div>
    <div>
      <div></div>
      <div></div>
    </div>
  </div>`
  );
}

export function pcInnerHTMLNow(now1, now2){
  return(
    `
  <div>
    <h2>2. Now I...</h2>
    <div>
      <div>
        <h4>Now I...ing</h4>
        <div>${now1}</div>
        <div>${now2}</div>
      </div>
      <div></div>
    </div>
    <div>
      <div></div>
      <div></div>
    </div>
  </div>`
  );
}

export function pcInnerHTMLProject1(txt){
  return(
    `
  <div>
    <h2>3. This is my...</h2>
    <div>
      <h4>This is my ${txt} project</h4>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div>
      <div></div>
    </div>
  </div>`
  );
}

export function pcInnerHTMLProject2(txt, num){
  return(
    `
  <div>
    <div>
      <h4>I made it like this</h4>
      <div>${txt}</div>
    </div>
    <div>
      <h4>See a project</h4>
      <div>sample page</div>
      <div><a href = "https://github.com/leenuri1031/project-${num}.git" target="_blank">github</a></div>
    </div>
  </div>
  `
  );
}

