
var menuBtn =document.getElementById("menuBtn");
var menu =document.getElementById("menu");
var sideNav =document.getElementById("sideNav");

menuBtn.onclick= function(){
    if(sideNav.style.right=="-100%")
    {
        sideNav.style.right="0";
        menu.src="images/close.png";
    }
    else
    {
        sideNav.style.right="-100%";
        menu.src="images/menu.png";
    }
}

// var menuBtn=document.getElementById("menuBtn");

// var menu=document.getElementById("menu");

// var sideNave=document.getElementById("sideNave");

// menuBtn.onclick= function(){
//     if(sideNave.style.right=="-250px")
//     {
//         sideNave.style.right="0";
//         menu.src="images/close.png";
//     }

//     else
//     {
//         sideNave.style.right="-250px";
//         menu.src="images/menu.png";
//     }
// }