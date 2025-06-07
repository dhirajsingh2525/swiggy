let loginBtn = document.querySelector("#btn2")
let page = document.querySelector("#login-page")
let close = document.querySelector("#close" )


loginBtn.addEventListener("click", function(){
  page.style.right = 0
})
close.addEventListener("click",function(){
    page.style.right = "-35%"
})

var nextBtn = document.querySelector("#next-btn");
var prevBtn = document.querySelector("#prev-btn");
var sdiv = document.querySelector(".swipper-div1");
var sdiv2 = document.querySelector(".swipper-div2");
let lastImgDiv = document.querySelectorAll(".img-div1");



let totalScroll = 3;
let currentScroll = 0;
let flag = 0

nextBtn.addEventListener("click",function(){
    if(currentScroll<totalScroll){
      currentScroll++;
      flag  = -currentScroll*10
      sdiv.style.transform = `translateX(${flag}%)`
      sdiv2.style.transform = `translateX(${flag}%)`

      prevBtn.disabled = false
      prevBtn.style.opacity = 1;

      if(currentScroll === totalScroll){
        nextBtn.disabled = true
        nextBtn.style.opacity = 0.3
      }
    }
  })
  prevBtn.addEventListener("click",function(){
    if(currentScroll>0){
      currentScroll--;
      flag =  -currentScroll*10
     
     sdiv.style.transform = `translateX(${flag}%)`
    sdiv2.style.transform = `translateX(${flag}%)`

    nextBtn.disabled = false;
    nextBtn.style.opacity = 1
    }
    if(currentScroll === 0){
      prevBtn.disabled = true
      prevBtn.style.opacity = 0.3
    }
})

let preBtn = document.querySelector("#pre-btn");
let nexBtn = document.querySelector("#nex-btn");
let swipperImg = document.querySelector("#swipper-img");

let tScroll = 7; 
let cScroll = 0; 

function updateButtons() {
  if (cScroll === 0) {
    preBtn.disabled = true;
    preBtn.style.opacity = 0.5;
  } else {
    preBtn.disabled = false;
    preBtn.style.opacity = 1;
  }

  if (cScroll === tScroll) {
    nexBtn.disabled = true;
    nexBtn.style.opacity = 0.5;
  } else {
    nexBtn.disabled = false;
    nexBtn.style.opacity = 1;
  }
}

function updateSlider() {
  const flg = cScroll * -30;
  swipperImg.style.transform = `translateX(${flg}%)`;
  updateButtons();
}


nexBtn.addEventListener("click", function () {
  if (cScroll < tScroll) {
    cScroll++;
    updateSlider();
  }
});
preBtn.addEventListener("click", function () {
  if (cScroll > 0) {
    cScroll--;
    updateSlider();
  }
});
updateSlider();




let show = document.querySelector("#show")
let delevered = document.querySelector("#show-del")
let shows = document.querySelector("#fotter2")

show.addEventListener("click", function(){
  if(flag === 0){
   delevered.style.display = "block"
   show.innerHTML = "hide"
   shows.style.marginTop = "20%"
   flag =1
  }else{
    delevered.style.display = "none"
    show.innerText = "Show more"
    shows.style.marginTop = "0%"
    flag =0
  }
})
let ftrshows = document.querySelector("#fotter2 #show")
console.log(shows);
let delevereds = document.querySelector("#fotter2 #show-del")
let f3 = document.querySelector("#footer3")


ftrshows.addEventListener("click", function(){
  if(flag === 0){
   delevereds.style.display = "block"
   ftrshows.innerHTML = "hide"
   f3.style.marginTop = "20%"
   flag =1
  }else{
    delevereds.style.display = "none"
    ftrshows.innerText = "Show more"
    f3.style.marginTop = "0%"
    flag =0
  }
})

