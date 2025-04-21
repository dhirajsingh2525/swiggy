let loginBtn = document.querySelector("#btn2")
let page = document.querySelector("#login-page")
let close = document.querySelector("#close" )

loginBtn.addEventListener("click", function(){
  page.style.right = 0
})
close.addEventListener("click",function(){
    page.style.right = "-30%"
})

// var i1 = document.querySelector("#i1")
// var i2 = document.querySelector("#i2")
// var card = document.querySelector(".wrapper")

// var flag = 0
// i1.addEventListener('click',function(){
//     flag += 60
//     card.style.right = flag+"%"
// })
// i2.addEventListener('click',function(){
//       flag -= 60
//       card.style.right = flag+"%"
//     if(flag === 0){
//         i2.disabled = true;
//         i2.style.opacity = 0.3
//     }
//   })

var nextBtn = document.querySelector("#next-btn");
var prevBtn = document.querySelector("#prev-btn");
var sdiv = document.querySelector(".swipper-div1");
var sdiv2 = document.querySelector(".swipper-div2");
let lastImgDiv = document.querySelectorAll(".img-div1");




let flag = 0;
nextBtn.addEventListener("click",function(){
    flag -= 10;
    sdiv.style.transform = `translateX(${flag}%)`
    sdiv2.style.transform = `translateX(${flag}%)`
    if(flag == 60){
      nextBtn.disabled = true
      nextBtn.style.opacity = 0.3
    }else{
      prevBtn.disabled = false
    }
  })
  prevBtn.addEventListener("click",function(){
    flag += 10;
    sdiv.style.transform = `translateX(${flag}%)`
    sdiv2.style.transform = `translateX(${flag}%)`
    if(flag === 0){
      prevBtn.disabled = true
    }else{
      nextBtn.disabled = false;
    }
})

 
