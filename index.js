var menu_icon = document.getElementById("menu_icon")
var side_navbar = document.getElementById("side_navbar")
var side_navbar_close = document.getElementById("side_navbar_close")
var sidenav = document.getElementById("sidenav")

menu_icon.addEventListener("click", function () {
    sidenav.style.display = "block"
})

side_navbar_close.addEventListener("click", function () {
    sidenav.style.display = "none"

})

// products page 
// search functionality

var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
// select all div from big div 
var nameList = productContainer.querySelectorAll("div")
console.log(nameList)

search.addEventListener("keyup", function () {
    enteredValues = event.target.value.toUpperCase()
    for (count = 0; count < nameList.length; count = count + 1) {

        if (nameList[count].textContent.toUpperCase().indexOf(enteredValues) < 0) {
            nameList[count].style.display = "none"
        }
        else {
            nameList[count].style.display = "block"
        }


    }

})
