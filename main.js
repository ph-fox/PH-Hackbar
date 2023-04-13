var html = `
<div onload='PHLoadSite();' class="PH-Hackbar" id="PH-main">
  <div class="PH-Logo-Banner">
    <h1>PlagueSecurity Hackbar</h1>
  </div>  
  <div class="PH-stage">
    <textarea id="PH-site-input" autofocus></textarea>
  </div>
<hr>
  <div class="PH-btn-wrap">
    <button id='PH-exec'>Execute</button>
    <button id='PH-exec'>UNION</button>
    <button id='PH-exec'>WAF</button>
  </div>
</div><br><br><br><br><br><br><br><br><br>
`+document.documentElement.innerHTML;
document.documentElement.innerHTML = html;

var onExec = document.getElementById('PH-exec');

window.onscroll = function() {stick()};
var PlagueSecHacbar = document.getElementById("PH-main");
var sticky = PlagueSecHacbar.offsetTop;

chrome.storage.sync.get("PH-site", function(siteData) {
  var site = siteData['PH-site'];
  document.getElementById('PH-site-input').value = site;
});


function stick() {
  if (window.pageYOffset >= sticky){
    PlagueSecHacbar.classList.add("stick")
  }else{
    PlagueSecHacbar.classList.remove("stick");
  }
}


onExec.addEventListener('click', function Execute(){
  var site = document.getElementById('PH-site-input').value;
  chrome.storage.sync.set({['PH-site']: site}, function(){
    window.location.href=site;
  });
});

