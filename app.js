///const titleYT = document.querySelector('h1.style-scope.ytd-video-primary-info-renderer');

const titleEx = document.querySelector("#TitleKeep")


const btn = document.querySelector("button")


btn.addEventListener('click', function(){

    browser.tabs.executeScript({
        file: "page-eater.js"
      });

titleEx.innerText=document.querySelector("h1.style-scope.ytd-video-primary-info-renderer");

})

