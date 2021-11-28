//pick all of the images and layer them based on z-index
const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")

let currentSlide = 0
let z = 1

//when slide area is clicked changed the slide based on z index

slideArea.addEventListener("click", function(){
  currentSlide ++

  if (currentSlide > images.length - 1){
    currentSlide = 0
  }

  z ++
  //pick the right image
  images[currentSlide].style.zIndex = z

})
