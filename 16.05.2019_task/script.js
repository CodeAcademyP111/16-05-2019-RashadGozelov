var baki=document.querySelector(".first");
var sheki=document.querySelector(".second");
var lerik=document.querySelector(".third");
var kurdemir=document.querySelector(".fourth");
var contentbaki=document.querySelector("#first");
var contentsheki=document.querySelector("#second");
var contentlerik=document.querySelector("#third");
var contentkurdemir=document.querySelector("#fourth");


baki.addEventListener("click",function(){
    contentbaki.classList.add("view")
    contentsheki.classList.remove("view")
    contentlerik.classList.remove("view")
    contentkurdemir.classList.remove("view")
})
sheki.addEventListener("click",function(){
    contentbaki.classList.remove("view")
    contentsheki.classList.add("view")
    contentlerik.classList.remove("view")
    contentkurdemir.classList.remove("view")
})
lerik.addEventListener("click",function(){
    contentbaki.classList.remove("view")
    contentsheki.classList.remove("view")
    contentlerik.classList.add("view")
    contentkurdemir.classList.remove("view")
})
kurdemir.addEventListener("click",function(){
    contentbaki.classList.remove("view")
    contentsheki.classList.remove("view")
    contentlerik.classList.remove("view")
    contentkurdemir.classList.add("view")   
})




// var allLi = document.querySelectorAll("#tabs ul li");

// for (var i = 0; i < allLi.length; i++) {
//     allLi[i].addEventListener("click",function(){
//         console.log(this)
//     })
// }