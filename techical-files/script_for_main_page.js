document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider')
  let slides = []
  let slideCount = 0
  let controlButtons = []
  let prevButton = null
  let nextButton = null
  const activeSlides = 'slide--active'
  const activeButton = 'active'
  const inactiveButton = 'aria-disabled'
  const currentButton = 'aria-current'

  if (slider) {
    slides = slider.querySelectorAll('.slide')
    slideCount = slides.length
    controlButtons = slider.querySelectorAll('.button-radio')
    prevButton = slider.querySelector('.button-prev')
    nextButton = slider.querySelector('.button-next')
  }

  const buttonToTop = document.querySelector('.button-to-top')
  let currentSlide = 0
  function updateSlider() {
    if (!slider) return
    slides.forEach((slide, index) => {
      if(index === currentSlide) {
        slide.classList.add(activeSlides)
      } else {
        slide.classList.remove(activeSlides)
      }
    })

    controlButtons.forEach((button, index) => {
      if (index === currentSlide) {
        button.classList.add(activeButton)
        button.setAttribute(currentButton, true)
      } else {
        button.classList.remove(activeButton)
        button.removeAttribute(currentButton, true)
      }
    })
  }
  if (slider) {
    controlButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        if (index < slideCount) {
          currentSlide = index
          updateSlider()
        }
      })
    })
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        currentSlide--
        if (currentSlide < 0) {
          currentSlide = slideCount - 1
        }
        updateSlider()
      })
    }
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        currentSlide++

        if (currentSlide >= slideCount) {
          currentSlide = 0
        }

        updateSlider()
      })
    }

    slider.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft' && currentSlide > 0) {
        currentSlide--
        updateSlider()
      } else if (event.key === 'ArrowRight' && currentSlide < slideCount - 1) {
        currentSlide++
        updateSlider()
      }
    })
  }

  if (slider) {
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slideCount
      updateSlider()
    }, 5000);

    updateSlider()
  }

  buttonToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  });

  // кнопка вверх
  window.addEventListener('scroll', () => {
  buttonToTop.classList.toggle('show', window.scrollY > 250);
  });   




// ГАЛЕРЕЯ
const galleries = document.querySelectorAll(".gallery")

const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightbox-img")

const prevBtn = document.querySelector(".lightbox-prev")
const nextBtn = document.querySelector(".lightbox-next")
const closeBtn = document.querySelector(".lightbox-close")

let currentGallery = []
let currentIndex = 0

galleries.forEach(gallery => {

    const images = gallery.querySelectorAll(".gallery-img")
    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentGallery = images
            currentIndex = index
            showImage()

        })
    })
})
function showImage(){

    lightboxImg.src = currentGallery[currentIndex].src
    lightbox.classList.add("show")
}
prevBtn.addEventListener("click", ()=>{

    currentIndex--

    if(currentIndex < 0)
        currentIndex = currentGallery.length - 1

    showImage()

})
nextBtn.addEventListener("click", ()=>{

    currentIndex++

    if(currentIndex >= currentGallery.length)
        currentIndex = 0

    showImage()

})
closeBtn.addEventListener("click", ()=>{
    lightbox.classList.remove("show")
})
function closeLightbox(){
    lightbox.classList.remove("show")
}
closeBtn.addEventListener("click", closeLightbox)
lightbox.addEventListener("click", (event) => {

    if(event.target === lightbox){
        closeLightbox()
    }

})

document.addEventListener("keydown", (event)=>{

    if(event.key === "Escape"){
        lightbox.classList.remove("show")
    }

})

//ДЛЯ FAQ.html
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        answer.classList.toggle('open');
    });
});



document.querySelectorAll('.our-works-in-section-h2').forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        answer.classList.toggle('open');
    });
});

//
//document.querySelectorAll('.our-works-in-section-h2').forEach(q => {
  //  q.addEventListener('click', () => {
   //     const gallery = q.nextElementSibling;
   //     if (gallery.classList.contains('open')) {
   //         gallery.style.maxHeight = null;
   //         gallery.classList.remove('open');
   //     } else {
    //        gallery.classList.add('open');
   //         gallery.style.maxHeight = gallery.scrollHeight + 'px';
   //     }
  //  });
//});

})

