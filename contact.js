
var sidenav = document.getElementById("sidenav")
var menuclose = document.getElementById("menubarclose")
var menu = document.getElementById("menuicon")
menu.addEventListener("click", function(){
    sidenav.style.right= 0
})
 menuclose.addEventListener("click", function(){
      sidenav.style.right="-30%"
})