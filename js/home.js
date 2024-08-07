
// sidebar
function openSlideMenu(){
    document.getElementById('side-menu').style.width = '250px';
   
 }
 
 function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
    
 }



/* Auto text */
let typed = new Typed(".tolu", {
   strings:[  "Design Website", "are Web Developer"],
   typeSpeed: 100,
   BackSpeed: 60,
   loop: true
})


/* Background change on scroll */
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
}) 




// slider
  const people = document.querySelectorAll('.personPer');
  const prevBtn = document.querySelector('#up');
  const nextBtn = document.querySelector('#down');
  const autoPlay = true;
  let autoPlaypersonPer;
  
  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);
  
  function showPrev(){
      prevpersonPer()
      //reset autoplay after clicking arrow
      if(autoPlay){
          //stop autoplay
          clearInterval(autoPlaypersonPer)
          //resume autoplay
          autoPlaypersonPer = setInterval(nextpersonPer,4000)
      }
  }
  
  function showNext(){
      nextpersonPer();
          //reset autoplay after clicking arrow
          if(autoPlay){
              //stop autoplay
              clearInterval(autoPlaypersonPer)
              //resume autoplay
              autoPlaypersonPer = setInterval(nextpersonPer,4000)
          }
  }
  
  function prevpersonPer(){
      //select active
      const activepersonPer = document.querySelector('.show')
      //remove active
      activepersonPer.classList.remove('show')
      if(activepersonPer.previousElementSibling){
          activepersonPer.previousElementSibling.classList.add('show')
      } else {
          // add active class to last personPer
          people[people.length - 1].classList.add('show')
      }
  }
  
  function nextpersonPer(){
      //select active
      const activepersonPer = document.querySelector('.show')
      //remove active
      activepersonPer.classList.remove('show')
      if(activepersonPer.nextElementSibling){
          activepersonPer.nextElementSibling.classList.add('show')
      } else {
          people[0].classList.add('show')
      }
  }
  
  // create auto play sliderSlide
  if(autoPlay){
      autoPlaypersonPer = setInterval(nextpersonPer, 4000)
  }




// skills-tab
const tabs = document.querySelectorAll('[data-target]'),
tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
   tab.addEventListener("click", () =>{
      const target = document.querySelector(tab.dataset.target)

      tabContent.forEach(tabContents =>{
        tabContents.classList.remove('skills_active')
      })

      target.classList.add('skills_active')


      tabs.forEach(tab =>{
         tab.classList.remove('skills_active')
       })
 
       tab.classList.add('skills_active')
   })
})



/* Mixitup */
let mixerportfolio = mixitup(".work_container", {
   selectors: {
       target: ".work_card"
   },
   animation: {
       duration: 300
   }
});

/* link active work */
const linkWork = document.querySelectorAll(".work_item")

function activeWork(){
    linkWork.forEach(l=> l.classList.remove("active-work"))
    this.classList.add("active-work")
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))


/*woek popup */
document.addEventListener("click", (e) =>{
   if(e.target.classList.contains("work_button")){
       togglePortfolioPopup();
       portfolioItemDetails(e.target.parentElement);
   }
})

function togglePortfolioPopup(){
   document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".portfolio_popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
   document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
   
   document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
   
     document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}





// SERVICES MODAL
const modalViews = document.querySelectorAll('.services_modal'),
modalBtns = document.querySelectorAll('.services_button'),
modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
   modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
   modalBtn.addEventListener('click', () =>{
      modal(i)
   })
})

modalCloses.forEach((modalClose) =>{
   modalClose.addEventListener("click", () =>{
      modalViews.forEach((modalView) =>{
         modalView.classList.remove('active-modal')
      })
   })
})



     
// progress bar
$(document).ready(function(){
  $('.progress-value > span').each(function(){
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      },{
          duration: 3500,
          easing: 'swing',
          step: function (now){
              $(this).text(Math.ceil(now));
          }
      });
  });
});



// form validation (modal box)
function newsletterBtnB(){
   let newsBoxOne = document.getElementById("newsletterEmail").value;

   if(newsBoxOne === ""){
     document.getElementById("newsletterEmailRed").innerHTML = "Field cannot be embty";
     document.getElementById("newsletterEmailGreen").innerHTML = "";
   }

   else{
     document.getElementById("newsletterEmailGreen").innerHTML = "Thanks for your intrest";
     document.getElementById("newsletterEmailRed").innerHTML = "";
   }
  }



 // modal box
// Get the modal
var newsletter = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("ModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  newsletter.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  newsletter.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == newsletter) {
    newsletter.style.display = "none";
  }
}



      /* Scroll top */
let scrollTop = document.querySelector(".backto-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
}) 
 






