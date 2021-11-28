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

  //remove the animation style from every imaged
  images.forEach(image => {
    image.style.animation = ""
  })

  //pick the right image
  images[currentSlide].style.zIndex = z
  images[currentSlide].style.animation = "fade 0.5s"
})

//when i put my mouse over the slide area, put all of the images in a
//random place
slideArea.addEventListener("mouseenter", function(){
  images.forEach(image => {
    const x = 25 * Math.floor(Math.random()*5) - 50
    const y = 25 * Math.floor(Math.random()*5) - 50

    image.style.transform = `translate(${x}px, ${y}px)`
  })
})

//when mouse is moved away reset image position
slideArea.addEventListener("mouseleave", function(){
  images.forEach(image => {
    image.style.transform = ""
  })
})
