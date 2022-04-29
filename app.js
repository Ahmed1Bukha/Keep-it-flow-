///const titleYT = document.querySelector('h1.style-scope.ytd-video-primary-info-renderer');

const titleEx = document.querySelector("#TitleKeep")


const btn = document.querySelector("button")


btn.addEventListener('click', function(){
const gettingCurrent = browser.tabs.getCurrent()

titleEx.innerText= gettingCurrent.document.querySelector("h1.style-scope.ytd-video-primary-info-renderer").innerText;

 





})

