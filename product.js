var sidenav = document.getElementById("sidenav")
var menuclose = document.getElementById("menubarclose")
var menu = document.getElementById("menuicon")
menu.addEventListener("click", function(){
    sidenav.style.right= 0
})
 menuclose.addEventListener("click", function(){
      sidenav.style.right="-30%"
})
// product__container
var search = document.getElementById("search")
    var productcontainer = document.getElementById("product__container")
    var productList = productcontainer.querySelectorAll("div")
 
    search.addEventListener("keyup", function(){
        var enteredvalue = event.target.value.toUpperCase()
        
        for(count=0; count<productList.length; count++){
           var productname = productList[count].querySelector("h1").textContent

            if(productname.toUpperCase().indexOf(enteredvalue)<0){
                productList[count].style.display="none"
            }
            else{
                productList[count].style.display="block"
            }
        }
    })