
// * 1. 모바일버전과 태블렛버전은 scroll이 없는 페이지이고, 데스크탑버전만 scroll이 있음
// * 2. html문서에는 root만 있는 상태임
// * 3. 모바일버전의 커버페이지 만들기 mobile width min : 480px
// * 4. 타블렛버전의 커버페이지 만들기 tablet width min : 780px
// * 5. 데스크탑버전의 페이지는 all페이지임 desktop width min : 1080px 높이 : 700vh
// * 
// * 

// mobile_ver
// * pseudo 디바이스 보이는 창 min-width:480px 이라면 
// * pseudo root에 container 생성 functionObj.createElement('div', root) 이용
// * pseudo container 식별 후 사이즈  functionObj.size(container, '', '')이용

// * pseudo container 안에 두개의 div박스 만들어 주기 
// * pseudo container 안에 두개의 div 식별 후 사이즈
// * pseudo functionObj.size(container, '', '')이용
// * pseudo container > div:nth-child(1) flex, space-evenly, center, column 
// * pseudo container > div:nth-child(2) flex, flex-end, flex-end, column 

// * pseudo container > div:nth-child(1).createElement / textContent <h1>Qué será será</h1> 
// * pseudo <h3>El mundo’s story</h3> 만들기

// * pseudo container > div:nth-child(2).createElement / textContent  <p>Written by El mundo</p> 
// * pseudo <p>Illustration by  El mundo</p> 만들기

// tablet_ver
// * pseudo 디바이스 보이는 창 min-width:780px 이라면 
// * pseudo root에 container 생성 functionObj.createElement('div', root) 이용
// * pseudo container 식별 후 사이즈  functionObj.size(container, '', '')이용

// * pseudo container 안에 두개의 div박스 만들어 주기 
// * pseudo container 안에 두개의 div 식별 후 사이즈
// * pseudo functionObj.size(container, '', '')이용
// * pseudo container > div:nth-child(1) flex, space-evenly, center, column 
// * pseudo container > div:nth-child(2) flex, flex-end, flex-end, column 

// * pseudo container > div:nth-child(1).createElement / textContent <h1>Qué será será</h1> 
// * pseudo <h3>El mundo’s story</h3> 만들기

// * pseudo container > div:nth-child(2).createElement / textContent  <p>Written by El mundo</p> 
// * pseudo <p>Illustration by  El mundo</p> 만들기

// desktop_ver
// * pseudo 디바이스 보이는 창 min-width:780px 이라면 
// * root.stlye.height = '700vh';
// * pseudo container * 7
// * pseudo container  flex - center - center  > (div*2) *7


// * pseudo 
// * pseudo 
// * pseudo 
// * pseudo 
// * pseudo 
// * pseudo 







