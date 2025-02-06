var menu_icon = document.getElementById("menu_icon")
var side_navbar = document.getElementById("side_navbar")
var side_navbar_close = document.getElementById("side_navbar_close")
var sidenav = document.getElementById("sidenav")

menu_icon.addEventListener("click", function()
{
    sidenav.style.display="block"
})

side_navbar_close.addEventListener("click",function(){
    sidenav.style.display="none"
    
})